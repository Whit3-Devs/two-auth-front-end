import { Container, Box, Button, Typography } from '@mui/material';
import QRcodeGenerator from '../components/QRcodeGenerator';

const QRcode = () => {
	return (
		<Container>
			<Box>
				<Typography>
					In order to protect your account from unauthorized acces, we require
					both a password and possession of your phone to access your account.
					Please install Microsoft Authenticator app through the following steps
					for us to verify that you have possession of your phone.
				</Typography>
				<ol>
					<li>
						Install the Microsoft Authenticator App from IOS App Store/Android
						Play Store.
					</li>
					<li>Open the Microsoft Authenticator App.</li>
					<li>Click I agree for permissions to use the app.</li>
					<li>Click Sacn a QR Code.</li>
					<li>Scan the image below.</li>
				</ol>
				<QRcodeGenerator
					valueQR={'https://www.npmjs.com/package/react-qr-code'}
				/>
			</Box>
			<Box>
				<Button variant='contained'>Continue</Button>
			</Box>
		</Container>
	);
};

export default QRcode;
