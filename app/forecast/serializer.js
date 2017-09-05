import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeFindHasManyResponse(store, primaryModelClass, payload, id, requestType) {
    debugger;
    return {
      id: payload.ts,
      weather: {
        icon: payload.weather.icon,
        description: payload.weather.description,
      },
      temp: payload.temp,
    }
  }
});
