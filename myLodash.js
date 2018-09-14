const _         = require("lodash");

var MyLodash = { };

/**
 * Removes leading and trailing whitespace or specified characters from string.
 */
MyLodash.trim = function (string) {
    return string.replace(/\s/g, "");
    // return _.trim(string);
}

// function trim(string){
//     return string.replace(/\s/g, "")
// }
// console.log(trim('  abc  '));

/**
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 */
MyLodash.reverse = function (array) {
    const newArray = [];
    for (var x = array.length-1; x >= 0; x --){
        newArray.push(array[x])
    }
    return newArray
    //return _.reverse(array);
}

/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 */
MyLodash.uniq = function (values) {
    return values.filter((v, i, a) => a.indexOf(v) === i);
    //return _.uniq(values);
};


/**
 * This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed.
 * The order of result values is determined by the order they occur in the array.
 */
MyLodash.uniqBy = function (values, extra) {
    return values.filter((v, i, a) => a.indexOf(extra(v)) === i);
    //return _.uniqBy(values, extra);
};

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 */
MyLodash.find = function (array, extra) {
    for (var x = 0; x < array.length; x ++){
        if (extra(array[x])) {
            return array[x]
        }
    }
    return -1;
    //return _.find(array, extra);
}


/**
 * Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.
 * This method performs a stable sort, that is, it preserves the original sort order of equal elements.
 * The iteratees are invoked with one argument: (value).
 */
MyLodash.sortBy = function (array, extra) {
    return array.sort(dynamicSortMultiple(extra[0], extra[1]))
    //return _.sortBy(array, extra);
}

function dynamicSortMultiple() {
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}



/**
 * Creates an array of unique values that is the symmetric difference of the given arrays.
 * The order of result values is determined by the order they occur in the arrays.
 */
MyLodash.xor = function (array, extra) {
    const result = [...array, ...extra].sort();
    return removeDup(result)
    //return _.xor(array, extra);
}

function removeDup(input){
    for (var x = 0; x < input.length; x ++){
        if (input[x] === input[x + 1]  || input[x] === input[x-1]){
            input.splice(x, 2);
            return input
        };
    };
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The order of grouped values is determined by the order they occur in collection.
 * The corresponding value of each key is an array of elements responsible for generating the key.
 * The iteratee is invoked with one argument: (value).
 */
MyLodash.groupBy = function (array, extra) {
    return array.reduce((r, v, i, a, k = extra(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
    //return _.groupBy(array, extra);
}

// function groupBy(array, extra){
//     // -------- method 1:
//     const keys = array.map(x => extra(x));
//     const groups = {};
//     keys.forEach((key, i) => groups[key] = array[i]);
//     // -------- method 2:
//     var grouped = array.reduce((r, v, i, a, k = extra(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
//     console.log(grouped)
// }


/**
 * Recursively flattens array.
 */
MyLodash.flattenDeep = function (array) {
    const newArry = [];
    array.toString().split(",").forEach((i) => {
        newArry.push(parseInt(i))
    })
    return newArry
    //return _.flattenDeep(array);
}

/**
 * This method is like _.defaults except that it recursively assigns default properties.
 */
MyLodash.defaultsDeep = function (values, extra) {
    return values;
    //return _.defaultsDeep(values, extra);
}

module.exports = MyLodash;