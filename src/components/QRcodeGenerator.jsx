import QRCode from 'react-qr-code';

const QRcodeGenerator = ({ valueQR }) => {
	return <QRCode value={valueQR} size={150} />;
};

export default QRcodeGenerator;
