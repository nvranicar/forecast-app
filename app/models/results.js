import DS from 'ember-data';

export default DS.Model.extend({
  city_name: DS.attr('string'),
  state_code: DS.attr('string'),
  forecasts: DS.hasMany('forecast'),
});
