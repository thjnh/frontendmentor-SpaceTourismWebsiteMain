import { useState } from "react";
import HamburgerMenu from "../MobileMenu/HamburgerMenu";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
const pages = [
	{
		name: "00 HOME",
		addr: "/",
	},
	{
		name: "01 DESTINATION",
		addr: "/destination",
	},
	{
		name: "02 CREW",
		addr: "/crew",
	},
	{
		name: "03 TECHNOLOGY",
		addr: "/technology",
	},
];

function Header() {
	const [isDisplay, setIsDisplay] = useState(false);
	return (
		<header className={styles.header}>
			<img 
                className={styles.logo}
				src="./assets/shared/logo.svg"
				alt=""
			/>
			{!isDisplay && (
				<div
					className={styles.hamburger}
					onClick={() => {
						setIsDisplay(true);
					}}
				>
					<img
						src="./assets/shared/icon-hamburger.svg"
						alt=""
					/>
				</div>
			)}
			{isDisplay && (
				<HamburgerMenu handleClick={() => setIsDisplay(false)} />
			)}
			<hr />
			<nav className={styles.navigation + " nav-text"}>
				<ul>
					{pages.map((item, index) => (
						<li key={index}>
							<NavLink
								to={item.addr}
								className={({ isActive, isPending }) =>
									isPending
										? styles.pending
										: isActive
										? styles.active
										: ""
								}
							>
								<span>{item.name.substring(0, 2)}</span>{" "}
								{item.name.substring(3)}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
export default Header;
