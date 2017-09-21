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
import Autocomplete from 'react-autocomplete';
import { Provider as ReduxProvider } from 'react-redux';
import s from './Login.css';
import history from '../../history';

import { setUser } from '../../actions/user';

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

function matchStateToTerm(state, value) {
  return (
    state.toLowerCase().indexOf(value.toLowerCase()) !== -1 && value.length > 0
  );
}

const allNames = [
  'Noah',
  'Liam',
  'William',
  'Mason',
  'James',
  'Benjamin',
  'Jacob',
  'Michael',
  'Elijah',
  'Ethan',
  'Alexander',
  'Oliver',
  'Daniel',
  'Lucas',
  'Matthew',
  'Aiden',
  'Jackson',
  'Logan',
  'David',
  'Joseph',
  'Samuel',
  'Henry',
  'Owen',
  'Sebastian',
  'Gabriel',
  'Carter',
  'Jayden',
  'John',
  'Luke',
  'Anthony',
  'Isaac',
  'Dylan',
  'Wyatt',
  'Andrew',
  'Joshua',
  'Christopher',
  'Grayson',
  'Jack',
  'Julian',
  'Ryan',
  'Jaxon',
  'Levi',
  'Nathan',
  'Caleb',
  'Hunter',
  'Christian',
  'Isaiah',
  'Thomas',
  'Aaron',
  'Lincoln',
];

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static contextTypes = ContextType;

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      name: '',
    };
    this.login = this.login.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  login(e) {
    e.preventDefault();
    this.context.store.dispatch(
      setUser({
        name: this.state.name,
      }),
    );
    history.push({
      pathname: '/welcome',
    });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.state.title} {this.state.name}
          </h1>
          <p className={s.lead}>Log in with your Name</p>
          <form onSubmit={this.login}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="name">
                Name:
              </label>
              <Autocomplete
                getItemValue={item => item}
                items={allNames}
                shouldItemRender={matchStateToTerm}
                renderItem={(item, isHighlighted) =>
                  <div className={`${isHighlighted ? s.itemHighlighted : ''}`}>
                    {item}
                  </div>}
                value={this.state.name}
                onChange={this.onNameChange}
                inputProps={{
                  className: s.input,
                  autoComplete: 'off',
                  autoFocus: true,
                  id: 'name',
                }}
                wrapperStyle={{ display: 'block' }}
                onSelect={val => this.setState({ name: val })}
              />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
              </label>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
              />
            </div>
            <div className={s.formGroup}>
              <button onClick={this.login} className={s.button}>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
