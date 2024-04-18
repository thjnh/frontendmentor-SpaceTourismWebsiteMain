import { NavLink, useNavigate } from "react-router-dom";
import styles from "./destination.module.scss";
import { Heading, SubHeading } from "../../components/Heading/Heading";
import { useState } from "react";

const Destination = ({ destinaData}) => { 
    const [isMounted, setIsMounted] = useState(true)
    const navigate = useNavigate()
	return (
		<main className={styles.main}>
			<article className={`${isMounted?styles.mounted:styles.unmounted}`}>
				<section className={styles.image}>
					<img
						src={destinaData.images.png}
						alt="error"
					/>
				</section>
				<section className={styles.content}>
					<nav className={styles.destination_nav}>
						<ul>
                        {
                            ['moon', 'mars', 'europa', 'titan'].map((item, index) => (
                                <li
                                    key={index}
                                >
                                    <div
                                        className={`${destinaData.name.toLowerCase()===item?styles.active:''}`}
                                        onClick={() => {
                                            setIsMounted(false)
                                            setTimeout(() => {
                                                navigate(`/destination/${item}`)
                                                setIsMounted(true)
                                            }, 600);
                                        }}
                                    >
                                        <div className="nav-text">
                                            {item.toUpperCase()}
                                        </div>
                                    </div>
                                    {/* <NavLink 
                                        to={`/destination/${item}`}
                                        className={({isActive, isPending}) => 
                                            isPending ? styles.pending : isActive ? styles.active : ""
                                        }
                                    >
                                        <div className="nav-text">
                                            {item.toUpperCase()}
                                        </div>
                                    </NavLink> */}
                                </li>
                            ))
                        }
						</ul>
					</nav>
					<Heading 
                        h='2' 
                        className={styles.name}
                    >
                        {destinaData.name}
                    </Heading>
					<p className={styles.description + ' body-text'}>
						{destinaData.description}
					</p>
					<hr />
					<div className={styles.infor}>
						<div className={styles.type}>
							<SubHeading sh='2'>AVG. DISTANCE</SubHeading>
							<SubHeading sh='1'>{destinaData.distance}</SubHeading>
						</div>
						<div className={styles.type}>
							<SubHeading sh='2'>Est. TRAVEL TIME</SubHeading>
							<SubHeading sh='1'>{destinaData.travel}</SubHeading>
						</div>
					</div>
				</section>
			</article>
		</main>
	);
};

export default Destination;

