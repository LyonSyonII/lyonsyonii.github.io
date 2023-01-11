import PropTypes from 'prop-types';

const bgColor = 'bg-base-300';

function Page({ children }) {
  return <div className={`p-4 lg:p-10 min-h-full ${bgColor}`}>{children}</div>;
}

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
