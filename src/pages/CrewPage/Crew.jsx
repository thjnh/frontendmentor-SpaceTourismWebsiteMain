import { NavLink } from "react-router-dom";
import styles from "./crew.module.scss";
import { Heading } from "../../components/Heading/Heading";

function Crew({ crewData }) {
	return (
		<main className={styles.main}>
			<section className={styles.left}>
				<div className={styles.content}>
					<Heading h='4' className={styles.role}>{crewData.role}</Heading>
					<Heading h='3' className={styles.name}>{crewData.name}</Heading>
					<p className={styles.bio + ' body-text'}>{crewData.bio}</p>
				</div>
				<ul className={styles.select}>
                {
                    ['commander', 'mission-specialist', 'pilot', 'flight-engineer'].map((item, index) => (
                        <li
                            key={index}
                        >
                            <NavLink
                                to={`/crew/${item}`}
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? styles.pending
                                        : isActive
                                            ? styles.active
                                            : ""
                                }
                            >
                            </NavLink>      
                        </li>
                    ))
                }
				</ul>
			</section>
			<section className={styles.image}>
				<img
					src={crewData.images.png}
					alt="image"
				/>
			</section>
		</main>
	);
}
export default Crew;
