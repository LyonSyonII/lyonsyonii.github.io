import PropTypes from "prop-types";

const bgColor = "bg-base-300";

function Page({ children }) {
  return <div className={`min-h-full p-4 lg:p-10 ${bgColor}`}>{children}</div>;
}

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
