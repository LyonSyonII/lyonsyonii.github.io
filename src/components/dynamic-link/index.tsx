import { ComponentChildren } from "preact";
import { Link } from "react-router-dom";

type DynamicLinkProps = {
  children: ComponentChildren;
  to: string;
  className: string;
  key: number;
};

function DynamicLink({ children, to, className, key }: DynamicLinkProps) {
  return to.startsWith("http") ? (
    <a href={to} target="_blank" className={className} key={key}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className} key={key} target="_blank">
      {children}
    </Link>
  );
}

export default DynamicLink;
