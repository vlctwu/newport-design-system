// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Modal, ModalHeader, ModalContent } from '../../modals/base/example';
import { AppLauncherTile } from '../tile/example';
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionTitleAction
} from '../../expandable-section/base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////
let AppLauncherModal = props => (
  <Modal
    className="nds-modal_large nds-app-launcher"
    aria-labelledby="header43"
  >
    <ModalHeader className="nds-app-launcher__header nds-grid nds-grid_align-spread nds-grid_vertical-align-center">
      <h2 id="header43" className="nds-text-heading_medium">
        App Launcher
      </h2>
      <div className="nds-app-launcher__header-search">
        <div className="nds-form-element">
          <label
            htmlFor="app-launcher-search"
            className="nds-form-element__label nds-assistive-text"
          >
            Find an app
          </label>
          <div className="nds-form-element__control nds-input-has-icon nds-input-has-icon_left">
            <SvgIcon
              className="nds-input__icon"
              sprite="utility"
              symbol="search"
            />
            <input
              type="search"
              className="nds-input"
              id="app-launcher-search"
              placeholder="Find an app"
            />
          </div>
        </div>
      </div>
      <button className="nds-button nds-button_neutral">App Exchange</button>
    </ModalHeader>
    <ModalContent className="nds-app-launcher__content nds-p-around_medium">
      <Section className="nds-is-open">
        <SectionTitle>
          <SectionTitleAction isOpen referenceId="appsContent">
            All Apps
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen referenceId="appsContent">
          <div
            className="nds-assistive-text"
            id="drag-live-region"
            aria-live="assertive"
          >
            {props.dragDropLiveRegion}
          </div>
          <div className="nds-assistive-text" id={props.dragDropId}>
            {props.dragDropInstructions}
          </div>
          <ul className="nds-grid nds-grid_pull-padded nds-wrap">
            {props.appTiles.map((tile, i) => {
              return (
                <li
                  className="nds-p-horizontal_small nds-size_1-of-1 nds-medium-size_1-of-3"
                  key={i}
                >
                  <AppLauncherTile
                    draggable
                    figureClass={tile.figureClass}
                    grabbed={tile.grabbed}
                    objectInitials={tile.initials}
                    referenceId={tile.dragDropId}
                  >
                    <span className="nds-text-link">{tile.label}</span>
                    <p>
                      {tile.description}
                      <span className="nds-text-link">More</span>
                    </p>
                  </AppLauncherTile>
                </li>
              );
            })}
          </ul>
        </SectionContent>
      </Section>
      <hr />
      <Section className="nds-is-open">
        <SectionTitle>
          <SectionTitleAction isOpen referenceId="itemsContent">
            All Items
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen referenceId="itemsContent">
          <ul className="nds-grid nds-grid_pull-padded nds-wrap">
            {props.itemTiles.map((tile, i) => {
              return (
                <li
                  className="nds-p-horizontal_small nds-size_xx-small"
                  key={i}
                >
                  <AppLauncherTile flavor="small" symbol={tile.symbol}>
                    <p
                      className="nds-truncate nds-text-link"
                      title={tile.label}
                    >
                      {tile.label}
                    </p>
                  </AppLauncherTile>
                </li>
              );
            })}
          </ul>
        </SectionContent>
      </Section>
    </ModalContent>
  </Modal>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

/*
 * DragDropId relates app launcher tile anchor aria-describedby to the div that holds the instructions for drag & drop
 */
const dragDropId = 'drag-instructions';

const itemTiles = [
  { label: 'Accounts', symbol: 'account' },
  { label: 'Announcements', symbol: 'announcement' },
  { label: 'Approvals', symbol: 'approval' },
  { label: 'Campaigns', symbol: 'campaign' },
  { label: 'Cases', symbol: 'case' },
  { label: 'Coaching', symbol: 'coaching' },
  { label: 'Contacts', symbol: 'contact' }
];

/*
 * Tile data for All Apps section inside example.
 * Using data instead of hard-coding becase we want to move the position of one App Tile based on state (ie. moved, dropped).
 */
const appTiles = [
  {
    description: 'The primary internal Salesforce org. Used to run our...',
    dragDropId: dragDropId,
    figureClass: 'nds-icon-custom-27',
    grabbed: false,
    initials: 'SC',
    label: 'Sales Cloud'
  },
  {
    description: 'Salesforce Marketing Cloud lets businesses of any size...',
    dragDropId: dragDropId,
    figureClass: 'nds-icon-custom-59',
    grabbed: false,
    initials: 'MC',
    label: 'Marketing Cloud'
  },
  {
    description: 'Community for managing employee benefits and time off.',
    dragDropId: dragDropId,
    figureClass: 'nds-icon-custom-10',
    grabbed: false,
    initials: 'HR',
    label: 'HR Concierge'
  },
  {
    description: 'Manage your finances across multiple financial platforms...',
    dragDropId: dragDropId,
    figureClass: 'nds-icon-custom-6',
    grabbed: false,
    initials: 'MM',
    label: 'My Money'
  },
  {
    description:
      'The key to call center and contact center management is more...',
    dragDropId: dragDropId,
    figureClass: 'nds-icon-custom-91',
    grabbed: false,
    initials: 'CC',
    label: 'Call Center'
  },
  {
    description:
      'Areas of Focus are used to track customer support for your...',
    dragDropId: dragDropId,
    figureClass: 'nds-icon-custom-50',
    grabbed: false,
    initials: 'CS',
    label: 'Customer Support Communitiy'
  }
];

/*
 * Helpers to position the App Tile for each state (ie. moved, dropped, etc.)
 */
const moveItemPosition = function(arr, from, to) {
  let copyArr = arr.slice(0);
  copyArr.splice(to, 0, copyArr.splice(from, 1)[0]);
  return copyArr;
};

const appTilesGrabbed = appTiles.slice(0);
appTilesGrabbed[0] = Object.assign({}, appTilesGrabbed[0], { grabbed: true });
const appTilesMoved = moveItemPosition(appTiles, 0, 2);
appTilesMoved[2] = Object.assign({}, appTilesMoved[2], { grabbed: true });
const appTilesDropped = moveItemPosition(appTiles, 0, 3);

export default (
  <div className="demo-only" style={{ height: '800px' }}>
    <AppLauncherModal
      appTiles={appTiles}
      dragDropId={dragDropId}
      dragDropInstructions="Press space bar to move this app within the list."
      dragDropLiveRegion=""
      itemTiles={itemTiles}
    />
    <div className="nds-backdrop nds-backdrop_open" />
  </div>
);

export let states = [
  {
    id: 'grabbed',
    label: 'Tile grabbed',
    element: (
      <div className="demo-only" style={{ height: '800px' }}>
        <AppLauncherModal
          appTiles={appTilesGrabbed}
          dragDropId={dragDropId}
          dragDropInstructions=""
          dragDropLiveRegion="Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app"
          grabbed
          itemTiles={itemTiles}
        />
        <div className="nds-backdrop nds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'moved',
    label: 'Tile moved in list',
    element: (
      <div className="demo-only" style={{ height: '800px' }}>
        <AppLauncherModal
          appTiles={appTilesMoved}
          dragDropId={dragDropId}
          dragDropInstructions=""
          dragDropLiveRegion="Sales Cloud: new position 3 of 6."
          itemTiles={itemTiles}
        />
        <div className="nds-backdrop nds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'dropped',
    label: 'Tile dropped',
    element: (
      <div className="demo-only" style={{ height: '800px' }}>
        <AppLauncherModal
          appTiles={appTilesDropped}
          dragDropId={dragDropId}
          dragDropInstructions="Press space bar to move this app within the list."
          dragDropLiveRegion="Sales Cloud: final position 4 of 6."
          itemTiles={itemTiles}
        />
        <div className="nds-backdrop nds-backdrop_open" />
      </div>
    )
  }
];
