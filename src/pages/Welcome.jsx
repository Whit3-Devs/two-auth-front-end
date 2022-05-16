import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
	const navigate = useNavigate();

	function onReturnLogin() {
		navigate('/login');
	}

	return (
		<Box
			sx={{
				width: '90%',
				height: '75%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '5rem',
			}}
		>
			<Typography variant='h2'>Welcome [Fistrname lastname]</Typography>
			<Button
				variant='contained'
				fullWidth
				sx={{
					width: '30%',
					height: '45px',
					margin: '15px 0',
					fontWeight: '700',
					fontSize: '20px',
					textTransform: 'capitalize',
				}}
				onClick={onReturnLogin}
			>
				Back
			</Button>
		</Box>
	);
};

export default Welcome;
