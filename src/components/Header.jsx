import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { RxQuestionMark } from "react-icons/rx";
import LogoCSD from '/public/logo-white.webp';
import { useSelector } from 'react-redux';
import UserDropdown from '@/components/UserDropdown';

function Header() {
	const [isShowDropdown, setIsShowDropdown] = useState(false);
	const user = useSelector((state) => state.auth.login?.currentUser)

	return (
		<React.Fragment>
			<div className='w-full h-[60px] bg-[#313b71] text-white'>
				<div className='h-full container flex items-center justify-between'>
					<Link to={'/'}>
						<img src={LogoCSD} height={45} className='h-[45px]' />
					</Link>
					{/* Action */}
					<div className='relative flex items-center gap-8'>
						<IoSettingsOutline size={25} title='Setting' className='cursor-pointer' />
						<RxQuestionMark size={25} title='Notification' className='cursor-pointer' />
						<img
							src={user?.information.avatar}
							alt='user-avatar'
							width={40}
							height={40}
							className='object-cover aspect-square rounded-full cursor-pointer'
							title='Account setting'
							onClick={() => setIsShowDropdown(!isShowDropdown)}
						/>
						{isShowDropdown && <UserDropdown />}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;
