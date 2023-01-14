import { ComponentChildren, Fragment } from "preact";
import { skeleton } from "../../helpers/utils";

const CardContainer = ({ children, className = "", innerClassName = "" }: CardContainerProps) => {
  return (
    <Fragment>
      {children && (
        <div className={`card compact bg-base-100 bg-opacity-70 shadow ${className}`}>
          <div className="card-body">
            <div className={innerClassName}>{children}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

type CardContainerProps = {
  children?: ComponentChildren;
  className?: string;
  innerClassName?: string;
};

export default CardContainer;
