import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    search() {
      this.transitionToRoute('forecast', this.formValues.city);
      this.set('formValues', {});
    }
  }
});
