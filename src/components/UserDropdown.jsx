import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";

function UserDropdown() {
	const user = useSelector((state) => state.auth.login?.currentUser)

	return (
		<div className='absolute bg-[#313b71] rounded-md min-w-[280px] shadow-2xl top-[52px] right-0 p-4'>
			<div className='rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-1'>
				<Link to={'/auth/account'} className='rounded-md flex items-center justify-start gap-3 cursor-pointer hover:bg-[#232a52] p-2' title='Account Information'>
					<img
						src={user?.information.avatar}
						alt='user-avatar'
						width={36}
						height={36}
						className='object-cover aspect-square rounded-full cursor-pointer'
					/>
					<p className='font-bold'>{user?.information.fullname ?? user?.information.email}</p>
				</Link>
			</div>
			<div className='mt-4 flex items-center justify-start gap-3 hover:bg-[#232a52] p-2 rounded-md cursor-pointer' title='Logout'>
				<div className='p-1 rounded-full bg-[#444d83] w-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
					<IoLogOutOutline size={20} />
				</div>
				<p className='font-bold'>Log out</p>
			</div>
		</div>
	);
}

export default UserDropdown;