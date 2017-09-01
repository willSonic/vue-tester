/**
 * Created by willstreeter on 8/30/17.
 */

import './RxOperator'
import Vue from 'vue';
import store from './data-layer/store'

// import base layout
import AppStage from "./views/stage/AppStage";

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#appStage",
  render: h => h(AppStage)
});
