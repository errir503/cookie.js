const assert = require('assert');
const cookie = require('../../dist/cookie.cjs.js');
const shared = require('../shared');
const sharedNoJsodom = require('../shared_no_jsdom')

describe('CommonJS Build', () => {
  it('imports properly', () => {
    assert(typeof cookie, 'function');
    assert(typeof cookie.get, 'function');
  })

  shared.test({ cookie });
  sharedNoJsodom.test({ cookie });
})
