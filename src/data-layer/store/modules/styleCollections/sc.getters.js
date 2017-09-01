/**
 * Created by willstreeter on 8/31/17.
 */

//git a collection of Garments by categories
export function getGarmentCollection (state) {
  return state.users.filter(u => u.enabled);
}