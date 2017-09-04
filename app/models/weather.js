import DS from 'ember-data';

export default DS.Model.extend({
  icon: DS.attr('string'),
  description: DS.attr('string'),
  forecast: DS.belongsTo('forecast'),
});
