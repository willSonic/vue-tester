import * as scActions from './actions';
import * as scGetters from './getters';
import * as scMutations from './mutations';
import * as scState from './state';

import Vuex, { Store } from 'vuex';
import { createEpicMiddleware, actionMutations } from 'vuex-rx';
import rootReducer from './sc.reducer';
import rootEpic from './epics';



export default {
    scState,
    scGetters,
    scMutations,
    scActions,
}
