import { Container, Box, Typography, Button } from '@mui/material';

const Welcome = () => {
	return (
		<Container>
			<Box>
				<Typography>Welcome [Fistrname lastname]</Typography>
				<Button variant='contained'>Back</Button>
			</Box>
		</Container>
	);
};

export default Welcome;
