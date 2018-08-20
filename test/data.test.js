const expect = require('chai').expect
const data = require('../components/Data..js')

describe('getAppData',() => {
  it('should return object',() => {
    expect(data.getAppData())
  })
})