import { skeleton } from "../../helpers/utils";
import { ComponentChildren, Fragment } from "preact";
import { Experience as ExperienceConfigType } from "../../../gitprofile.config";

const ListItem = ({ time, position, company, companyLink }: ListItemProps) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute mt-1.5 h-2 w-2 rounded-full border border-base-300 bg-base-300"
      style={{ left: "-4.5px" }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
  </li>
);

const Experience = ({ experiences, loading }: ExperienceProps) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            width: "w-5/12",
            height: "h-4",
          })}
          position={skeleton({
            width: "w-6/12",
            height: "h-4",
            className: "my-1.5",
          })}
          company={skeleton({ width: "w-6/12", height: "h-3" })}
        />
      );
    }

    return array;
  };
  return (
    <>
      {experiences?.length !== 0 && (
        <div className="card compact bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: "w-32", height: "h-8" })
                ) : (
                  <span className="text-base-content opacity-70">Experience</span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative my-2 mx-4 border-l border-base-300 border-opacity-30">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {experiences.map((experience, index) => (
                      <ListItem
                        key={index}
                        time={`${experience.from} - ${experience.to}`}
                        position={experience.position}
                        company={experience.company}
                        companyLink={experience.companyLink ? experience.companyLink : null}
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

type ListItemProps = {
  time?: ComponentChildren;
  position?: ComponentChildren;
  company?: ComponentChildren;
  companyLink?: string;
};

type ExperienceProps = {
  experiences: ExperienceConfigType[];
  loading: boolean;
};

export default Experience;
