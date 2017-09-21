/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Provider as ReduxProvider } from 'react-redux';
import s from './Welcome.css';

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  ...ReduxProvider.childContextTypes,
};

class Welcome extends React.Component {
  static contextTypes = ContextType;

  static propTypes = {
    nameLength: PropTypes.number.isRequired,
  };

  render() {
    let username = '';
    if (this.context.store.getState().user)
      username = this.context.store.getState().user.name;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            <b>
              Welcome to Applyboard {username}!
            </b>
          </h1>
          <p>
            Your name is {this.props.nameLength} characters
          </p>
          <h3>Glad to have you on board!</h3>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Welcome);
