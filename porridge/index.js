"use strict";
const porridge = {
    development: true,
    version: '1.2.1',
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
        return new Promise(res => {
            setTimeout(res, del);
        });
    }
};
