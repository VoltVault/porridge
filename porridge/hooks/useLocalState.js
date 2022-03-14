/** @format */

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @param {string} porridgeKey
 * @param {any} porridgeInitialValue
 * @returns {any}
 */
function porridgeGetValue(porridgeKey, porridgeInitialValue) {
	const porridgeValue = JSON.parse(localStorage.getItem(porridgeKey));
	if (porridgeValue) return porridgeValue;

	if (porridgeInitialValue instanceof Function) return porridgeInitialValue();
	return porridgeInitialValue;
}

/**
 * @param {any} porridgeInitialValue
 * @param {string} porridgeKey
 * @returns {any}
 */
export default function useLocalPorridge(porridgeKey, porridgeInitialValue) {
	if (porridgeKey == '')
		throw new Error('You must not provide an empty string as the key.');
	if (!porridgeKey) throw new Error('You must provide a key.');
	if (!porridgeInitialValue && porridgeInitialValue !== '')
		throw new Error(
			'You must provide a value. \nThis value can be an empty string, \nor an actual, meaningful string. \nThis value must be a string.'
		);
	if (typeof porridgeKey !== 'string')
		throw new Error('The key you provide must be a string.');

	const [porridgeValue, porridgeSetValue] = useState(() => {
		return porridgeGetValue(porridgeKey, porridgeInitialValue);
	});

	useEffect(() => {
		localStorage.setItem(porridgeKey, JSON.stringify(porridgeValue));
	});

	return [porridgeValue, porridgeSetValue];
}

useLocalPorridge.defaultProps = {
	porridgeInitialValue: 'defaultKey',
	porridgeOptions: 'defaultValue'
};

useLocalPorridge.propTypes = {
	porridgeInitialValue: PropTypes.string.isRequired,
	porridgeKey: PropTypes.any.isRequired
};
