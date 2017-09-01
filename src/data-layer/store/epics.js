/**
 * Created by williestreeter on 8/31/17.
 */
import { combineEpics } from 'vuex-rx'
import scEpic from './modules/styleCollections/sc.epic'

export default combineEpics(
	scEpic
)

