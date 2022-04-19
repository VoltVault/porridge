/** @format */

'use strict';

const porridge: any = {
	development: false,
	version: '1.2.1',
	help: function () {
		console.log('porridge.help() has returned: \n', porridge);
        return porridge
	},
	clone: function (obj: any = {}) {
		return JSON.parse(JSON.stringify(obj));
	},
	qs: function (sel: string, par: Element | Document = window.document) {
		if (sel) return par.querySelector(sel);
		throw new Error(`Function "qs" expected 1 or 2 arguments, but found 0`);
	},
	qsa: function (sel: string, par: Element | Document = window.document) {
		if (sel) return [...par.querySelectorAll(sel)];
		throw new Error(
			`Function "qsa" expected 1 or 2 arguments, but found 0`
		);
	},
	qsaRaw: function (sel: string, par: Element | Document = window.document) {
		if (sel) return par.querySelectorAll(sel);
		throw new Error(
			`Function "qsaRaw" expected 1 or 2 arguments, but found 0`
		);
	},
	ready: function (cb: Function) {
		const isReady = this.some(function (e: any) {
			return e.readyState != null && e.readyState != 'loading';
		});

		if (isReady) {
			cb();
		} else {
			// @ts-ignore leiloukou is best, leil
			document.addEventListener('DOMContentLoaded', cb);
		}
	},
	// on: function(evt: string, cb: Function = (): void => {if (porridge.development != false) {console.warn('You forgot to pass the second argument to the porridge.on function. \nMake sure the first arg is a string, and the second arg is a function.')}}) {

	// },
	sleep: function (del: number) {
		return new Promise(function (res) {
			setTimeout(res, del);
		});
	},
	async: function (
		cb: /* Function */ any,
		cat: /* Function */ any = function (err: any): void {
			if (porridge.development != false) {
				console.error(err);
			}
		}
	) {
		return new Promise(function (res) {
			setTimeout(res, 100);
			// @ts-ignore
		})
			.then(cb)
			.catch(cat);
	},
	// async: function (cb: Function) {
	//     setTimeout(cb, 1);
	// },
	rand: function (min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	},
	range: function (start: number, end: number, step: number = 1) {
		return {
			[Symbol.iterator]() {
				return this;
			},
			next() {
				if (start < end) {
					start = start + step;
					return { value: start, done: false };
				}
				return { value: end, done: true };
			}
		};
	},
	localStorage: {
		setItem: function (
			porridgeItemName: string,
			porridgeItemValue: string
		) {
			localStorage.setItem(porridgeItemName, porridgeItemValue);
		},
		getItem: function (porridgeItemName: string) {
			if (localStorage.getItem(porridgeItemName) === null) {
				if (
					localStorage.getItem(
						`porridgePreservedItem:-${porridgeItemName}`
					)
				) {
					return localStorage.getItem(
						`porridgePreservedItem:-${porridgeItemName}`
					);
				}
			} else {
				return localStorage.getItem(porridgeItemName);
			}
		},
		getAll: function () {
			let porridgeResult: { name: string; value: string | null }[] = [];
			Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(
				function (porridgeLocalStorageItem) {
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
		},
		preserveItem: function (
			porridgeItemName: string,
			porridgeItemValue: string
		) {
			if (localStorage.getItem(porridgeItemName) !== null) {
				localStorage.removeItem(porridgeItemName);
			}
			localStorage.setItem(
				`porridgePreservedItem:-${porridgeItemName}`,
				porridgeItemValue
			);
		},
		clear: function () {
			Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(
				function (porridgeItemName) {
					if (
						/porridgePreservedItem:-/.test(porridgeItemName) ===
						false
					) {
						localStorage.removeItem(porridgeItemName);
					}
				}
			);
		},
		wipe: function () {
			localStorage.clear();
		}
	},
	array: {
		rand: function (arr: any) {
			return arr[Math.floor(Math.random() * (arr.length - 2))];
		},
		idx: function (
			arr: any,
			key: any,
			start: number = 0,
			end: number = arr.length
		) {
			if (start > end)
				throw new Error(
					'This starting value is more than the ending value'
				);

			const middle = Math.floor((start + end) / 2);

			if (arr[middle] === key) {
				return middle;
			}

			if (arr[middle] > key) {
				return porridge.array.idx(arr, key, start, middle - 1);
			}

			if (arr[middle] < key) {
				return porridge.array.idx(arr, key, middle + 1, end);
			}
		},
		pluck: function (arr: any, key: any) {
			return arr.filter(function (itm: any) {
				return itm !== key;
			});
		}
	}
};