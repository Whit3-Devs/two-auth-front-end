import {
	Container,
	Box,
	Button,
	Checkbox,
	Typography,
	TextField,
	Grid,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';

const Register = () => {
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
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								required
								id='outlined-required'
								label='Name'
								//   defaultValue="Hello World"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id='outlined-required'
								label='Last name'
								// defaultValue='Hello World'
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id='outlined-required'
								label='Email'
								// defaultValue=''
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id='outlined-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
							/>
						</Grid>
					</Grid>
				</Box>

				<Checkbox
					aria-label={'Checkbox demo'}
					defaultChecked
					sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
				/>
				<Typography>
					<CheckIcon />
					Lowercase
				</Typography>
				<Typography>
					<CheckIcon />
					uppercase
				</Typography>
				<Typography>
					<CheckIcon />
					Number
				</Typography>
				<Typography>
					<CheckIcon />
					Min 8 characters
				</Typography>
				<Typography>
					<CheckIcon />
					Special characters
				</Typography>
				<Button variant='contained'>Sign Up</Button>
			</Box>
			<Box>
				<Typography>
					Have an account? <Link to='/login'>Login</Link>
				</Typography>
			</Box>
		</Container>
	);
};

export default Register;
