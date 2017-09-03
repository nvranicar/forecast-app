import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    search() {
      this.store.findRecord('forecast', this.formValues.city);
    }
  }
});
