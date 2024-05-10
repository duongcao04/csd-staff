import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import yup from '@/utils/yupServices';
import userApi from '@/api/userApi';
import Button from '@/components/Button';
import Input from '@/components/Input';

function LoginForm() {
	const schema = yup.object().shape({
		email: yup.string().required('Required').email('Email invalid'),
		password: yup.string().required('Required').password('Password invalid'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
	});

	const onSubmitHandler = async (data) => {
		try {
			const user = await userApi.loginUser({
				email: data.email,
				password: data.password,
			})
			localStorage.setItem('user', JSON.stringify(user.data));
			window.location.replace("/");
		} catch (error) {
			alert(error.response.data);
		}
	};

	return (
		<form className='mt-5 flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmitHandler)}>
			<div className='flex flex-col items-start justify-start'>
				<Input
					name='email'
					id='email'
					autoComplete='off'
					{...register('email')} placeholder='Email' type='email' className='w-[350px] text-lg' />
				{errors.email && (
					<p className='text-xs text-red-500 mt-1'>{errors.email.message}</p>
				)}
				<Input
					name='password'
					id='password'
					autoComplete='off'
					{...register('password')}
					placeholder='Password'
					className='w-[350px] text-lg mt-7'
					type='password'
				/>
				{errors.password && (
					<p className='text-xs text-red-500 mt-1'>{errors.password.message}</p>
				)}
			</div>
			<p className='text-sm w-full italic mt-2'>
				Support? Contact to{' '}
				<Link
					to={'mailto:Ch.duong@csdvietnam.com'}
					className='text-blue-700 hover:underline hover:underline-offset-2'
				>
					Ch.duong@csdvietnam.com
				</Link>
			</p>
			<Button label={'Login'} className='mt-[40px]' />
		</form>
	);
}

export default LoginForm;