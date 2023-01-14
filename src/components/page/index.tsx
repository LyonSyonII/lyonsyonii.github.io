import { ComponentChildren } from "preact";
import PropTypes from "prop-types";

const bgColor = "bg-base-300";

function Page({ children }: Props) {
  return <div className={`min-h-full p-4 lg:p-10 ${bgColor}`}>{children}</div>;
}

type Props = {
  children: ComponentChildren;
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
