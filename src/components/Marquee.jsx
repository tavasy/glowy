import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
      </div>
      <div className="marquee-content">
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
        <span className="marquee-text">
          Find the perfect beauty product <AsteriskIcon />{' '}
        </span>
      </div>
    </div>
  );
};

const AsteriskIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-asterisk"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 0a.5.5 0 0 1 .5.5v6.634l5.902-3.41a.5.5 0 1 1 .496.868L9 8l5.898 3.408a.5.5 0 1 1-.496.868L8.5 8.866v6.634a.5.5 0 1 1-1 0V8.866l-5.902 3.41a.5.5 0 1 1-.496-.868L7 8 .102 4.592a.5.5 0 1 1 .496-.868L7.5 7.134V.5A.5.5 0 0 1 8 0z"
    />
  </svg>
);

export default Marquee;
