import Head from 'next/head';

import Navbar from '../Components/Navbar.js';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>E-mart</title>
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp
