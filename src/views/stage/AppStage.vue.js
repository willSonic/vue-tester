import Card  from "../components/shared/card/Card";
import { connect } from 'vuex-rx';
import EventBus from "../../business/event-bus";
import store from '../../data-layer/store'
import { requestGaramentCollection} from '../../data-layer/store/modules/styleCollections/sc.actions'
const AppStage = {
  name: "AppStage",
  components: {
    Card
  },

  methods: {
    // Instead of updating the value directly, this
    // method is used to format and place constraints
    // on the input's value
    didTheThing(){
       console.log('appstage --- didTheThing =', this.collectionEntities)
    },

    handleButton(event){
         console.log('AppStage--- cardButtonClicked: ', event);
         this.requestGaramentCollection('blues')

    }
  },

  subscriptions () {
     // const entities = collectionEntities.subscribe((dValued)=>{
     //      console.log('deValued = ', dValued)
     //  })
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
    {
       "card1":{
             titleMsg: "Rockin' da view",
             bodyMsg: "We have already created our very first Vue app! This looks pretty similar to just rendering a string template, but Vue has done a lot of work under the hood. The data and the DOM are now linked, and everything is now reactive. How do we know?"
          },
       "card2":{
             titleMsg: "StyleCollection",
             bodyMsg: "Testing a call to api"
          } });
  }
};


const mapStateToProps = ({ ui }) => {
  return ui.garmentCollection
}

export default connect(
  mapStateToProps,
  { requestGaramentCollection }
)(AppStage, store)

