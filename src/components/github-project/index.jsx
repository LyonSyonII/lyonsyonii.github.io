import { Fragment } from "preact";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import PropTypes from "prop-types";
import { languageColor, skeleton } from "../../helpers/utils";
import { MdInsertLink } from "react-icons/md";

const GithubProject = ({ repo, loading, github }) => {
  if (!loading && Array.isArray(repo) && repo.length === 0) {
    return <></>;
  }

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < github.limit; index++) {
      array.push(
        <div className="card compact bg-base-100 shadow-lg" key={index}>
          <div className="flex h-full w-full flex-col justify-between p-8">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      width: "w-32",
                      height: "h-8",
                      className: "mb-1",
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  width: "w-full",
                  height: "h-4",
                  className: "mb-2",
                })}
                {skeleton({ width: "w-full", height: "h-4" })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ width: "w-12", height: "h-4" })}
                </span>
                <span className="flex items-center">
                  {skeleton({ width: "w-12", height: "h-4" })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ width: "w-12", height: "h-4" })}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderProjects = () => {
    return repo.map((item, index) => (
      <a
        className="card compact cursor-pointer bg-base-100 shadow-lg"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          window?.open(item.html_url, "_blank");
        }}
      >
        <div className="flex h-full w-full flex-col justify-between p-8">
          <div>
            <div className="flex items-center">
              <div className="card-title flex text-lg tracking-wide text-base-content opacity-60">
                <MdInsertLink className="my-auto" />
                <span className="capitalize">{item.name}</span>
              </div>
            </div>
            <p className="mb-5 mt-1 text-sm text-base-content text-opacity-60">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60">
            <div className="flex flex-grow">
              <span className="mr-3 flex items-center">
                <AiOutlineStar className="mr-0.5" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-0.5" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <div
                  className="mr-1 h-3 w-3 rounded-full opacity-60"
                  style={{ backgroundColor: languageColor(item.language) }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 bg-opacity-40 shadow">
              <div className="card-body">
                <div className="mx-3 mb-2 flex items-center justify-between">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: "w-40", height: "h-8" })
                    ) : (
                      <span className="text-base-content opacity-70">GitHub Projects</span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ width: "w-10", height: "h-5" })
                  ) : (
                    <a
                      href={`https://github.com/${github.username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {loading || !repo ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

GithubProject.propTypes = {
  repo: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  github: PropTypes.object.isRequired,
};

export default GithubProject;
