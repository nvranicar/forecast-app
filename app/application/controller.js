import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    search() {
      const city = this.store.findRecord('2.5', 'forecast?q=' + this.formValues.city + ',us&mode=json');
    }
  }
});
