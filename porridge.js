// The following code is licensed by the APACHE LICENSE 2.0, in the LICENSE file of this repository or in the parent folder of this file.

/**
 * This is the object you will be working with while using parc.
 * The parc object will contain all of the functions you will use from parc.
 * Warning: Don't assign any variable with a name that starts with the word "parc".
 *
 * @global
 * @format
 * @constant
 * @type {object}
 * @version 1.0.0 This is the current version of parc that you are viewing.
 * @property {object} localStorage This is the localStorage object in parc.
 * @property {object} object This is the object object in parc.
 * @property {object} array This is the array object in parc.
 * @property {function} help This is the help function in parc.
 */

let parc = {};

/**
 * This is the localStorage object.
 * This includes all the localStorage methods and also methods like preserving an item, and getting all the localStorage items.
 *
 * @global
 * @memberof parc
 * @type {object}
 * @constant
 * @property {function} setItem This sets an item into the browser's localStorage.
 * @property {function} getItem This function gets and returns an item from the browser's localStorage.
 * @property {function} getAll This function gets every item in localStorage.
 * @property {function} preserveItem This function preserves an item in localStorage.
 * @property {function} clear This function clears localStorage, but excludes preservedItems.
 * @property {function} wipe This function wipes localStorage, including preservedItems.
 */

parc.localStorage = {};

/**
 * This sets an item into the browser's localStorage.
 *
 * @global
 * @type {function}
 * @memberof parc.localStorage
 * @method parc.localStorage.setItem
 * @param {string} parcItemName
 * @param {*} parcItemValue
 * @constant
 */

parc.localStorage.setItem = (parcItemName, parcItemValue) => {
    localStorage.setItem(parcItemName, parcItemValue);
};

/**
 * This gets an item from the browser's localStorage.
 *
 * @global
 * @type {function}
 * @memberof parc.localStorage
 * @method parc.localStorage.getItem
 * @param {string} parcItemName
 * @returns {*}
 * @constant
 */

parc.localStorage.getItem = (parcItemName) => {
    if (localStorage.getItem(parcItemName) === null) {
        if (
            localStorage.getItem(`parcPreservedItem:-${parcItemName}`)
        ) {
            return localStorage.getItem(
                `parcPreservedItem:-${parcItemName}`
            );
        };
    } else {
        return localStorage.getItem(parcItemName);
    };
};

/**
 * This function gets all items from the browser's localStorage.
 *
 * @global
 * @type {function}
 * @memberof parc.localStorage
 * @method parc.localStorage.getAll
 * @returns {array}
 * @constant
 */

parc.localStorage.getAll = () => {
    let parcResult = [];
    Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(
        (parcLocalStorageItem) => {
            parcResult.push({
                name: parcLocalStorageItem.replace(
                    'parcPreservedItem:-',
                    ''
                ),
                value: localStorage.getItem(
                    parcLocalStorageItem.replace(
                        'parcPreservedItem:-',
                        ''
                    )
                )
            });
        }
    );
    return parcResult;
};

/**
 * This function preserves an currently in localStorage.
 * If the item is not in localStorage, it will be added as a new item preserved item.
 * A preserved item will not be cleared from localStorage running parc.localStorage.clear().
 * If you want to clear all the items from localStorage you can use parc.localStorage.wipe().
 *
 * @global
 * @type {function}
 * @memberof parc.localStorage
 * @method parc.localStorage.preserveItem
 * @param {string} parcItemName
 * @constant
 */

parc.localStorage.preserveItem = (parcItemName, parcItemValue) => {
    if (localStorage.getItem(parcItemName) !== null) {
        localStorage.removeItem(parcItemName);
    }
    localStorage.setItem(
        `parcPreservedItem:-${parcItemName}`,
        parcItemValue
    );
};

/**
 * This function will clear all items in localStorage, excluding any preserved items.
 * A preserved item will not be cleared from localStorage running parc.localStorage.clear().
 * If you want to clear all the items from localStorage you can use parc.localStorage.wipe().
 *
 * @global
 * @type {function}
 * @memberof parc.localStorage
 * @method parc.localStorage.clear
 * @constant
 */

parc.localStorage.clear = () => {
    Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(
        (parcItemName) => {
            if (/parcPreservedItem:-/.test(parcItemName) === false) {
                localStorage.removeItem(parcItemName);
            }
        }
    );
};

/**
 * This function clears all the items from localStorage, including preserved items.
 * If you dont want to clear any preserved items, you can use parc.localStorage.clear() instead.
 *
 * @global
 * @type {function}
 * @memberof parc.localStorage
 * @method parc.localStorage.wipe
 * @constant
 */

parc.localStorage.wipe = () => {
    localStorage.clear();
};

/**
 * This is an an object with multiple functions with methods you can use to edit objects.
 * This is kind of like the regular Javascript high level array methods, or the new ES6 object methods, but parc has much more features.
 * Another benefit of using parc is that even with all these fast, new, easy to use functions, you can still use every Javascript feature out there, including the var keyword.
 */

parc.object = {};

/**
 * This function will turn an object into an array.
 *
 * @global
 * @param {object} parcObject The object to convert to array.
 * @returns {array} The returned array of converted from the passed object.
 */

parc.object.arrayify = (parcObject) => {
    const parcArray = [];

    for (let i = 0; i < Object.keys(parcObject).length; i++) {
        parcArray.push({
            key: Object.keys(parcObject)[i],
            value: Object.values(parcObject)[i]
        });
    };

    return parcArray;
};

/**
 * This function will turn an object into an array.
 *
 * @global
 * @param {object} parcObject The object to convert to array.
 * @returns {array} The returned array of converted from the passed object.
 */

parc.object.toArray = (parcObject) => {
    return parc.object.arrayify(parcObject);
};

/**
 * This is an an object with multiple functions with methods you can use to edit arrays.
 * This is kind of like the regular Javascript high level array methods, or the new ES6 object methods, but parc has much more features.
 * Another benefit of using parc is that even with all these fast, new, easy to use functions, you can still use every Javascript feature out there, including the var keyword.
 */

parc.array = {};

/**
 * This function turns an array into an object.
 * 
 * @global
 * @param {array} parcArray 
 * @returns {object}
 */

parc.array.objectify = (parcArray) => {
	return Object.entries(parcArray);
};

/**
 * This function turns an array into an object.
 * 
 * @global
 * @param {array} parcArray 
 * @returns {object}
 */

parc.array.toObject = (parcArray) => {
	return Object.entries(parcArray);
};

/**
 * This function turns an array into a string.
 *
 * @global
 * @param {array} parcArray This is the array that will be turned into a string.
 * @returns {string} Returns the passed array, as a string.
 */

parc.array.stringify = (parcArray) => {
    return parcArray.toString();
};

/**
 * This function turns an array into a string.
 *
 * @global
 * @param {array} parcArray This is the array that will be turned into a string.
 * @returns {string} Returns the passed array, as a string.
 */

parc.array.toString = (parcArray) => {
    return parcArray.toString();
};

/**
 * This function logs the parc object to the console.
 * This function is mainly used for beginners trying to use or learn parc.js.
 */

parc.help = () => {
    console.log('parc.help() has returned: \n', parc);
};
