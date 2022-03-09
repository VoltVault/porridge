// The following code is licensed by the APACHE LICENSE 2.0, in the LICENSE file of this repository or in the parent folder of this file.

/**
 * This is the object you will be working with while using porridge.
 * The porridge object will contain all of the functions you will use from porridge.
 * Warning: Don't assign any variable with a name that starts with the word "porridge".
 *
 * @global
 * @format
 * @constant
 * @type {object}
 * @version 1.0.0 This is the current version of porridge that you are viewing.
 * @property {object} localStorage This is the localStorage object in porridge.
 * @property {object} object This is the object object in porridge.
 * @property {object} array This is the array object in porridge.
 * @property {function} help This is the help function in porridge.
 */

let porridge = {};

/**
 * This is the localStorage object.
 * This includes all the localStorage methods and also methods like preserving an item, and getting all the localStorage items.
 *
 * @global
 * @memberof porridge
 * @type {object}
 * @constant
 * @property {function} setItem This sets an item into the browser's localStorage.
 * @property {function} getItem This function gets and returns an item from the browser's localStorage.
 * @property {function} getAll This function gets every item in localStorage.
 * @property {function} preserveItem This function preserves an item in localStorage.
 * @property {function} clear This function clears localStorage, but excludes preservedItems.
 * @property {function} wipe This function wipes localStorage, including preservedItems.
 */

localPorridge = {};

/**
 * This sets an item into the browser's localStorage.
 *
 * @global
 * @type {function}
 * @memberof localPorridge
 * @method localPorridge.setItem
 * @param {string} porridgeItemName
 * @param {*} porridgeItemValue
 * @constant
 */

localPorridge.setItem = (porridgeItemName, porridgeItemValue) => {
    localStorage.setItem(porridgeItemName, porridgeItemValue);
};

/**
 * This gets an item from the browser's localStorage.
 *
 * @global
 * @type {function}
 * @memberof localPorridge
 * @method localPorridge.getItem
 * @param {string} porridgeItemName
 * @returns {*}
 * @constant
 */

localPorridge.getItem = (porridgeItemName) => {
    if (localStorage.getItem(porridgeItemName) === null) {
        if (
            localStorage.getItem(`porridgePreservedItem:-${porridgeItemName}`)
        ) {
            return localStorage.getItem(
                `porridgePreservedItem:-${porridgeItemName}`
            );
        };
    } else {
        return localStorage.getItem(porridgeItemName);
    };
};

/**
 * This function gets all items from the browser's localStorage.
 *
 * @global
 * @type {function}
 * @memberof localPorridge
 * @method localPorridge.getAll
 * @returns {array}
 * @constant
 */

localPorridge.getAll = () => {
    let porridgeResult = [];
    Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(
        (porridgeLocalStorageItem) => {
            porridgeResult.push({
                name: porridgeLocalStorageItem.replace(
                    'porridgePreservedItem:-',
                    ''
                ),
                value: localStorage.getItem(
                    porridgeLocalStorageItem.replace(
                        'porridgePreservedItem:-',
                        ''
                    )
                )
            });
        }
    );
    return porridgeResult;
};

/**
 * This function preserves an currently in localStorage.
 * If the item is not in localStorage, it will be added as a new item preserved item.
 * A preserved item will not be cleared from localStorage running localPorridge.clear().
 * If you want to clear all the items from localStorage you can use localPorridge.wipe().
 *
 * @global
 * @type {function}
 * @memberof localPorridge
 * @method localPorridge.preserveItem
 * @param {string} porridgeItemName
 * @constant
 */

localPorridge.preserveItem = (porridgeItemName, porridgeItemValue) => {
    if (localStorage.getItem(porridgeItemName) !== null) {
        localStorage.removeItem(porridgeItemName);
    }
    localStorage.setItem(
        `porridgePreservedItem:-${porridgeItemName}`,
        porridgeItemValue
    );
};

/**
 * This function will clear all items in localStorage, excluding any preserved items.
 * A preserved item will not be cleared from localStorage running localPorridge.clear().
 * If you want to clear all the items from localStorage you can use localPorridge.wipe().
 *
 * @global
 * @type {function}
 * @memberof localPorridge
 * @method localPorridge.clear
 * @constant
 */

localPorridge.clear = () => {
    Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(
        (porridgeItemName) => {
            if (/porridgePreservedItem:-/.test(porridgeItemName) === false) {
                localStorage.removeItem(porridgeItemName);
            }
        }
    );
};

/**
 * This function clears all the items from localStorage, including preserved items.
 * If you dont want to clear any preserved items, you can use localPorridge.clear() instead.
 *
 * @global
 * @type {function}
 * @memberof localPorridge
 * @method localPorridge.wipe
 * @constant
 */

localPorridge.wipe = () => {
    localStorage.clear();
};

/**
 * This is an an object with multiple functions with methods you can use to edit objects.
 * This is kind of like the regular Javascript high level array methods, or the new ES6 object methods, but porridge has much more features.
 * Another benefit of using porridge is that even with all these fast, new, easy to use functions, you can still use every Javascript feature out there, including the var keyword.
 */

porridge.object = {};

/**
 * This function will turn an object into an array.
 *
 * @global
 * @param {object} porridgeObject The object to convert to array.
 * @returns {array} The returned array of converted from the passed object.
 */

porridge.object.arrayify = (porridgeObject) => {
    const porridgeArray = [];

    for (let i = 0; i < Object.keys(porridgeObject).length; i++) {
        porridgeArray.push({
            key: Object.keys(porridgeObject)[i],
            value: Object.values(porridgeObject)[i]
        });
    };

    return porridgeArray;
};

/**
 * This function will turn an object into an array.
 *
 * @global
 * @param {object} porridgeObject The object to convert to array.
 * @returns {array} The returned array of converted from the passed object.
 */

porridge.object.toArray = (porridgeObject) => {
    return porridge.object.arrayify(porridgeObject);
};

/**
 * This is an an object with multiple functions with methods you can use to edit arrays.
 * This is kind of like the regular Javascript high level array methods, or the new ES6 object methods, but porridge has much more features.
 * Another benefit of using porridge is that even with all these fast, new, easy to use functions, you can still use every Javascript feature out there, including the var keyword.
 */

porridge.array = {};

/**
 * This function turns an array into an object.
 * 
 * @global
 * @param {array} porridgeArray 
 * @returns {object}
 */

porridge.array.objectify = (porridgeArray) => {
	return Object.entries(porridgeArray);
};

/**
 * This function turns an array into an object.
 * 
 * @global
 * @param {array} porridgeArray 
 * @returns {object}
 */

porridge.array.toObject = (porridgeArray) => {
	return Object.entries(porridgeArray);
};

/**
 * This function turns an array into a string.
 *
 * @global
 * @param {array} porridgeArray This is the array that will be turned into a string.
 * @returns {string} Returns the passed array, as a string.
 */

porridge.array.stringify = (porridgeArray) => {
    return porridgeArray.toString();
};

/**
 * This function turns an array into a string.
 *
 * @global
 * @param {array} porridgeArray This is the array that will be turned into a string.
 * @returns {string} Returns the passed array, as a string.
 */

porridge.array.toString = (porridgeArray) => {
    return porridgeArray.toString();
};

/**
 * This function logs the porridge object to the console.
 * This function is mainly used for beginners trying to use or learn porridge.js.
 */

porridge.help = () => {
    console.log('porridge.help() has returned: \n', porridge);
};
