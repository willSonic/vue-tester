/**
 * Created by williestreeter on 8/31/17.
 */
import { combineEpics } from 'vuex-rx'
import { scEpic } from '../containers/admin/Admin.module'

export default combineEpics(
	scEpic
)

