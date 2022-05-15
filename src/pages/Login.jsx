import {
	Container,
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
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		showPassword: false,
	});

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	return (
		<Container>
			<Box
				component='form'
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
			>
				<TextField
					required
					id='outlined-required'
					label='Email'
					// defaultValue=''
				/>
				<FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-password'
						type={values.showPassword ? 'text' : 'password'}
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
									{values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>
				<Checkbox
					aria-label={'Checkbox demo'}
					defaultChecked
					sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
				/>
				<Typography>Remember Me</Typography>
				<Button variant='contained'>Login</Button>
			</Box>
			<Box>
				<Typography>
					Not a Member? <Link to='/register'>Create an Account</Link>
				</Typography>
			</Box>
		</Container>
	);
};

export default Login;
