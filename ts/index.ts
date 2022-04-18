const porridge: any = {
	development: true,
	version: '1.2.1',
	clone: (obj: any = {}) => {
		return JSON.parse(JSON.stringify(obj));
	},
	qs: (sel: string, par: Element | Document = window.document) => {
		if (sel) return par.querySelector(sel);
		throw new Error(`Function "qs" expected 1 or 2 arguments, but found 0`);
	},
	qsa: (sel: string, par: Element | Document = window.document) => {
		if (sel) return [...par.querySelectorAll(sel)];
		throw new Error(
			`Function "qsa" expected 1 or 2 arguments, but found 0`
		);
	},
	qsaRaw: (sel: string, par: Element | Document = window.document) => {
		if (sel) return par.querySelectorAll(sel);
		throw new Error(
			`Function "qsaRaw" expected 1 or 2 arguments, but found 0`
		);
	},
	sleep: (del: number) => {
        return new Promise(res => {
            setTimeout(res, del)
        })
    }
};