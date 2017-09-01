/**
 * Created by williestreeter on 8/31/17.
 */

import { createAction } from 'vuex-rx'

export const requestReposByUser = createAction('REQUEST_REPOS_BY_USERS');
export const receviedReposByUser = createAction('RECEVIED_REPOS_BY_USERS');

