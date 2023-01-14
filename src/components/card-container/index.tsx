import { ComponentChildren, Fragment } from "preact";
import { skeleton } from "../../helpers/utils";

type CardContainerProps = {
  title?: string;
  loading: boolean;
  children?: ComponentChildren;
};

const CardContainer = ({ title, loading, children }: CardContainerProps) => {
  return (
    <Fragment>
      {children && (
        <div className={"col-span-1 py-2 lg:col-span-1"}>
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <div className="card compact bg-base-100 bg-opacity-70 shadow">
                <div className="card-body">
                  <div className="mx-3 mb-2 flex items-center justify-between">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: "w-40", height: "h-8" })
                      ) : (
                        <span className="text-base-content opacity-70">{title}</span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">{children}</div>
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

export default CardContainer;
