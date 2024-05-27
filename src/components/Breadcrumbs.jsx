import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

function Breadcrumb() {
	const location = useLocation();
	const breadcrumbs = location.pathname.split('/').slice(1);
	console.log(breadcrumbs);

	return (
		<React.Fragment>
			<div className='text-lg flex items-center justify-start gap-2 font-semibold uppercase'>
				{breadcrumbs.map((link, index) => (
					<div key={index} className='flex items-center justify-start gap-1'>
						<p className={`opacity-50 ${index === breadcrumbs.length-1 && 'opacity-100'}`}>{link}</p>
						{index < breadcrumbs.length - 1 && <IoChevronForward size={15} />}
					</div>
				))}
			</div>
		</React.Fragment>
	);
}

export default Breadcrumb;
