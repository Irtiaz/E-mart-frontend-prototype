import React from 'react';
import Link from 'next/link';

import Container from './Container.js';

import styles from '../styles/Navbar.module.css';

export default class Navbar extends React.Component {
	render() {
		return (
			<header className={styles.header}>
				<Container>
					<div className={styles.navContainer}>

						<div>
							<h1>
								<Link href="/">
									<a>LOGO</a>
								</Link>
							</h1>
							<div>Slogan</div>
						</div>

						<nav>
							<ul>
								<li>
									<Link href="#">
										<a>Sign Up</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Sign In</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Contact Us</a>
									</Link>
								</li>
							</ul>
						</nav>


					</div>
				</Container>
			</header>
		);
	}
}
