import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	const globalNavigation = [
		{
			path: '/dashboard/activities',
			label: 'Activities'
		},
		{
			path: '/dashboard/finance',
			label: 'Finance'
		},
		{
			path: '/dashboard/documents',
			label: 'Documents'
		},
		{
			path: '/dashboard/projects',
			label: 'Projects'
		},
		{
			path: '/dashboard/team',
			label: 'Team'
		}, {
			path: '/dashboard/marketing',
			label: 'Marketing'
		},
		{
			path: '/dashboard/human-resource',
			label: 'HR'
		}
	]
	return (
		<React.Fragment>
			<nav className='flex items-center pl-14 py-6'>
				<ul className='flex items-center justify-start gap-8'>
					{globalNavigation.map((_, idx) => (
						<li key={idx} className='hover:underline underline-offset-4 transition duration-300'>
							<NavLink to={_.path} className='opacity-70 hover:opacity-100 uppercase font-semibold text-xl p-2'>{_.label}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;