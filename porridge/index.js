'use strict';
const porridge = {
    development: false,
    version: '1.2.1',
    help: () => {
        console.log('porridge.help() has returned: \n', porridge);
    },
    clone: (obj = {}) => {
        return JSON.parse(JSON.stringify(obj));
    },
    qs: (sel, par = window.document) => {
        if (sel)
            return par.querySelector(sel);
        throw new Error(`Function "qs" expected 1 or 2 arguments, but found 0`);
    },
    qsa: (sel, par = window.document) => {
        if (sel)
            return [...par.querySelectorAll(sel)];
        throw new Error(`Function "qsa" expected 1 or 2 arguments, but found 0`);
    },
    qsaRaw: (sel, par = window.document) => {
        if (sel)
            return par.querySelectorAll(sel);
        throw new Error(`Function "qsaRaw" expected 1 or 2 arguments, but found 0`);
    },
    sleep: (del) => {
        return new Promise((res) => {
            setTimeout(res, del);
        });
    },
    rand: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    range: (start, end, step = 1) => {
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
        setItem: (porridgeItemName, porridgeItemValue) => {
            localStorage.setItem(porridgeItemName, porridgeItemValue);
        },
        getItem: (porridgeItemName) => {
            if (localStorage.getItem(porridgeItemName) === null) {
                if (localStorage.getItem(`porridgePreservedItem:-${porridgeItemName}`)) {
                    return localStorage.getItem(`porridgePreservedItem:-${porridgeItemName}`);
                }
            }
            else {
                return localStorage.getItem(porridgeItemName);
            }
        },
        getAll: () => {
            let porridgeResult = [];
            Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach((porridgeLocalStorageItem) => {
                porridgeResult.push({
                    name: porridgeLocalStorageItem.replace('porridgePreservedItem:-', ''),
                    value: localStorage.getItem(porridgeLocalStorageItem.replace('porridgePreservedItem:-', ''))
                });
            });
            return porridgeResult;
        },
        preserveItem: (porridgeItemName, porridgeItemValue) => {
            if (localStorage.getItem(porridgeItemName) !== null) {
                localStorage.removeItem(porridgeItemName);
            }
            localStorage.setItem(`porridgePreservedItem:-${porridgeItemName}`, porridgeItemValue);
        },
        clear: () => {
            Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach((porridgeItemName) => {
                if (/porridgePreservedItem:-/.test(porridgeItemName) ===
                    false) {
                    localStorage.removeItem(porridgeItemName);
                }
            });
        },
        wipe: () => {
            localStorage.clear();
        }
    },
    array: {
        rand: (arr) => {
            return arr[Math.floor(Math.random() * (arr.length - 2))];
        },
        idx: (arr, key, start = 0, end = arr.length) => {
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
        pluck: (arr, key) => {
            return arr.filter((itm) => itm !== key);
        }
    }
};
let alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'asdf'
];
let oh = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100
];
console.time('MS');
console.log(porridge.array);
console.timeEnd('MS');
