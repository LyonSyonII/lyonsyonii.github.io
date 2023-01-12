import PropTypes from "prop-types";

const ErrorPage = (props) => {
  return (
    <div className="min-w-screen relative flex min-h-screen items-center overflow-hidden bg-base-200 p-5 lg:p-20">
      <div className="relative min-h-full min-w-full flex-1 items-center rounded-3xl bg-base-100 p-10 text-center text-gray-800 shadow-xl md:flex md:text-left lg:p-20">
        <div className="w-full">
          <div className="mb-10 mt-10 font-light text-gray-600 md:mb-20 md:mt-20">
            <h1 className="mb-10 text-3xl font-black uppercase text-primary lg:text-5xl">
              {props.status}
            </h1>
            <p className="pb-2 text-lg text-base-content">{props.title}</p>
            <div className="text-base-content text-opacity-60">{props.subTitle}</div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-64 right-20 h-96 w-64 -rotate-45 transform rounded-full bg-accent bg-opacity-10 md:-top-96 md:right-32 md:h-full md:w-96"></div>
      <div className="pointer-events-none absolute -bottom-96 right-64 h-full w-96 -rotate-45 transform rounded-full bg-secondary bg-opacity-10"></div>
    </div>
  );
};

ErrorPage.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.node.isRequired,
};

export default ErrorPage;
