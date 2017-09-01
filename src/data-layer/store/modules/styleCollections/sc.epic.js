/**
 * Created by willstreeter on 8/31/17.
 */


// action
// epic
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { requestReposByUser, receviedReposByUser }	from './sc.action';

export const scEpic = action$ => action$
	.ofType(`${requestReposByUser}`)
	.map(action => action.payload)
	.switchMap(user =>
		ajax.getJSON(`https://api.github.com/users/${user}/repos`)
			.map(receviedReposByUser)
	);

