// A sane Set implementation for JavaScript 5 (which doesn't have the builtin 'Set' class)
// This library should have no dependencies other than JS 5.
// with credit to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// todo: change all this to JS 5 syntax.
// i'll put these in the same order as the MDN docs lists them

class Set {
	// todo: see if JS 6 sets can be naturally iterable (see if you can use if (let e in myset) syntax).  If so, then make this implementation do so also.
	constructor(iterable) {
		// Creates a 'Set' object whose elements are the items of the given iterable
		this._dict = {}
		if (iterable) {
			iterable.forEach(function(item) {
				this.add(item)
			})
		}
	}
	get size() {
		// A PROPERTY, not a method
		// Returns the number of elements in the set.
		return this.keys().length
	}
	add(element) {
		// Adds the element to the Set object.
		this._dict[element] = true
		return this
	}
	clear() {
		// Removes all elements from the Set object.
		// todo: verify that Object.keys returns OWN keys, and no builtins...
		this.keys().forEach(this.remove)
	}
	delete(element) {
		// Removes the element from this Set object.
		delete this._dict[element]
	}
	// entries()
	// i don't want to implement this one because it's odd behavior
	forEach(callbackFn, thisArg) {
		// Calls callbackFn once for each value present in the Set object, in insertion order.
		// If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
		this.keys().forEach(callbackFn, thisArg)
	}
	has(element) {
		// Returns a boolean asserting whether the element is present in this Set object or not.
		return this._dict.hasOwnProperty(element)
	}
	keys() {
		// see values()
		return Object.keys(this._dict)
	}
	values() {
		// Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
		// todo: figure out how to create an Iterator object
		return this.keys()
	}
	// [@@iterator]
	// i don't know how to implement this one yet
	// everything below are extra custom methods
	addAll(iterable) {
		// Given an iterable, adds all items of the iterable to the set.
		// note: might need .bind(this)
		iterable.forEach(this.add)
	}
	removeAll() {
		// infer
	}
	hasAll() {
		// infer
	}
	hasAny() {
		// Given an iterable, return true if any one item from the iterable is an element of this Set object.


	}
	isSubsetOf(set) {
		// Returns whether this set is a subset of the given set.
		if (typeof set !== 'Set') {
			throw 'input must be a set'
		}
		return this.hasAll(set)
	}
	isSupersetOf(set) {
		// infer
		// validate, as above
		return set.hasAll(this)
	}
	isProperSubsetOf() // infer
	isProperSupersetOf() // infer
}
