import React from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<React.Fragment>
			<div className="w-[50px] h-[calc(100vh-60px)]">
				<div className='py-5 flex flex-col items-center gap-5'>
					<Link to={'https://www.csdvietnam.com'} target='_blank' className='inline-block'>
						<AiOutlineGlobal size={25} title='My site'/>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Sidebar;