/** @format */
'use strict';
const porridge = {
    development: false,
    version: '1.2.1',
    help: function () {
        console.log('porridge.help() has returned: \n', porridge);
    },
    clone: function (obj = {}) {
        return JSON.parse(JSON.stringify(obj));
    },
    qs: function (sel, par = window.document) {
        if (sel)
            return par.querySelector(sel);
        throw new Error(`Function "qs" expected 1 or 2 arguments, but found 0`);
    },
    qsa: function (sel, par = window.document) {
        if (sel)
            return [...par.querySelectorAll(sel)];
        throw new Error(`Function "qsa" expected 1 or 2 arguments, but found 0`);
    },
    qsaRaw: function (sel, par = window.document) {
        if (sel)
            return par.querySelectorAll(sel);
        throw new Error(`Function "qsaRaw" expected 1 or 2 arguments, but found 0`);
    },
    ready: function (cb) {
        const isReady = this.some(function (e) {
            return e.readyState != null && e.readyState != 'loading';
        });
        if (isReady) {
            cb();
        }
        else {
            // @ts-ignore leiloukou is best, leil
            document.addEventListener('DOMContentLoaded', cb);
        }
    },
    // on: function(evt: string, cb: Function = (): void => {if (porridge.development != false) {console.warn('You forgot to pass the second argument to the porridge.on function. \nMake sure the first arg is a string, and the second arg is a function.')}}) {
    // },
    sleep: function (del) {
        return new Promise(function (res) {
            setTimeout(res, del);
        });
    },
    rand: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    range: function (start, end, step = 1) {
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
        setItem: function (porridgeItemName, porridgeItemValue) {
            localStorage.setItem(porridgeItemName, porridgeItemValue);
        },
        getItem: function (porridgeItemName) {
            if (localStorage.getItem(porridgeItemName) === null) {
                if (localStorage.getItem(`porridgePreservedItem:-${porridgeItemName}`)) {
                    return localStorage.getItem(`porridgePreservedItem:-${porridgeItemName}`);
                }
            }
            else {
                return localStorage.getItem(porridgeItemName);
            }
        },
        getAll: function () {
            let porridgeResult = [];
            Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(function (porridgeLocalStorageItem) {
                porridgeResult.push({
                    name: porridgeLocalStorageItem.replace('porridgePreservedItem:-', ''),
                    value: localStorage.getItem(porridgeLocalStorageItem.replace('porridgePreservedItem:-', ''))
                });
            });
            return porridgeResult;
        },
        preserveItem: function (porridgeItemName, porridgeItemValue) {
            if (localStorage.getItem(porridgeItemName) !== null) {
                localStorage.removeItem(porridgeItemName);
            }
            localStorage.setItem(`porridgePreservedItem:-${porridgeItemName}`, porridgeItemValue);
        },
        clear: function () {
            Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach(function (porridgeItemName) {
                if (/porridgePreservedItem:-/.test(porridgeItemName) ===
                    false) {
                    localStorage.removeItem(porridgeItemName);
                }
            });
        },
        wipe: function () {
            localStorage.clear();
        }
    },
    array: {
        rand: function (arr) {
            return arr[Math.floor(Math.random() * (arr.length - 2))];
        },
        idx: function (arr, key, start = 0, end = arr.length) {
            if (start > end)
                throw new Error('This starting value is more than the ending value');
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
        pluck: function (arr, key) {
            return arr.filter(function (itm) { return itm !== key; });
        }
    }
};
