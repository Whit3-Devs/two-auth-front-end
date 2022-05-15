import QRCode from 'react-qr-code';

const QRcodeGenerator = ({ valueQR }) => {
	return <QRCode value={valueQR} />;
};

export default QRcodeGenerator;
