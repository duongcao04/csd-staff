import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/utils/cn';

const Button = forwardRef(({ label, ...rest }, ref) => {
	const props = { ...rest };
	return (
		<React.Fragment>
			<button
				ref={ref}
				{...props}
				className={cn(
					'bg-blue-600 text-white w-[260px] h-[40px] hover:bg-transparent border-[2px] border-transparent hover:border-blue-600 hover:border-[2px] hover:text-black font-semibold transition duration-300',
					props.className
				)}
			>
				{label || 'Click me'}
			</button>
		</React.Fragment>
	);
});

Button.propTypes = {
	label: PropTypes.node,
	className: PropTypes.string,
};

Button.displayName = 'Button';

export default Button;
