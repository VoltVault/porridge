/**
 * This is the object you will be working with while using parc.
 * The parc object will contain all of the functions you will use from parc.
 * Warning: Don't assign any variable with a name that starts with the word "parc".
 * 
 * @type {object}
 * @version 1.0.0 This is the current version of parc that you are viewing.
 * @property {object} localStorage This is the localStorage object in parc.
 * @property {object} object This is the object object in parc.
 * @property {object} array This is the array object in parc.
 * @property {function} help This is the help function in parc.
*/
const parc = {
	/**
     * This is the localStorage object.
	 * This includes all the localStorage methods and also methods like preserving an item, and getting all the localStorage items.
	 *
     * @type {object}
     * @global
    */
	localStorage: {
		setItem: (parcItemName, parcItemValue) => {
			localStorage.setItem(parcItemName, parcItemValue);
		},
		getItem: (parcItemName) => {
			if (localStorage.getItem(parcItemName) === null) {
				if (
					localStorage.getItem(`parcPreservedItem:-${parcItemName}`)
				) {
					return localStorage.getItem(
						`parcPreservedItem:-${parcItemName}`
					);
				}
			} else {
				return localStorage.getItem(parcItemName);
			}
		},
		getAll: () => {
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
		},
		preserveItem: (parcItemName, parcItemValue) => {
			if (localStorage.getItem(parcItemName) !== null) {
				localStorage.removeItem(parcItemName, parcItemValue);
			}
			localStorage.setItem(
				`parcPreservedItem:-${parcItemName}`,
				parcItemValue
			);
		},
		clear: () => {
			Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(
				(parcItemName) => {
					if (/parcPreservedItem:-/.test(parcItemName) === false) {
						localStorage.removeItem(parcItemName);
					}
				}
			);
		},
		wipe: () => {
			localStorage.clear();
		}
	},
	/**
	 * This function logs the parc object to the console.
	 * This function is mainly used for beginners trying to use or learn parc.js.
	 */
	help: () => {
		console.log('parc.help() has returned: \n', parc);
	},
	/**
	 * This is an an object with multiple functions with methods you can use to edit objects.
	 * This is kind of like the regular Javascript high level array methods, or the new ES6 object methods, but parc has much more features.
	 * Another benefit of using parc is that even with all these fast, new, easy to use functions, you can still use every Javascript feature out there, including the var keyword.
	 */
	object: {
		/**
		 * This function will turn an object into an array.
		 *
		 * @param {object} parcObject The object to convert to array.
		 * @returns {array} The returned array of converted from the passed object.
		 */
		arrayify: (parcObject) => {
			const parcArray = [];

			for (let i = 0; i < Object.keys(parcObject).length; i++) {
				parcArray.push({
					key: Object.keys(parcObject)[i],
					value: Object.values(parcObject)[i]
				});
			}

			return parcArray;
		}
	},
	/**
     * @functions {array}
     * 
	 * This is an an object with multiple functions with methods you can use to edit arrays.
	 * This is kind of like the regular Javascript high level array methods, or the new ES6 object methods, but parc has much more features.
	 * Another benefit of using parc is that even with all these fast, new, easy to use functions, you can still use every Javascript feature out there, including the var keyword.
	 */
	array: {
		objectify: (parcArray) => {
			return (entries = Object.entries(parcArray));
		},
		/**
		 *
		 * @param {array} parcArray This is the array that will be turned into a string.
		 * @returns {string} Returns a string.
		 */
		stringify: (parcArray) => {
			return parcArray.toString();
		}
	}
};