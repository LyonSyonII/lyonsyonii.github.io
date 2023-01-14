import { ComponentChildren } from "preact";

const ErrorPage = ({ status, title, subTitle }: ErrorPageProps) => {
  return (
    <div className="min-w-screen bg-base-200 relative flex min-h-screen items-center overflow-hidden p-5 lg:p-20">
      <div className="bg-base-100 relative min-h-full min-w-full flex-1 items-center rounded-3xl p-10 text-center text-gray-800 shadow-xl md:flex md:text-left lg:p-20">
        <div className="w-full">
          <div className="mb-10 mt-10 font-light text-gray-600 md:mb-20 md:mt-20">
            <h1 className="text-primary mb-10 text-3xl font-black uppercase lg:text-5xl">
              {status}
            </h1>
            <p className="text-base-content pb-2 text-lg">{title}</p>
            <div className="text-base-content text-opacity-60">{subTitle}</div>
          </div>
        </div>
      </div>
      <div className="bg-accent pointer-events-none absolute -top-64 right-20 h-96 w-64 -rotate-45 transform rounded-full bg-opacity-10 md:-top-96 md:right-32 md:h-full md:w-96"></div>
      <div className="bg-secondary pointer-events-none absolute -bottom-96 right-64 h-full w-96 -rotate-45 transform rounded-full bg-opacity-10"></div>
    </div>
  );
};

type ErrorPageProps = {
  status: string;
  title: string;
  subTitle: ComponentChildren;
};

export default ErrorPage;
