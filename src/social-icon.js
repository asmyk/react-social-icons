import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Background from './background';
import Icon from './icon';
import Mask from './mask';
import { keyFor } from './networks';
import { socialIcon, socialContainer, socialSvg } from './styles.js';

function getNetworkKey(props) {
  return props.network || keyFor(props.url);
}

function getClassName(props) {
  return classnames('social-icon', props.className);
}

function SocialIcon(props) {
  const networkKey = getNetworkKey(props);

  return (
    <a {...props}
      href={props.url} target="_blank" className={getClassName(props)} style={socialIcon}
    >
      <div className="social-container" style={socialContainer} >
        <svg className="social-svg" style={socialSvg} viewBox="0 0 64 64">
          <Background />
          <Icon networkKey={networkKey} />
          <Mask networkKey={networkKey} color={props.color} />
        </svg>
      </div>
    </a>
  );
}

SocialIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  network: PropTypes.string,
  url: PropTypes.string,
};

export default SocialIcon;