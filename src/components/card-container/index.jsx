import { Fragment } from 'preact';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
// import LazyImage from '../lazy-image';

const displaySection = (children) => {
  if (children) {
    return true;
  } else {
    return false;
  }
};

const CardContainer = ({ title, loading, children }) => {
  return (
    <Fragment>
      {displaySection(children) && (
        <div className={'py-2 col-span-1 lg:col-span-1'}>
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <div className="card compact bg-base-100 shadow bg-opacity-70">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          {title}
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-1">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      {children}
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

CardContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CardContainer;
