import { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import QRcode from './pages/QRcode';
import AuthToken from './pages/AuthToken';
import Welcome from './pages/Welcome';
import { customTheme } from './assets/mui-theme-config/theme-mui';

const App = () => {
	const theme = useMemo(() => createTheme(customTheme), []);
	return (
		<>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path='/' element={<Navigate to='/login' replace={true} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/qrcode' element={<QRcode />} />
					<Route path='/authtoken' element={<AuthToken />} />
					<Route path='/welcome' element={<Welcome />} />
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
