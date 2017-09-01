/**
 * Created by williestreeter on 8/31/17.
 */
import { combineReducers } from 'vuex-rx';
import StyleCollectiveReducer from './modules/styleCollections/sc.reducer';

export default combineReducers({
	garmentCollection: StyleCollectiveReducer
})
