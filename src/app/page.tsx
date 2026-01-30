import BentoGrid from '@/components/home/BentoGrid';
import Sidebar from '@/components/home/Sidebar';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <section className={styles.mainFeed}>
                    <BentoGrid />
                </section>

                <aside className={styles.sidebarWrapper}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
