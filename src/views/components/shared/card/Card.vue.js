/**
 * Created by willstreeter on 8/30/17.
 */
 import Vue from 'vue';

let EventBus = new Vue();
 export default  Vue.extend ({
  name: "Card",
  props:{
      msgClick:Function,
      title:String,
      message:String
  },
  methods: {
    handleButtonClick(){
      this.msgClick('yolo');
      this.$emit('cardButtonClicked', 'yolo')
    }
  },

});