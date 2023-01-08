import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Tooltip = ({ content, children, direction }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={setActive(true)}
      onMouseLeave={setActive(false)}
    >
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || 'top'}`}>{content}</div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default Tooltip;
