import DS from 'ember-data';

export default DS.Model.extend({
  results: DS.belongsTo('results'),
  datetime: DS.attr('string'),
  temp: DS.attr(),
  weather: DS.belongsTo('weather'),
  ts: DS.attr(),
});
