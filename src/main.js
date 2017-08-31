/**
 * Created by willstreeter on 8/30/17.
 */

import Vue from 'vue';

// import base layout
import AppStage from "./views/stage/AppStage";

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#appStage",
  render: h => h(AppStage)
});
