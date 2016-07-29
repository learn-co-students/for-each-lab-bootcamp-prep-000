describe('index', function() {
  describe('iterativeLog(array)', function() {
    it('logs each element with the format `${index}: ${element}!`', function() {
      const log = expect.spyOn(console, 'log')

      iterativeLog([1, 2, 3])

      expect(log).toHaveBeenCalledWith('0: 1', '1: 2', '2: 3')

      log.restore()
    })
  })

  describe('iterate(callback)', function() {
    it('calls the callback on an internal array, then returns the array', function() {
      const forEach = expect.spyOn(Array.prototype, 'forEach')
      const callback = expect.createSpy()

      const result = iterate(callback)

      expect(forEach).toHaveBeenCalled()
      expect(callback.calls.length).toBeGreaterThanOrEqualTo(1)
      expect(Array.isArray(result)).toBe(true)

      forEach.restore()
    })
  })

  describe('doToArray(array, callback)', function() {
    it('uses `callback` as the callback for `array`.forEach', function() {
      const array = [1, 2, 3]
      const callback = expect.createSpy()

      doToArray(array, callback)

      expect(callback.calls.length).toEqual(3)
    })
  })
})
