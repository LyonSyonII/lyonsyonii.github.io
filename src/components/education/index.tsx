import { ComponentChildren } from "preact";
import { Education as EducationConfigType } from "../../../gitprofile.config";
import { skeleton } from "../../helpers/utils";

const ListItem = ({ time, degree, institution }: ListItemProps) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute mt-1.5 h-2 w-2 rounded-full border border-base-300 bg-base-300"
      style={{ left: "-4.5px" }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
  </li>
);

const Education = ({ loading, education, className = "" }: EducationProps) => {
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
          degree={skeleton({
            width: "w-6/12",
            height: "h-4",
            className: "my-1.5",
          })}
          institution={skeleton({ width: "w-6/12", height: "h-3" })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {education?.length !== 0 && (
        <div className={`card compact bg-base-100 shadow-lg ${className}`}>
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: "w-32", height: "h-8" })
                ) : (
                  <span className="text-base-content opacity-70">Education</span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative mx-4 my-2 border-l border-base-300 border-opacity-30">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <>
                    {education.map((item, index) => (
                      <ListItem
                        key={index}
                        time={`${item.from} - ${item.to}`}
                        degree={item.degree}
                        institution={item.institution}
                      />
                    ))}
                  </>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

type EducationProps = {
  loading: boolean;
  education: EducationConfigType[];
  className: string;
};

type ListItemProps = {
  time?: ComponentChildren;
  degree?: ComponentChildren;
  institution?: ComponentChildren;
};

export default Education;
