import React from "react";
import { useSelector } from "react-redux";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineEmail,MdOutlineLocationOn } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";

import UserTestAvatar from '@/assets/images/user/Chduong.jpg';
import { Link } from "react-router-dom";
import Button from "@/components/Button";

function AccountInformationPage() {
	const contactInformation = [
		{
			icon: MdOutlineEmail, label: 'Email', description: 'Ch.duong@csdvietnam.com', path: 'mailto:Ch.duong@csdvietnam.com'
		},
		{
			icon: BsChatText, label: 'Chat', description: 'live.cid.484fasjdasjdakdjakl', path: 'live.cid.484fasjdasjdakdjakl'
		},
		{
			icon: MdOutlineLocationOn, label: 'Location', description: 'HCM City, Viet Nam', path: 'mailto:Ch.duong@csdvietnam.com'
		},
		{
			icon: BiBuildingHouse, label: 'Company', description: 'CADSQUAD VIETNAM', path: 'https://www.csdvietnam.com'
		},
		{
			icon: AiOutlineUser, label: 'Job title', description: 'Manager', path: 'mailto:Ch.duong@csdvietnam.com'
		},
		{
			icon: IoPeopleOutline, label: 'Department', description: 'Ch.duong@csdvietnam.com', path: 'mailto:Ch.duong@csdvietnam.com'
		}
	]
	const user = useSelector((state) => state.auth)
	return (
		<React.Fragment>
			<div className="px-20 py-14">
				<div className="flex items-start justify-start gap-10">
					<img
						src={user.login.currentUser?.avatar ?? UserTestAvatar}
						alt='user-avatar'
						width={200}
						height={200}
						className='object-cover aspect-square rounded-full cursor-pointer'
					/>
					<div className="mt-2">
						<p className="font-bold text-4xl">{user.login.currentUser?.email ?? "Cao Hai Duong"}</p>
						<div className="flex items-center justify-start gap-2 mt-4">
							<GrUserAdmin size={25}/>
							<p className="font-medium text-2xl">{user.login.currentUser?.role ?? "Manager"}</p>
						</div>
					</div>
				</div>
				{/* Account Information */}
				<div className="mt-16">
					<p className="font-bold text-xl">Contact information</p>
					<ul className="mt-5 w-[80%] grid grid-cols-3 gap-x-3 gap-y-14">
						{contactInformation?.map((_, idx) => (
							<li key={idx} className="flex items-end justify-start gap-4">
								<_.icon size={25} className="mb-1"/>
								<div>
									<p>{_.label}</p>
									<Link to={_.path} className="text-blue-700 font-medium hover:underline underline-offset-2" target="_">{_.description}</Link>
								</div>						
							</li>
						))}
					</ul>
				</div>
				{/* Account Action */}
				<div className="mt-28 grid place-items-center">
					<div className="flex items-center justify-start gap-28">
						<Button label={'Edit information'} className='bg-yellow-500'/>
						<Button label={'Log out'} className='bg-red-500'/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default AccountInformationPage;