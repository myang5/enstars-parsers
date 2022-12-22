import React from 'react';
import classNames from 'classnames';
import './MainWrapper.less';

export const MainWrapper = ({ className, children }) => {
  return (
    <div className={classNames('main-wrapper', className)}>{children}</div>
  );
};
