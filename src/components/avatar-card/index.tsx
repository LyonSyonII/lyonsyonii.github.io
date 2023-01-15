import { fallbackImage, skeleton } from "../../helpers/utils";
import LazyImage from "../lazy-image";
import { Profile } from "../pages/Home";
import { Resume } from "../../../gitprofile.config";

const AvatarCard = ({ profile, loading, avatarRing, resume, className = "" }: AvatarCardProps) => {
  return (
    <div className={`card compact bg-base-100 shadow-lg ${className}`}>
      <div className="grid place-items-center p-2">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 h-32 w-32 rounded-full">
              {skeleton({
                width: "w-full",
                height: "h-full",
                shape: "",
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-4 h-24 w-32 rounded-full ${
                avatarRing ? "ring ring-primary ring-offset-2 ring-offset-base-100" : ""
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : fallbackImage}
                  alt={profile.name}
                  placeholder={skeleton({
                    width: "w-full",
                    height: "h-full",
                    shape: "",
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="mx-auto px-8 text-center">
          <h5 className="text-2xl font-bold">
            {loading || !profile ? (
              skeleton({ width: "w-48", height: "h-8" })
            ) : (
              <span className="text-base-content opacity-70">{profile.name}</span>
            )}
          </h5>
          <div className="mt-3 font-mono text-base-content text-opacity-60">
            {loading || !profile ? skeleton({ width: "w-48", height: "h-5" }) : profile.bio}
          </div>
        </div>
        {resume?.fileUrl &&
          (loading ? (
            <div className="mt-6">{skeleton({ width: "w-40", height: "h-8" })}</div>
          ) : (
            <a
              href={resume.fileUrl}
              target="_blank"
              className="btn-outline btn-sm btn mt-6 text-xs opacity-50"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

type AvatarCardProps = {
  profile?: Profile;
  loading: boolean;
  avatarRing: boolean;
  resume?: Resume;
  className?: string;
};

export default AvatarCard;
