import { NavLink } from "react-router-dom";
import styles from "./hamburgerMenu.module.scss";
import { useState } from "react";

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

const HamburgerMenu = ({ handleClick}) => {
    const [isMounted, setIsMounted] = useState(true)
	return (
		<main 
            className={`${styles.container} ${isMounted ? styles.open : styles.close}`} 
        >
            <div 
                className={styles.left_hidden}
                onClick={() => {
                    setIsMounted(false)
                    setTimeout(() => {
                        handleClick()
                    }, 600);
                }}
            ></div>
            <div className={styles.right}>
                <div className={styles.icon_close}>
                    <img
                        onClick={() => {
                            setIsMounted(false)
                            setTimeout(() => {
                                handleClick()
                            }, 600);
                        }}
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
            </div>
		</main>
    )
}
export default HamburgerMenu;
