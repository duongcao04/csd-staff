import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { PiEyeClosed, PiEye } from 'react-icons/pi';
import { cn } from '@/utils/cn';

const Input = forwardRef(({ type, ...rest }, ref) => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const props = { ...rest };

	const handleTypeProp = () => {
		if (isShowPassword && type === 'password') {
			return 'text'
		}
		if (!isShowPassword && type === 'password') {
			return 'password'
		}
		if (type) {
			return type;
		}
		return 'text';
	};

	return (
		<React.Fragment>
			<div className='relative'>
				<input
					ref={ref}
					type={handleTypeProp()}
					{...props}
					className={cn(
						'border-b-[2px] border-solid border-black focus:outline-none',
						props.className
					)}
				/>
				{type === 'password' && (
					<div
						className='absolute top-[50%] right-2 cursor-pointer'
						onClick={() => setIsShowPassword(!isShowPassword)}
					>
						{isShowPassword ? <PiEyeClosed size={23} /> : <PiEye size={23} />}
					</div>
				)}
			</div>
		</React.Fragment>
	);
});

Input.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;
