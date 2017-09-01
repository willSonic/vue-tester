/**
 * Created by willstreeter on 8/30/17.
 */

import Vue from 'vue';
import VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';

import './RxOperator';
import store from './data-layer/store'

// import base layout
import AppStage from "./views/stage/AppStage";

Vue.use(VueRx, {
  Observable
})

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#appStage",
  store,
  render: h => h(AppStage)
});
