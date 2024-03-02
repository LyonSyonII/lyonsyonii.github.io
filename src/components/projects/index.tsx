import { ComponentChildren } from "preact";
import { Project } from "../../../gitprofile.config";
import { skeleton } from "../../helpers/utils";
import LazyImage from "../lazy-image";
import DynamicLink from "../dynamic-link";

function Projects({ projects = [], title = "", loading }: ProjectsProps) {
  return (
    <>
      {projects.length > 0 && (
        <div className="card compact max-w-full bg-base-100 bg-opacity-70 shadow">
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
            <div className="flex h-full flex-wrap gap-6">
              {loading ? renderSkeleton(projects) : renderProjects(projects)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function renderProjects(projects: Project[]): ComponentChildren {
  const linkClass =
    "card compact min-w-full cursor-pointer bg-base-100 shadow-lg lg:w-1/3 lg:min-w-min";

  return projects.map((item, index) => (
    <DynamicLink to={item.link} className={linkClass} key={index}>
      <div className="p-4">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="px-4">
              <div className="w-full text-center">
                <h2 className="mb-2 text-center text-lg font-semibold tracking-wide opacity-60">
                  {item.title}
                </h2>
                {item.imageUrl && (
                  <div className="avatar overflow-visible opacity-90">
                    <div className="h-16 w-16">
                      <LazyImage
                        src={item.imageUrl}
                        alt={"thumbnail"}
                        children={skeleton({
                          width: "w-full",
                          height: "h-full",
                          shape: "",
                        })}
                      />
                    </div>
                  </div>
                )}
                <p className="mt-1 text-sm text-base-content text-opacity-60">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DynamicLink>
  ));
}

function renderSkeleton(projects: Project[]): ComponentChildren {
  return projects.map((_, index) => (
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
  ));
}

type ProjectsProps = {
  projects?: Project[];
  title?: string;
  loading: boolean;
};

export default Projects;
