import { NavLink } from "react-router-dom";
import styles from "./hamburgerMenu.module.scss";
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
const HamburgerMenu = ({ handleClick }) => {
	return (
		<main className={styles.container}>
			<div className={styles.icon_close}>
				<img
                    onClick={handleClick}
					src="./assets/shared/icon-close.svg"
					alt=""
				/>
			</div>
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
		</main>
	);
};
export default HamburgerMenu;
