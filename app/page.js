import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className='container'>
            <div className={styles.page}>
                <div className={styles.header}></div>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        A safe haven for all your <span>assets</span>
                    </h1>
                    <p>
                        With our advanced wallet support of over 125 blockchains
                        and protocols, storing all your crypto assets in one
                        place has never been more easy
                    </p>
                </div>
                <div className={styles.footer}>
                    <div className={styles.points}>
                        <div className={styles.active}></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Link href='/onboarding2' prefetch={true}>
                        Next
                    </Link>
                </div>
            </div>
        </div>
    );
}
