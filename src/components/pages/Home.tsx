import axios from "axios";
import { StateUpdater, useCallback, useEffect, useState } from "preact/hooks";
import HeadTagEditor from "../head-tag-editor";
import ErrorPage from "../error-page";
import AvatarCard from "../avatar-card";
import Details from "../details";
import Skills from "../skill";
import Experience from "../experience";
import Certification from "../certification";
import Education from "../education";
import GithubProjects from "../github-project";
import {
  genericError,
  getInitialTheme,
  noConfigError,
  notFoundError,
  tooManyRequestError,
  sanitizeConfig,
} from "../../helpers/utils";
import "../../assets/index.css";
import { formatDistance } from "date-fns";
import Page from "../page";
import CardContainer from "../card-container";
import { RawConfig } from "../../../gitprofile.config";
import Projects from "../projects";

const Home = ({ config }: HomeProps) => {
  const [error, setError]: [any, any] = useState(
    typeof config === "undefined" && !config ? noConfigError : null
  );
  const [sanitizedConfig] = useState(
    typeof config === "undefined" && !config ? null : sanitizeConfig(config)
  );
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile]: [Profile, StateUpdater<Profile>] = useState(null);
  const [repo, setRepo]: [Repo[], StateUpdater<Repo[]>] = useState(null);

  useEffect(() => {
    if (sanitizedConfig) {
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      loadData();
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const loadData = useCallback(async () => {
    let localConfig = localStorage.getItem("config");
    let config: CachedConfig = (localConfig && JSON.parse(localConfig)) || undefined;
    if (config && config.date + 86400000 /* day -> milliseconds */ > Date.now()) {
      setProfile(config.profileData);
      setRepo(config.repo);
      setLoading(false);
    } else {
      try {
        let response = await axios.get(
          `https://api.github.com/users/${sanitizedConfig.github.username}`
        );
        let data = response.data;
        let profileData = {
          avatar: data.avatar_url,
          name: data.name ? data.name : "",
          bio: data.bio ? data.bio : "",
          location: data.location ? data.location : "",
          company: data.company ? data.company : "",
        };
        setProfile(profileData);

        let excludeRepo = ``;
        if (data.public_repos === 0) {
          setRepo([]);
          return;
        }

        sanitizedConfig.github.exclude.projects.forEach((project) => {
          excludeRepo += `+-repo:${sanitizedConfig.github.username}/${project}`;
        });

        let query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.github.exclude
          .forks}${excludeRepo}`;
        let url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.github.sortBy}&per_page=${sanitizedConfig.github.limit}&type=Repositories`;
        response = await axios.get(url, {
          headers: {
            "Content-Type": "application/vnd.github.v3+json",
          },
        });

        setRepo(response.data.items);

        config = {
          date: Date.now(),
          profileData,
          repo: response.data.items,
        };

        setLoading(false);
      } catch (error) {
        handleError(error);
      }
    }

    config.date = Date.now();
    localStorage.setItem("config", JSON.stringify(config));
  }, [setLoading]);

  const handleError = (error: {
    response: { headers: { [x: string]: number }; status: number };
  }) => {
    console.error("Error:", error);
    try {
      let reset = formatDistance(
        new Date(error.response.headers["x-ratelimit-reset"] * 1000),
        new Date(),
        {
          addSuffix: true,
        }
      );

      if (error.response.status === 403) {
        setError(tooManyRequestError(reset));
      } else if (error.response.status === 404) {
        setError(notFoundError);
      } else {
        setError(genericError);
      }
    } catch (error2) {
      setError(genericError);
    }
  };

  return (
    <div>
      {sanitizedConfig && (
        <HeadTagEditor profile={profile} theme={theme} social={sanitizedConfig.social} />
      )}
      <div className="h-screen">
        {error ? (
          <ErrorPage status={`${error.status}`} title={error.title} subTitle={error.subTitle} />
        ) : (
          sanitizedConfig && (
            <Page>
              <div className="rounded-box flex flex-col gap-6">
                { /* ROW 1 */ }
                <div className="flex flex-col lg:flex-row justify-evenly gap-6">
                  <CardContainer
                    className="min-w-fit max-w-full lg:w-1/4"
                    innerClassName="grid grid-cols-1 lg:grid-cols-2 gap-3"
                  >
                    <AvatarCard
                      profile={profile}
                      loading={loading}
                      avatarRing={!sanitizedConfig.themeConfig.hideAvatarRing}
                      resume={sanitizedConfig.resume}
                    />
                    <Details
                      profile={profile}
                      loading={loading}
                      github={sanitizedConfig.github}
                      social={sanitizedConfig.social}
                    />
                  </CardContainer>
                  <CardContainer
                    className="max-w-full lg:w-2/4"
                    innerClassName="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-full"
                  >
                    <Skills
                      loading={loading}
                      skills={sanitizedConfig.skills}
                      title={"Tech Stack"}
                    />
                    <Skills
                      loading={loading}
                      skills={sanitizedConfig.some_experience_with}
                      title={"Some experience with..."}
                    />
                  </CardContainer>
                  <Experience loading={loading} experiences={sanitizedConfig.experiences} />
                  <Education
                    loading={loading}
                    education={sanitizedConfig.education}
                    className="lg:w-1/4"
                  />
                  <Certification
                    loading={loading}
                    certifications={sanitizedConfig.certifications}
                  />
                </div>
                { /* ROW 2 */ }
                <div className="grid gap-6 lg:grid-flow-col lg:grid-cols-2">
                  <Projects
                    title="Main Projects"
                    loading={loading}
                    projects={sanitizedConfig.mainProjects}
                  />
                  <Projects
                    title="Other Projects"
                    loading={loading}
                    projects={sanitizedConfig.otherProjects}
                  />
                </div>
                { /* ROW 3 */ }
                <GithubProjects repo={repo} loading={loading} github={sanitizedConfig.github} />
              </div>
            </Page>
          )
        )}
      </div>
    </div>
  );
};

export type Profile = {
  avatar: string;
  name: string;
  bio: string;
  location: string;
  company: string;
};

type CachedConfig = {
  date: number;
  profileData: Profile;
  repo: Repo[];
};

type HomeProps = {
  config: RawConfig;
};

export type Repo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  score: number;
};

export default Home;
