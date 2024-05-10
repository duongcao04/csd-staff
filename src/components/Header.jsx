import React from 'react';
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { RxQuestionMark } from "react-icons/rx";
import LogoCSD from '/public/logo-white.webp';
import UserTestAvatar from '@/assets/images/user/Chduong.jpg';

function Header() {
	return (
		<React.Fragment>
			<div className='w-full h-[60px] bg-[#313b71] text-white'>
				<div className='h-full container flex items-center justify-between'>
					<Link to={'/'}>
						<img src={LogoCSD} height={45} className='h-[45px]' />
					</Link>
					{/* Action */}
					<div className='flex items-center gap-8'>
						<IoSettingsOutline size={25} title='Setting' className='cursor-pointer' />
						<RxQuestionMark size={25} title='Notification' className='cursor-pointer' />
						<img
							src={UserTestAvatar}
							alt='user-avatar'
							width={40}
							height={40}
							className='object-cover aspect-square rounded-full cursor-pointer'
							title='Account setting'
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;
