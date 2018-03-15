const _         = require("lodash");

var MyLodash = { };

/**
 * Removes leading and trailing whitespace or specified characters from string.
 */
MyLodash.trim = function (string) {
    return string;
    //return _.trim(string);
}

/**
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 */
MyLodash.reverse = function (array) {
    return array;
    //return _.reverse(array);
}

/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. 
 * The order of result values is determined by the order they occur in the array.
 */
MyLodash.uniq = function (values) {
    return values;
    //return _.uniq(values);
};

/**
 * This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. 
 * The order of result values is determined by the order they occur in the array.
 */
MyLodash.uniqBy = function (values, extra) {
    return values;
    //return _.uniqBy(values, extra);
};

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for. 
 * The predicate is invoked with three arguments: (value, index|key, collection).
 */
MyLodash.find = function (array, extra) {
    return array;
    //return _.find(array, extra);
}

/**
 * Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. 
 * This method performs a stable sort, that is, it preserves the original sort order of equal elements. 
 * The iteratees are invoked with one argument: (value).
 */
MyLodash.sortBy = function (array, extra) {
    return array;
    //return _.sortBy(array, extra);
}

/**
 * Creates an array of unique values that is the symmetric difference of the given arrays. 
 * The order of result values is determined by the order they occur in the arrays.
 */
MyLodash.xor = function (array, extra) {
    return array;
    //return _.xor(array, extra);
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee. 
 * The order of grouped values is determined by the order they occur in collection. 
 * The corresponding value of each key is an array of elements responsible for generating the key. 
 * The iteratee is invoked with one argument: (value).
 */
MyLodash.groupBy = function (array, extra) {
    return array;
    //return _.groupBy(array, extra);
}

/**
 * Recursively flattens array.
 */
MyLodash.flattenDeep = function (array) {
    return array;
    //return _.flattenDeep(array);
}

MyLodash.defaultsDeep = function (values, extra) {
    return values;
    //return _.defaultsDeep(values, extra);
}

module.exports = MyLodash;