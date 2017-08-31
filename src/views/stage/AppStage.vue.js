import Card  from "../components/shared/card/Card";
import Vue from 'vue';
import EventBus from "../../business/event-bus"
export default {
  name: "AppStage",
  components: {
    Card
  },

  methods: {
    // Instead of updating the value directly, this
    // method is used to format and place constraints
    // on the input's value
    didTheThing(){
       console.log('appstage --- didTheThing =',)
    },

    handleButton(event){
         console.log('AppStage--- cardButtonClicked: ', event);

    }
  },

  created:function() {
     this.$on('cardButtonClicked', (value)=>{
           console.log('AppStage--- created card-button-clicked: ', value);
     });


		EventBus.$on('buttonClicked', (value) => {
			console.log('AppStage--- created buttonClicked : ', value);
		});
  },


  data: ()=> {
    return Object.assign(
    {},
    {    titleMsg: "Rockin' da view",
          bodyMsg: "We have already created our very first Vue app! This looks pretty similar to just rendering a string template, but Vue has done a lot of work under the hood. The data and the DOM are now linked, and everything is now reactive. How do we know?"
    });
  }


};
