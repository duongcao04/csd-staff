import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

WithHeaderLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

function WithHeaderLayout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<div className='flex items-start justify-start bg-[#f0f0f0]'>
				<Sidebar />
				<div className='w-full h-[calc(100vh-60px)]'>
					<div className='bg-white'>
						{children}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default WithHeaderLayout;
