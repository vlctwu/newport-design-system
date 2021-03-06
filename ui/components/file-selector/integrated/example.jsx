// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { FileSelector } from '../base/example';

let IntegratedFileSelector = props => (
  <div
    className={classNames(
      'nds-file-selector nds-file-selector_integrated',
      props.className
    )}
  >
    <div
      className={classNames(
        'nds-file-selector__dropzone nds-file-selector__dropzone_integrated',
        props.drag ? 'nds-has-drag' : null,
        props.draggover ? 'nds-has-drag-over' : null
      )}
      aria-hidden="true"
    >
      <input
        className="nds-file-selector__input nds-assistive-text"
        accept="image/png"
        type="file"
        id="file-upload-input-01"
        disabled={props.draggoverError}
        tabIndex="-1"
      />
      <label
        className="nds-file-selector__body nds-file-selector__body_integrated"
        htmlFor="file-upload-input-01"
      >
        {props.draggoverError ? (
          <SvgIcon
            className="nds-file-selector__body-icon nds-icon nds-icon-text-default"
            sprite="utility"
            symbol="ban"
          />
        ) : (
          <SvgIcon
            className="nds-file-selector__body-icon nds-icon nds-icon-text-default"
            sprite="utility"
            symbol="upload"
          />
        )}
        <span className="nds-file-selector__text nds-file-selector__text_integrated nds-text-heading_medium nds-text-align_center">
          {props.draggoverError ? (
            'Too many files selected. Attach up to 1 file.'
          ) : (
            'Drop Files'
          )}
        </span>
      </label>
    </div>
    {props.children}
  </div>
);

export default (
  <div className="demo-only" style={{ width: '320px', height: '320px' }}>
    <IntegratedFileSelector className="nds-file-selector_integrated">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </IntegratedFileSelector>
  </div>
);

export let states = [
  {
    id: 'integrated-file-selector-drag',
    label: 'Drag',
    element: (
      <div className="demo-only" style={{ width: '320px', height: '320px' }}>
        <IntegratedFileSelector className="nds-file-selector_integrated" drag>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </IntegratedFileSelector>
      </div>
    )
  },
  {
    id: 'integrated-file-selector-draggover',
    label: 'Dragover',
    element: (
      <div className="demo-only" style={{ width: '320px', height: '320px' }}>
        <IntegratedFileSelector
          className="nds-file-selector_integrated"
          drag
          draggover
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </IntegratedFileSelector>
      </div>
    )
  },
  {
    id: 'integrated-file-selector-draggover-error',
    label: 'Dragover with error',
    element: (
      <div className="demo-only" style={{ width: '320px', height: '320px' }}>
        <IntegratedFileSelector
          className="nds-file-selector_integrated"
          drag
          draggoverError
          error
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </IntegratedFileSelector>
      </div>
    )
  }
];
