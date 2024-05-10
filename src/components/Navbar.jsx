import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const globalNavigation = [
		{
			path: '/activities',
			label: 'Activities'
		},
		{
			path: '/finance',
			label: 'Finance'
		},
		{
			path: '/documents',
			label: 'Documents'
		},
		{
			path: '/projects',
			label: 'Projects'
		},
		{
			path: '/team',
			label: 'Team'
		}, {
			path: '/marketing',
			label: 'Marketing'
		},
		{
			path: '/human-resource',
			label: 'HR'
		}
	]
	return (
		<React.Fragment>
			<nav className='flex items-center pl-14 py-6'>
				<ul className='flex items-center justify-start gap-8'>
					{globalNavigation.map((_, idx) => (
						<li key={idx} className='opacity-70 hover:opacity-100 hover:underline underline-offset-4 transition duration-300'>
							<Link to={_.path} className='uppercase font-semibold text-xl p-2'>{_.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;