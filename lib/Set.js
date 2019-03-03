// A sane Set implementation for JavaScript 5 (which doesn't have the builtin 'Set' class)
// This library should have no dependencies other than JS 5.
// with credit to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// i'll put these in the same order as the MDN docs lists them

// see specification: https://www.ecma-international.org/ecma-262/6.0/#sec-set-objects
// objects and maps compared:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_and_maps_compared

function Set() {}

Set.prototype.constructor = function(iterable) {
	// Creates a 'Set' object whose elements are the items of the given iterable
	this._dict = {}
	if (iterable) {
		iterable.forEach(function(item) {
			this.add(item)
		})
	}
};

Set.prototype._getSize = function() {
	// get the size
	// A PROPERTY, not a method
	// Returns the number of elements in the set.
	return this.keys().length
};

Set.prototype._updateSize = function() {
	// update the size property
	this.size = this._getSize()
};

Set.prototype.add = function(element) {
	// Adds the element to the Set object.
	this._dict[element] = true
	this._updateSize()
	return this
};

Set.prototype.clear = function() {
	// Removes all elements from the Set object.
	// todo: verify that Object.keys returns OWN keys, and no builtins...
	this.keys().forEach(this.delete)
};

Set.prototype.delete = function(element) {
	// Removes the element from this Set object.  Returns the value that has() would have returned prior to deletion.
	var has = this.has(element)
	delete this._dict[element]
	this._updateSize()
	var had = has
	return had
};

// entries()
// i don't want to implement this one because it's odd behavior

Set.prototype.forEach = function(callbackFn, thisArg) {
	// Calls callbackFn once for each value present in the Set object, in insertion order. (Current, order NOT guaranteed)
	// If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
	this.keys().forEach(callbackFn, thisArg)
};

Set.prototype.has = function(element) {
	// Returns a boolean asserting whether the element is present in this Set object or not.
	return this._dict.hasOwnProperty(element)
};

Set.prototype.keys = function() {
	// see values()
	return Object.keys(this._dict)
};

Set.prototype.values = function() {
	// Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
	// todo: figure out how to create an Iterator object
	return this.keys()
};

// [@@iterator]
// i don't know how to implement this one yet

// everything below are extra custom methods

Set.prototype.addAll = function(iterable) {
	// Given an iterable, adds all items of the iterable to the set.
	// note: might need .bind(this)
	iterable.forEach(this.add)
};

Set.prototype.removeAll = function() {
	// infer
};

Set.prototype.hasAll = function() {
	// infer
};

Set.prototype.hasAny = function() {
	// Given an iterable, return true if any one item from the iterable is an element of this Set object.


};

Set.prototype.isSubsetOf = function(set) {
	// Returns whether this set is a subset of the given set.
	if (typeof set !== 'Set') {
		throw 'input must be a set'
	}
	return this.hasAll(set)
};

Set.prototype.isSupersetOf = function(set) {
	// infer
	// validate, as above
	return set.hasAll(this)
};

// isProperSubsetOf() // infer
// isProperSupersetOf() // infer

