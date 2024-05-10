import React from 'react';
import PropTypes from 'prop-types';

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired
};

function DefaultLayout({ children }) {
	return (
		<React.Fragment>
			<div className='w-screen h-screen'>{children}</div>
		</React.Fragment>
	);
}

export default DefaultLayout;