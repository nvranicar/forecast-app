import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('results', params.city_name);
  }
});
