import { ComponentChildren } from "preact";
import { Certification as CertificationType } from "../../../gitprofile.config";
import { skeleton } from "../../helpers/utils";

const ListItem = ({ year, name, body, link }: ListItemProps) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute mt-1.5 h-2 w-2 rounded-full border border-base-300 bg-base-300"
      style={{ left: "-4.5px" }}
    ></div>
    <div className="my-0.5 text-xs">{year}</div>
    <div className="font-semibold">
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
    <h3 className="mb-4 font-normal">{body}</h3>
  </li>
);

const Certification = ({ certifications, loading }: CertificationProps) => {
  const renderSkeleton = () => {
    let array: ComponentChildren[] = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            width: "w-5/12",
            height: "h-4",
          })}
          name={skeleton({
            width: "w-6/12",
            height: "h-4",
            className: "my-1.5",
          })}
          body={skeleton({ width: "w-6/12", height: "h-3" })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {certifications?.length !== 0 && (
        <div className="card compact bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: "w-32", height: "h-8" })
                ) : (
                  <span className="text-base-content opacity-70">Certification</span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative my-2 mx-4 border-l border-base-300 border-opacity-30">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <>
                    {certifications.map((certification, index) => (
                      <ListItem
                        key={index}
                        year={`${certification.year}`}
                        name={certification.name}
                        body={certification.body}
                        link={certification.link ? certification.link : null}
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

type ListItemProps = {
  year?: ComponentChildren;
  name?: ComponentChildren;
  body?: ComponentChildren;
  link?: string;
};

type CertificationProps = {
  certifications: CertificationType[];
  loading: boolean;
};

export default Certification;
