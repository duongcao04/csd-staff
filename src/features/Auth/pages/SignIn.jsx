import React from 'react';
import { Link } from 'react-router-dom';
import LogoCSD from '/public/logo.webp';
import LoginForm from '@/features/Auth/components/LoginForm';

function SignIn() {
	return (
		<React.Fragment>
			<div className='bg-gradient-to-r from-[#f3f3c3] to-[#D4D3DD] w-full h-full grid place-items-center'>
				<div className='flex flex-col items-center justify-center gap-6'>
					<img src={LogoCSD} alt='csd-logo' title='Logo CADSQUAD' width={180} />
					<div className='bg-white pt-8 pb-12 px-16 shadow-md'>
						<p className='text-3xl font-bold'>Sign in</p>
						<p className='italic mt-2'>
							to continue to
							<Link
								to={'/'}
								className='text-blue-700 hover:underline hover:underline-offset-2'
							>
								{' '}
								staff.csdvietnam.com
							</Link>
						</p>

						{/* Login Form */}
						<LoginForm />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default SignIn;
