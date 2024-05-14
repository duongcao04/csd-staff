import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { RxQuestionMark } from "react-icons/rx";
import LogoCSD from '/public/logo-white.webp';
import UserTestAvatar from '@/assets/images/user/Chduong.jpg';
import { useSelector } from 'react-redux';

function Header() {
	const [isShowDropdown, setIsShowDropdown] = useState(false);
	const user = useSelector((state) => state.auth)

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
							src={user.login.currentUser?.avatar ?? UserTestAvatar}
							alt='user-avatar'
							width={40}
							height={40}
							className='object-cover aspect-square rounded-full cursor-pointer'
							title='Account setting'
							onClick={() => setIsShowDropdown(!isShowDropdown)}
						/>
						{isShowDropdown && (<div className='absolute bg-[#313b71] rounded-md min-w-[280px] shadow-2xl top-[52px] right-0 p-4'>
							<div className='rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-1'>
								<Link to={'/account'} className='rounded-md flex items-center justify-start gap-3 cursor-pointer hover:bg-[#232a52] p-2' title='Account Information'>
									<img
										src={user.login.currentUser?.avatar ?? UserTestAvatar}
										alt='user-avatar'
										width={36}
										height={36}
										className='object-cover aspect-square rounded-full cursor-pointer'
									/>
									<p className='font-bold'>{user.login.currentUser?.email ?? "Cao Hai Duong"}</p>
								</Link>
							</div>
							<div className='mt-4 flex items-center justify-start gap-3 hover:bg-[#232a52] p-2 rounded-md cursor-pointer' title='Logout'>
								<div className='p-1 rounded-full bg-[#444d83] w-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
									<IoLogOutOutline size={20} />
								</div>
								<p className='font-bold'>Log out</p>
							</div>
						</div>)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;
