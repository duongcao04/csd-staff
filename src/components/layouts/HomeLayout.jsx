import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumbs';

HomeLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

function HomeLayout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<div className='flex items-start justify-start bg-[#f0f0f0]'>
				<Sidebar />
				<div className='w-full h-[calc(100vh-188px)]'>
					<div className='bg-white'>
						<Navbar />
					</div>
					<div className='ml-4 py-3'>
						<Breadcrumb />
					</div>
					<div className='bg-white w-full h-full'>
						{children}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomeLayout;
