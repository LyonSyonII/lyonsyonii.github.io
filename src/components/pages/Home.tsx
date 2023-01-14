import axios from "axios";
import { useCallback, useEffect, useState } from "preact/hooks";
import HeadTagEditor from "../head-tag-editor";
import ErrorPage from "../error-page";
import ThemeChanger from "../theme-changer";
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
import OtherProjects from "../other-project";
import MainProjects from "../main-project";
import CardContainer from "../card-container";
import { RawConfig } from "../../../gitprofile.config";

const Home = ({ config }: HomeProps) => {
  const [error, setError]: [any, any] = useState(
    typeof config === "undefined" && !config ? noConfigError : null
  );
  const [sanitizedConfig] = useState(
    typeof config === "undefined" && !config ? null : sanitizeConfig(config)
  );
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);

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
              <div className="rounded-box grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {!sanitizedConfig.themeConfig.disableSwitch && (
                      <ThemeChanger
                        theme={theme}
                        setTheme={setTheme}
                        loading={loading}
                        themeConfig={sanitizedConfig.themeConfig}
                      />
                    )}
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
                    <CardContainer loading={loading}>
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
                    <Education loading={loading} education={sanitizedConfig.education} />
                    <Certification
                      loading={loading}
                      certifications={sanitizedConfig.certifications}
                    />
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                  <div className="grid grid-cols-1 gap-6">
                    <MainProjects loading={loading} mainProjects={sanitizedConfig.mainProjects} />
                    <OtherProjects
                      loading={loading}
                      otherProjects={sanitizedConfig.otherProjects}
                    />
                    <GithubProjects repo={repo} loading={loading} github={sanitizedConfig.github} />
                  </div>
                </div>
              </div>
            </Page>
          )
        )}
      </div>
    </div>
  );
};

type CachedConfig = {
  date: number;
  profileData: { avatar: string; name: string; bio: string; location: string; company: string };
  repo: string[];
};

type HomeProps = {
  config: RawConfig;
};

export default Home;
