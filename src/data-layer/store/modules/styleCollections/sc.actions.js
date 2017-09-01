/**
 * Created by willstreeter on 8/31/17.
 */

export const epic = action$ => action$
  .ofType(`${requestReposByUser}`)
  .map(action => action.payload)
  .switchMap(user =>
    ajax.getJSON(`https://api.github.com/users/${user}/repos`)
      .map(receviedReposByUser)
  )
