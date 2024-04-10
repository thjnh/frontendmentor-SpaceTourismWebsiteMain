import { NavLink } from "react-router-dom";
import styles from "./technology.module.scss";
import { Heading } from "../../components/Heading/Heading";

function Technology({techData}) {
    const linkData = [
        {
            id: '1',
            name: 'launch-vehicle'
        },
        {
            id: '2',
            name: 'spaceport'
        },
        {
            id: '3',
            name: 'space-capsule'
        },
    ]
	return (
        <main className={styles.container}>
            <nav className={styles.select}>
            {
                linkData.map((item, index) => (
                    <NavLink
                        key={index}
                        to={`/technology/${item.name}`}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? styles.pending
                                : isActive
                                    ? styles.active
                                    : ""
                        }
                    >
                        <Heading h='4' className={styles.number}>{item.id}</Heading>
                    </NavLink>
                ))
            }
            </nav>
            <section className={styles.content}>
                <div className='nav-text'>THE TERMINOLOGY...</div>
                <Heading
                    h='3'
                    className={styles.name}
                >
                    {techData.name}
                </Heading>
                <div className={styles.description + ' body-text'}>
                    {techData.description}
                </div>
            </section>
            <section className={styles.image}>
                <img 
                    src={techData.images.portrait} 
                    alt="" 
                />
            </section>
        </main>
    )

}
export default Technology;
