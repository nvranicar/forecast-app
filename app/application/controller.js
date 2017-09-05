import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    search() {
      this.transitionToRoute('results', this.formValues.city);
      this.set('formValues', {});
    }
  }
});
