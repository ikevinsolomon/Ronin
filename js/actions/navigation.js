/**
* @flow
 */

'use strict';

import type { Action } from './types';

type Tab = 'news' | 'map' | 'notifications' | 'info';

module.exports = {
  switchTab: (tab: Tab): Action => ({
    type: 'SWITCH_TAB',
    tab,
  }),
};
