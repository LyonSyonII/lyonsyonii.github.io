import { Fragment } from "preact";
import PropTypes from "prop-types";
import { ga, skeleton } from "../../helpers/utils";
import LazyImage from "../lazy-image";

const displaySection = (otherProject) => {
  if (otherProject && Array.isArray(otherProject) && otherProject.length) {
    return true;
  } else {
    return false;
  }
};

const OtherProject = ({ otherProjects, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < otherProjects.length; index++) {
      array.push(
        <div className="card compact bg-base-100 shadow-lg" key={index}>
          <div className="h-full w-full p-4">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: "w-32",
                        height: "h-8",
                        className: "mb-2 mx-auto",
                      })}
                    </h2>
                    <div className="avatar h-full w-full">
                      <div className="mask mask-squircle mx-auto h-16 w-16">
                        {skeleton({
                          width: "w-full",
                          height: "h-full",
                          shape: "",
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        width: "w-full",
                        height: "h-4",
                        className: "mx-auto",
                      })}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center justify-center">
                      {skeleton({
                        width: "w-full",
                        height: "h-4",
                        className: "mx-auto",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return otherProjects.map((item, index) => (
      <a
        className="card compact cursor-pointer bg-base-100 shadow-lg"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: "Click External Project",
                params: {
                  post: item.title,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, "_blank");
        }}
      >
        <div className="h-full w-full p-4">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <div className="px-4">
                <div className="w-full text-center">
                  <h2 className="mb-2 text-center text-lg font-semibold tracking-wide opacity-60">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="mask mask-squircle h-16 w-16">
                        <LazyImage
                          src={item.imageUrl}
                          alt={"thumbnail"}
                          placeholder={skeleton({
                            width: "w-full",
                            height: "h-full",
                            shape: "",
                          })}
                        />
                      </div>
                    </div>
                  )}
                  <p className="mt-1 text-sm text-base-content text-opacity-60">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      {displaySection(otherProjects) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 bg-opacity-70 shadow">
                <div className="card-body">
                  <div className="mx-3 mb-2 flex items-center justify-between">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: "w-40", height: "h-8" })
                      ) : (
                        <span className="text-base-content opacity-70">Other Projects</span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {loading ? renderSkeleton() : renderExternalProjects()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

OtherProject.propTypes = {
  otherProjects: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default OtherProject;
