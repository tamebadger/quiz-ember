import Application from '@ember/application'
import { run } from '@ember/runloop'
import { initialize } from 'myapp/instance-initializers/record-digital-fingerprint'
import { module, test } from 'qunit'
import destroyApp from '../../helpers/destroy-app'

module('Unit | Instance Initializer | record digital fingerprint', {
  beforeEach: function () {
    run(()=> {
      this.application = Application.create()
      this.appInstance = this.application.buildInstance()
    })
  },
  afterEach: function () {
    run(this.appInstance, 'destroy')
    destroyApp(this.application)
  }
})

// Replace this with your real tests.
test('it works', function (assert) {
  initialize(this.appInstance)

  // you would normally confirm the results of the initializer here
  assert.ok(true)
})