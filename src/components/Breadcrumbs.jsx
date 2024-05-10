import React from 'react';
import PropTypes from 'prop-types';
import { IoChevronForward } from "react-icons/io5";

Breadcrumb.propTypes = {

};

function Breadcrumb(props) {
	return (
		<React.Fragment>
			<div className='text-lg flex items-center justify-start gap-2 font-semibold uppercase'>
				<p className='opacity-50'>CADSQUAD</p>
				<IoChevronForward size={15}/>
				<p className='font-bold uppercase'>Activities</p>
			</div>
		</React.Fragment>
	);
}

export default Breadcrumb;