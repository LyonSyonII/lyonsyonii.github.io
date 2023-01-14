import { ComponentChildren } from "preact";
import PropTypes from "prop-types";

const bgColor = "bg-base-300";

function Page({ children }: PageProps) {
  return <div className={`min-h-full p-4 lg:p-10 ${bgColor}`}>{children}</div>;
}

type PageProps = {
  children?: ComponentChildren;
};

export default Page;
