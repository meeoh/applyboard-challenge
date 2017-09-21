/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

import logo from './logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    return (
      <div
        className={`${s.root} ${this.state.scrollY > 0 ? s.visible : s.hidden}`}
      >
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
