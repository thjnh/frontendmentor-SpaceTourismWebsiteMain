import Header from "../../components/Header/Header";
import { Heading } from "../../components/Heading/Heading";
import styles from "./defaultLayout.module.scss";
import { Outlet } from "react-router-dom";

const DefaultLayout = ({backgroundImg, children, slogan}) => {
    var imgURL = `./assets/${backgroundImg||'home'}/background-${backgroundImg||'home'}-desktop.jpg`;
	return (
		<div 
            style={{backgroundImage: `url(${imgURL})`}} 
            className={styles.container}
        >
            <Header />
            {
                slogan ? (
                    <Heading 
                        className={styles.slogan}
                        h='5'
                    >
                        <span>{slogan.substring(0, 2)}</span>{slogan.substring(3)}
                    </Heading>
                ) : ''
            }
            {children || <Outlet />}
		</div>
	);
};

export default DefaultLayout;
