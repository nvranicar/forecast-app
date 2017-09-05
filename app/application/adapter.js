import DS from 'ember-data';
import config from 'forecast-app/config/environment';

export default DS.RESTAdapter.extend({
  host: config.DS.host,
  pathForType: function() {
    return '';
  },
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL();
    return `${baseUrl}${id}&days=5&key=ee70dbb4c92e416ab321865b456f5fda`;
  },
});
