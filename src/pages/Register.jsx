import { Box, Button, Typography, TextField, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<Box
			sx={{
				width: '60%',
				height: '75%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				component='form'
				sx={{
					'& .MuiTextField-root': { width: '100%', gap: '15px' },
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
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id='outlined-required'
								label='Last Name'
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id='outlined-required'
								label='Email'
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								required
								id='outlined-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
								fullWidth
							/>
						</Grid>
						<Grid item xs={6}></Grid>
						<Grid item xs={6}>
							<Box
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									gap: '5px',
									'& p': {
										display: 'flex',
										justifyContent: 'space-around',
										alignItems: 'center',
										fontSize: '13px',
										gap: '5px',
									},
								}}
							>
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
									Special characters
								</Typography>
								<Typography>
									<CheckIcon />
									number
								</Typography>
								<Typography>
									<CheckIcon />
									Min 8 characters
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Button
					variant='contained'
					fullWidth
					sx={{
						height: '45px',
						margin: '15px 0',
						fontWeight: '700',
						fontSize: '20px',
						textTransform: 'capitalize',
					}}
				>
					Sign Up
				</Button>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
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
					Have an account? <Link to='/login'>Login</Link>
				</Typography>
			</Box>
		</Box>
	);
};

export default Register;
