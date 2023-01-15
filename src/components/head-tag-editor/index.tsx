import {} from "preact";
import { isDarkishTheme } from "../../helpers/utils";
import { Profile } from "../pages/Home";
import { Social } from "../../../gitprofile.config";

const HeadTagEditor = ({ profile, theme, social }: HeadTagEditorProps) => {
  return (
    <>
      {profile && (
        <div>
          <title>{profile.name}&apos;s Portfolio</title>
          <meta name="theme-color" content={isDarkishTheme(theme) ? "#000000" : "#ffffff"} />

          <meta name="description" content={profile.bio} />

          <meta itemProp="name" content={`Portfolio${profile.name && ` of ${profile.name}`}`} />
          <meta itemProp="description" content={profile.bio} />
          <meta itemProp="image" content={profile.avatar} />

          <meta property="og:url" content={social?.website || ""} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`Portfolio${profile.name && ` of ${profile.name}`}`} />
          <meta property="og:description" content={profile.bio} />
          <meta property="og:image" content={profile.avatar} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`Portfolio${profile.name && ` of ${profile.name}`}`}
          />
          <meta name="twitter:description" content={profile.bio} />
          <meta name="twitter:image" content={profile.avatar} />
        </div>
      )}
    </>
  );
};

type HeadTagEditorProps = {
  profile?: Profile;
  theme?: string;
  social: Social;
};

export default HeadTagEditor;
