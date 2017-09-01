import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  day: DS.attr('string'),
  temperature: DS.attr('string'),
  skytext: DS.attr('string'),
});
