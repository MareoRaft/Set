// see
// https://www.npmjs.com/package/jasmine
// see
// https://howtodoinjava.com/scripting/javascript/jasmine-unit-testing-tutorial/
// for examples
const _ = require('lodash')

describe("Set", function() {

	beforeEach(function() {
		// change this to test on ES6 builtin Set, or on our custom Set class
		set = new Set()
	})

	describe("size", function() {
		it("should know how many elements are in it", function() {
			expect(set.size).toEqual(0)
			set.add('')
			expect(set.size).toEqual(1)
			set.add('')
			expect(set.size).toEqual(1)
			set.add('n')
			expect(set.size).toEqual(2)
		})
	})

	describe("add", function() {
		var els = [1, 'hi', '']
		it("should know when an element is in it", function() {
			_.forEach(els, function(el) {
				set.add(el)
				expect(set.has(el)).toEqual(true)
			})
		})
		it("should know when an element is NOT in it", function() {
			_.forEach(els, function(el) {
				expect(set.has(el)).toEqual(false)
			})
		})
	})

	describe("clear", function() {
		it("should remove all elements from the set", function() {
			set.addAll([1, 2])
			set.clear()
			expect(set.hasAny([1, 2])).toEqual(false)
		})
		it("should", function() {
		})
	})

	describe("delete", function() {
		it("should", function() {
		})
		it("should", function() {
		})
	})

	describe("forEach", function() {
		it("should", function() {
		})
		it("should", function() {
		})
	})

	describe("has", function() {
		var els = [1, 'hi', '']
		it("should know when an element is in it", function() {
			_.forEach(els, function(el) {
				set.add(el)
				expect(set.has(el)).toEqual(true)
			})
		})
		it("should know when an element is NOT in it", function() {
			_.forEach(els, function(el) {
				expect(set.has(el)).toEqual(false)
			})
		})
	})

	describe("keys", function() {
		it("should", function() {
		})
		it("should", function() {
		})
	})

	describe("values", function() {
		it("should", function() {
		})
		it("should", function() {
		})
	})

})
