/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Welcome from './Welcome';

const title = 'Welcome!';

function action(args) {
  return {
    chunks: ['welcome'],
    title,
    component: (
      <Layout>
        <Welcome
          nameLength={
            args.store.getState().user
              ? args.store.getState().user.name.length
              : 0
          }
        />
      </Layout>
    ),
  };
}

export default action;
