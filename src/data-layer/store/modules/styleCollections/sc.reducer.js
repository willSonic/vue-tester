/**
 * Created by willstreeter on 8/31/17.
 */
import { requestReposByUser, receviedReposByUser }	from './sc.action';
import { scState } from './sc.state'

import {  handleActions } from 'vuex-rx';

export const reducer = handleActions({

	[requestReposByUser]: (state) => {
		return { ...state, reposByUser: [] }
	},

	[receviedReposByUser]: (state, payload) => {
		return { ...state, reposByUser: payload }
	}

}, scState)

