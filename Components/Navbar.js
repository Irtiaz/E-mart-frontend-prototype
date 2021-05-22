import React from 'react';
import Link from 'next/link';

import Container from './Container.js';

import styles from '../styles/Navbar.module.css';

export default class Navbar extends React.Component {
	state = {
		linksShow: false
	};

	handleCollapse = () => {
		this.setState({
			linksShow: !this.state.linksShow
		});
	}


	render() {

		const navClassName = !this.state.linksShow? styles.hidden : null;

		return (
			<header className={styles.header}>
				<Container>
					<div className={styles.navContainer}>

						<div className={styles.logo_collapseButton_wrapper}>

							{/*Logo And Slogan*/}
							<div>
								<h1>
									<Link href="/">
										<a>LOGO</a>
									</Link>
								</h1>
								<div>Slogan</div>
							</div>

							{/*Collpase Button*/}
							<div className={styles.collapseButton} onClick={this.handleCollapse} ref={this.collapseButtonRef}>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>

						<nav className={navClassName}>
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
