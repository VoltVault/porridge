/** @format */

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @param {string} porridgeUrl
 * @param {object} porridgeOptions
 */
function useFetch(porridgeUrl, porridgeOptions) {
	if (!porridgeUrl) throw new Error('The first parameter is required.');
	if (typeof porridgeUrl != 'string')
		throw new Error('The first parameter must be a string.');

	const [porridgeData, porridgeSetData] = useState(null);
	const [porridgeError, porridgeSetError] = useState(null);
	const [porridgeLoading, porridgeSetLoading] = useState(null);

	useEffect(() => {
		let porridgeIsMounted;
		porridgeIsMounted = true;

		porridgeSetLoading(true);

		fetch(porridgeUrl, porridgeOptions)
			.then((porridgeRes) => porridgeRes.json())
			.then((porridgeData) => {
				if (porridgeIsMounted) {
					porridgeSetData(porridgeData);
					porridgeSetError(null);
				}
			})
			.catch((porridgeError) => {
				porridgeSetError(porridgeError);
			})
			.finally(() => porridgeIsMounted && porridgeSetLoading(false));
	}, [porridgeUrl, porridgeOptions]);

	return { porridgeLoading, porridgeError, porridgeData };
}

useFetch.defaultProps = {
	porridgeUrl: 'https://randomuser.me/api/',
	porridgeOptions: null
};

useFetch.propTypes = {
	porridgeUrl: PropTypes.string.isRequired,
	porridgeOptions: PropTypes.object
};

export default useFetch
