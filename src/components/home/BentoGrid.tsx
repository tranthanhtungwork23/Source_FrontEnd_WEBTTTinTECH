import React from 'react';
import GlassCard from '../ui/GlassCard';
import styles from './BentoGrid.module.css';

const BentoGrid = () => {
    return (
        <div className={styles.grid}>
            {/* Featured Main Article - Large */}
            <GlassCard className={`${styles.card} ${styles.hero}`} variant="glowing">
                <div className={styles.imageOverlay} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1614728853913-1e3258af70d7?q=80&w=2070&auto=format&fit=crop)' }}></div>
                <div className={styles.content}>
                    <span className={styles.tag}>FEATURED</span>
                    <h2 className={styles.headline}>NEURALINK'S NEXT LEAP: BRAIN-MACHINE INTERFACE UNVEILED</h2>
                    <p className={styles.excerpt}>Musk's vision for seamless human-AI integration takes a giant step forward. Full report and analysis.</p>
                    <button className={styles.readMore}>READ MORE</button>
                </div>
            </GlassCard>

            {/* Secondary Articles */}
            <GlassCard className={`${styles.card} ${styles.secondary1}`} variant="glowing">
                <div className={styles.imageOverlay} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop)' }}></div>
                <div className={styles.content}>
                    <h3 className={styles.subHeadline}>QUANTUM COMPUTING EXASCALE BARRIER</h3>
                    <button className={styles.readMoreSm}>READ MORE</button>
                </div>
            </GlassCard>

            <GlassCard className={`${styles.card} ${styles.secondary2}`} variant="glowing">
                <div className={styles.imageOverlay} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)' }}></div>
                <div className={styles.content}>
                    <h3 className={styles.subHeadline}>INTERSTELLAR MINING</h3>
                    <button className={styles.readMoreSm}>READ MORE</button>
                </div>
            </GlassCard>

            {/* Sustainable Tech - Wide */}
            <GlassCard className={`${styles.card} ${styles.wide}`} variant="glowing">
                <div className={styles.imageOverlay} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop)' }}></div>
                <div className={styles.content}>
                    <h3 className={styles.headline}>SUSTAINABLE TECH: POWERING THE FUTURE WITH BIO-BATTERIES</h3>
                    <button className={styles.readMore}>READ MORE</button>
                </div>
            </GlassCard>
        </div>
    );
};

export default BentoGrid;
