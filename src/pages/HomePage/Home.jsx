import { Heading } from '../../components/Heading/Heading'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import styles from './home.module.scss'
const Home = () => {
    return (
        <DefaultLayout>
            <main className={styles.main}>
                <article className={styles.content}>
                    <Heading 
                        h='5'
                        className={styles.intro}
                    >SO, YOU WANT TO TRAVEL TO </Heading>
                    <Heading 
                        h='1'
                        className={styles.name}    
                    >SPACE</Heading>
                    <p className='body-text'>
                        Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we`&lsquo;ll give you a truly out of this world experience!
                    </p>
                </article>
                <div className={styles.cover}>
                    <button className={styles.child}  >
                        <Heading 
                            h='4'
                        >
                            EXPLORE
                        </Heading>
                    </button>
                </div>
            </main>
        </DefaultLayout>
    )
}
export default Home