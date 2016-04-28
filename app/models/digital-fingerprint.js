import Model from 'ember-data/model'
import attr from 'ember-data/attr'

export default Model.extend({
  fingerprint: attr('string'),
  ua: attr('string'),
  action: attr('string')
})
