import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.city_name,
        type: 'results',
        attributes: {
          city_name: payload.city_name,
          country_code: payload.country_code,
          state_code: payload.state_code,
          forecasts: {
            data: [...payload.data],
          },
        },
      }
    }
  },
});
