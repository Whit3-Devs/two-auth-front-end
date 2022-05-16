import {
	Box,
	Button,
	Checkbox,
	Typography,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataUserContext } from '../context/DataUserContext';

const initialForm = {
	email: '',
	password: '',
};

const succesNotification = {
	messagge: 'Correct authenticated.',
	open: true,
	type: 'success',
};

const failedNotification = {
	messagge: 'Failed authenticated',
	open: true,
	type: 'error',
};

const Login = () => {
	const [values, setValues] = useState(initialForm);
	const [showPass, setShowPassword] = useState(false);
	const [validation, setValidation] = useState({
		email: false,
		password: false,
	});
	const { setNotification } = useContext(DataUserContext);

	const regEmail =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPass);
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const onSubmit = e => {
		e.preventDefault();
		regEmail.test(values.email)
			? setValidation({
					password: false,
					email: false,
			  })
			: setValidation({
					password: true,
					email: true,
			  });
		// setValues(initialForm);
		console.log(values);
		regEmail.test(values.email)
			? setNotification(succesNotification)
			: setNotification(failedNotification);
	};

	return (
		<Box
			sx={{
				width: '500px',
				height: '70%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				component='form'
				sx={{
					'& .MuiTextField-root': { marginBottom: '15px', width: '100%' },
				}}
				noValidate
				autoComplete='on'
				onSubmit={onSubmit}
			>
				{/* <TextField
					error
					id='outlined-error-helper-text'
					label='Error'
					defaultValue='Hello World'
					
				/> */}
				<TextField
					required
					error={validation.email}
					id='outlined-required'
					label='Email'
					type='email'
					fullWidth
					value={values.email}
					onChange={handleChange('email')}
				/>
				<FormControl
					sx={{ marginBottom: '15px', width: '100%' }}
					variant='outlined'
				>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						autoComplete='on'
						fullWidth
						id='outlined-adornment-password'
						error={validation.password}
						type={showPass ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
								>
									{showPass ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					<Checkbox
						aria-label={'Checkbox demo'}
						defaultChecked
						sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
					/>
					<Typography
						sx={{
							color: '#555',
							fontWeight: '700',
						}}
					>
						Remember me
					</Typography>
				</Box>
				<Button
					fullWidth
					variant='contained'
					type='submit'
					sx={{
						height: '45px',
						fontWeight: '700',
						fontSize: '20px',
						textTransform: 'capitalize',
					}}
				>
					Login
				</Button>
			</Box>
			<Box
				sx={{
					width: '95%',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					marginTop: '15px',
				}}
			>
				<Typography
					sx={{
						'& a': {
							textDecoration: 'none',
							color: '#389820',
							fontWeight: '700',
						},
						fontWeight: '700',
						fontSize: '24px',
					}}
				>
					Not a Member? <Link to='/register'>Create an Account</Link>
				</Typography>
			</Box>
		</Box>
	);
};

export default Login;
