import Vue from "vue";

const EventBus = new Vue({
	methods: {
		buttonChanged(value) {
			this.$emit('buttonClicked', value);
		}
	}
});

export default EventBus;
