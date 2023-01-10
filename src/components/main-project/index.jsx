import { Fragment } from 'preact';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import { route } from 'preact-router';

const displaySection = (externalProjects) => {
  if (
    externalProjects &&
    Array.isArray(externalProjects) &&
    externalProjects.length
  ) {
    return true;
  } else {
    return false;
  }
};

const MainProject = ({ mainProjects, loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < mainProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-6 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-32',
                        height: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-16 h-16 mask mask-squircle mx-auto">
                        {skeleton({
                          width: 'w-full',
                          height: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderMainProjects = () => {
    return mainProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        onClick={() => {
          route(item.link);
        }}
      >
        <div className="p-6 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="w-16 h-16">
                        <LazyImage
                          src={item.imageUrl}
                          alt={'thumbnail'}
                          placeholder={skeleton({
                            width: 'w-full',
                            height: 'h-full',
                            shape: '',
                          })}
                        />
                      </div>
                    </div>
                  )}
                  <p className="mt-1 text-base-content text-opacity-60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      {displaySection(mainProjects) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-70">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          Main Projects
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {loading ? renderSkeleton() : renderMainProjects()}
                    </div>
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

MainProject.propTypes = {
  mainProjects: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default MainProject;
