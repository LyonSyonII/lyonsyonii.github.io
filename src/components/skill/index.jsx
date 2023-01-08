import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';
import LazyImage from '../lazy-image';
import Tooltip from '../tooltip';

const Skill = ({ loading, skills, title }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {skills?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">{title}</span>
                )}
              </h5>
            </div>
            <div className="p-3 flow-root">
              <div className="-m-1 flex flex-wrap justify-center gap-2">
                {loading
                  ? renderSkeleton()
                  : skills.map((skill, index) => (
                      <div title={skill.name} key={index}>
                        {skill.imageUrl && (
                          <LazyImage
                            src={skill.imageUrl}
                            className="w-10 h-10"
                            alt={'thumbnail'}
                            placeholder={skeleton({
                              width: 'w-full',
                              height: 'h-full',
                              shape: '',
                            })}
                          />
                        )}
                        {!skill.imageUrl && (
                          <div className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full">
                            {skill.name}
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Skill.propTypes = {
  loading: PropTypes.bool.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default Skill;
