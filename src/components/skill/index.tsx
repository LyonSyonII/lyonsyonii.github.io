import { skeleton } from "../../helpers/utils";
import LazyImage from "../lazy-image";
import { Skill as SkillConfigType } from "gitprofile.config";

const Skill = ({ loading, skills, title }: SkillProps) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>{skeleton({ width: "w-16", height: "h-4", className: "m-1" })}</div>
      );
    }

    return array;
  };

  return (
    <>
      {skills?.length !== 0 && (
        <div className="card compact bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: "w-32", height: "h-8" })
                ) : (
                  <span className="text-base-content opacity-70">{title}</span>
                )}
              </h5>
            </div>
            <div className="-m-1 flex min-h-full flex-wrap items-center justify-center gap-2 px-6 pb-6 lg:pb-4">
              {loading
                ? renderSkeleton()
                : skills.map((skill, index) => (
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noreferrer"
                      title={skill.name}
                      key={index}
                    >
                      {skill.imageUrl && (
                        <LazyImage
                          src={skill.imageUrl}
                          className="h-10 w-10"
                          alt={"thumbnail"}
                          placeholder={skeleton({
                            width: "w-full",
                            height: "h-full",
                            shape: "",
                          })}
                        />
                      )}
                      {!skill.imageUrl && (
                        <div className="leading-sm badge-primary m-1 inline-flex items-center rounded-full bg-opacity-90 px-3 py-1 text-xs font-bold">
                          {skill.name}
                        </div>
                      )}
                    </a>
                  ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

type SkillProps = {
  loading: boolean;
  skills: SkillConfigType[];
  title: string;
};

export default Skill;
