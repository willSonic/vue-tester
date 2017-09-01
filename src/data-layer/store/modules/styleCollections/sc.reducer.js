/**
 * Created by willstreeter on 8/31/17.
 */
 
import { handleActions } from 'vuex-rx';
import { requestGaramentCollection, receviedGaramentCollection } from './sc.actions';

import  scState  from './sc.state';

const StyleCollectiveReducer = handleActions({
	[requestGaramentCollection]: (state) =>  ({...state, fetching:true}),

	[receviedGaramentCollection]:(state, payload) => {
	    const newIds = [];
	    let newEntities = {};
	    if(!state.ids.includes(payload.metadata.category.id)){
            newIds.push(payload.metadata.category.id);
            newEntities = {[payload.metadata.category.id]:payload.products};
	    }else{
	        newEntities ={ [payload.metadata.category.id]:
				            [...state.collectionEntities[payload.metadata.category.id],
				             ...payload.products] };
	    }

		return { ...state, ids:[...state.ids, ...newIds],  collectionEntities:newEntities, fetching:false}
	}

}, scState);


export default StyleCollectiveReducer;


