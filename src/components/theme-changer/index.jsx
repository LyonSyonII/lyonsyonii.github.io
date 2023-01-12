import { AiOutlineControl } from "react-icons/ai";
import { skeleton } from "../../helpers/utils";
import PropTypes from "prop-types";

const ThemeChanger = ({ theme, setTheme, loading, themeConfig }) => {
  const changeTheme = (e, selectedTheme) => {
    e.preventDefault();
    document.querySelector("html").setAttribute("data-theme", selectedTheme);

    typeof window !== "undefined" && localStorage.setItem("gitprofile-theme", selectedTheme);

    setTheme(selectedTheme);
  };

  return (
    <div className="card compact overflow-visible bg-base-100 shadow-lg">
      <div className="flex flex-row items-center space-x-4 py-4 pl-6 pr-2">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({ width: "w-20", height: "h-8", className: "mb-1" })
            ) : (
              <span className="text-base-content opacity-70">Theme</span>
            )}
          </h5>
          <span className="text-sm capitalize text-base-content text-opacity-40">
            {loading
              ? skeleton({ width: "w-16", height: "h-5" })
              : theme === themeConfig.defaultTheme
              ? "Default"
              : theme}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({
              width: "w-14 md:w-28",
              height: "h-10",
              className: "mr-6",
            })
          ) : (
            <div title="Change Theme" className="dropdown-end dropdown">
              <div
                tabIndex={0}
                className="btn-ghost btn m-1 normal-case text-base-content opacity-50"
              >
                <AiOutlineControl className="inline-block h-5 w-5 stroke-current md:mr-2" />
                <span className="hidden md:inline">Change Theme</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  className="ml-1 inline-block h-4 w-4 fill-current"
                >
                  <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content rounded-b-box top-px mt-16 max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl"
              >
                <ul className="compact menu p-4">
                  {[
                    themeConfig.defaultTheme,
                    ...themeConfig.themes.filter((item) => item !== themeConfig.defaultTheme),
                  ].map((item, index) => (
                    <li key={index}>
                      {/* eslint-disable-next-line */}
                      <a
                        onClick={(e) => changeTheme(e, item)}
                        className={`${theme === item ? "active" : ""}`}
                      >
                        <span className="capitalize opacity-60">
                          {item === themeConfig.defaultTheme ? "Default" : item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ThemeChanger.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  themeConfig: PropTypes.object.isRequired,
};

export default ThemeChanger;
