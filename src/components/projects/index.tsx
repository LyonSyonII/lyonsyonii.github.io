import { Fragment } from "preact";
import { skeleton } from "../../helpers/utils";
import LazyImage from "../lazy-image";
import { Link } from "react-router-dom";
import { Project } from "../../../gitprofile.config";

function displaySection(projects: Project[]) {
  return projects && Array.isArray(projects) && projects.length > 0;
}

function Projects({ projects, title = "", loading }: ProjectsProps) {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < projects.length; index++) {
      array.push(
        <div className="card compact bg-base-100 shadow-lg" key={index}>
          <div className="h-full w-full p-6">
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

  const renderProjects = () => {
    return projects.map((item, index) => (
      <Link
        to={item.link}
        className="card compact cursor-pointer bg-base-100 shadow-lg"
        key={index}
      >
        <div className="p-4">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <div className="px-4">
                <div className="w-full text-center">
                  <h2 className="mb-2 text-center text-lg font-semibold tracking-wide opacity-60">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="h-16 w-16">
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
      </Link>
    ));
  };

  return (
    <Fragment>
      {displaySection(projects) && (
        <div className="card compact max-h-full max-w-full bg-base-100 bg-opacity-70 shadow">
          <div className="card-body">
            <div className="mx-3 mb-2">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: "w-40", height: "h-8" })
                ) : (
                  <span className="text-base-content opacity-70">{title}</span>
                )}
              </h5>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {loading ? renderSkeleton() : renderProjects()}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

type ProjectsProps = {
  projects?: Project[];
  title?: string;
  loading: boolean;
};

export default Projects;
