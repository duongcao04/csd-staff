import React from 'react';
import { useSelector } from 'react-redux';
import { GrUserAdmin } from 'react-icons/gr';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsChatText } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import Button from '@/components/Button';

function AccountInformationPage() {
	const user = useSelector((state) => state.auth.login?.currentUser);

	const contactInformation = [
		{
			icon: MdOutlineEmail,
			label: 'Email',
			description: user?.information.contactEmail,
			path: `mailto:${user?.information.contactEmail}`,
		},
		{
			icon: BsChatText,
			label: 'Chat',
			description: user?.information.chat,
			path: user?.information.chat,
		},
		{
			icon: MdOutlineLocationOn,
			label: 'Location',
			description: user?.information.location,
			path: `http://maps.google.com/maps?q=${user?.information.location}`,
		},
		{
			icon: BiBuildingHouse,
			label: 'Company',
			description: user?.information.company,
			path:
				user?.information.company === 'CADSQUAD VIETNAM'
					? 'https://www.csdvietnam.com'
					: `https://www.google.com/search?q=${user?.information.company}`,
		},
		{
			icon: AiOutlineUser,
			label: 'Job title',
			description: user?.information.jobTitle,
			path: '#',
		},
		{
			icon: IoPeopleOutline,
			label: 'Department',
			description: user?.information.department,
			path: '#',
		},
	];

	return (
		<React.Fragment>
			<div className='px-20 py-14'>
				<div className='flex items-start justify-start gap-10'>
					<img
						src={user?.information.avatar}
						alt='user-avatar'
						width={200}
						height={200}
						className='object-cover aspect-square rounded-full cursor-pointer'
					/>
					<div className='mt-2'>
						<p className='font-bold text-4xl'>{user?.information.fullname}</p>
						<div className='flex items-center justify-start gap-2 mt-4'>
							<GrUserAdmin size={25} />
							<p className='font-medium text-2xl'>
								{user?.information.jobTitle}
							</p>
						</div>
					</div>
				</div>
				{/* Account Information */}
				<div className='mt-16'>
					<p className='font-bold text-xl'>Contact information</p>
					<ul className='mt-5 w-[80%] grid grid-cols-3 gap-x-3 gap-y-14'>
						{contactInformation?.map((_, idx) => (
							<li key={idx} className='flex items-end justify-start gap-4'>
								<_.icon size={25} className='mb-1' />
								<div>
									<p>{_.label}</p>
									<Link
										to={_.path}
										className='text-blue-700 font-medium hover:underline underline-offset-2'
										target='_'
									>
										{_.description}
									</Link>
								</div>
							</li>
						))}
					</ul>
				</div>
				{/* Account Action */}
				<div className='mt-28 grid place-items-center'>
					<div className='flex items-center justify-start gap-28'>
						<Button label={'Edit information'} className='bg-yellow-500' />
						<Button label={'Log out'} className='bg-red-500' />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default AccountInformationPage;
