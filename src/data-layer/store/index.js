/**
 * Created by willstreeter on 8/31/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import * as StyleCollective  from './modules/styleCollections'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        StyleCollective
    }
});
