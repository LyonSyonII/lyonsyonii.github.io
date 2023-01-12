import PropTypes from "prop-types";
import { fallbackImage, skeleton } from "../../helpers/utils";
import LazyImage from "../lazy-image";

const AvatarCard = ({ profile, loading, avatarRing, resume }) => {
  return (
    <div className="card compact bg-base-100 shadow-lg">
      <div className="grid place-items-center py-8">
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
              className={`mb-8 h-24 w-32 rounded-full ${
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

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
