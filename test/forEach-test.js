const chai = require('chai')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const spies = require('chai-spies')

chai.use(spies)

const expect = chai.expect

describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'forEach.js'), 'utf-8')
  })

  describe('iterativeLog(array)', () => {
    it('logs each element with the format `${index}: ${element}!`', () => {
      const log = chai.spy.on(console, 'log')

      iterativeLog([1, 2, 3])

      expect(log).to.have.been.called.with('0: 1')
      expect(log).to.have.been.called.with('1: 2')
      expect(log).to.have.been.called.with('2: 3')

      console.log.reset()
    })
  })

  describe('iterate(callback)', () => {
    it('calls the callback on an internal array, then returns the array', () => {
      const forEach = chai.spy.on(Array.prototype, 'forEach')
      const callback = chai.spy()

      const result = iterate(callback)

      expect(forEach).to.have.been.called
      expect(callback).to.have.been.called.min(1)
      expect(result).to.be.an('Array')

      Array.prototype.forEach.reset()
    })
  })

  describe('doToArray(array, callback)', () => {
    it('uses `callback` as the callback for `array`.forEach', () => {
      const array = [1, 2, 3]
      const callback = chai.spy()

      doToArray(array, callback)

      expect(callback).to.have.been.called.exactly(3)
    })
  })
})
