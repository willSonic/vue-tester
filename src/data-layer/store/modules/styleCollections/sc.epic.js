/**
 * Created by willstreeter on 8/31/17.
 */


// action
// epic
import { ajax } from 'rxjs/observable/dom/ajax';
import { receviedGaramentCollection, requestGaramentCollection }	from './sc.actions';

const scEpic = action$ => action$
	.ofType(`${requestGaramentCollection}`)
	.map(action => action.payload)
	.switchMap(() =>
		ajax.getJSON(`http://api.shopstyle.com/api/v2/products?pid=uid5225-39800235-6&fts=red+dress&offset=0&limit=50`)
			.map(receviedGaramentCollection)
	);

export default scEpic;
