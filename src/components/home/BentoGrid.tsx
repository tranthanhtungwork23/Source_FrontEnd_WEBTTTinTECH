import React from 'react';
import GlassCard from '../ui/GlassCard';
import styles from './BentoGrid.module.css';
import { Post } from '@/lib/get-posts';

interface BentoGridProps {
    posts: Post[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ posts }) => {
    // We map the first 4 posts to specific grid slots
    const [hero, sec1, sec2, wide] = posts;

    return (
        <div className={styles.grid}>
            {/* Featured Main Article - Large */}
            {hero && (
                <GlassCard className={`${styles.card} ${styles.hero}`} variant="glowing">
                    <div
                        className={styles.imageOverlay}
                        style={{ backgroundImage: `url(${hero.featuredImage?.node.sourceUrl || 'https://images.unsplash.com/photo-1614728853913-1e3258af70d7?q=80&w=2070&auto=format&fit=crop'})` }}
                    ></div>
                    <div className={styles.content}>
                        <span className={styles.tag}>FEATURED</span>
                        <h2 className={styles.headline} dangerouslySetInnerHTML={{ __html: hero.title }} />
                        <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: hero.excerpt }} />
                        <button className={styles.readMore}>READ MORE</button>
                    </div>
                </GlassCard>
            )}

            {/* Secondary Articles */}
            {sec1 && (
                <GlassCard className={`${styles.card} ${styles.secondary1}`} variant="glowing">
                    <div
                        className={styles.imageOverlay}
                        style={{ backgroundImage: `url(${sec1.featuredImage?.node.sourceUrl || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop'})` }}
                    ></div>
                    <div className={styles.content}>
                        <h3 className={styles.subHeadline} dangerouslySetInnerHTML={{ __html: sec1.title }} />
                        <button className={styles.readMoreSm}>READ MORE</button>
                    </div>
                </GlassCard>
            )}

            {sec2 && (
                <GlassCard className={`${styles.card} ${styles.secondary2}`} variant="glowing">
                    <div
                        className={styles.imageOverlay}
                        style={{ backgroundImage: `url(${sec2.featuredImage?.node.sourceUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'})` }}
                    ></div>
                    <div className={styles.content}>
                        <h3 className={styles.subHeadline} dangerouslySetInnerHTML={{ __html: sec2.title }} />
                        <button className={styles.readMoreSm}>READ MORE</button>
                    </div>
                </GlassCard>
            )}

            {/* Sustainable Tech - Wide */}
            {wide && (
                <GlassCard className={`${styles.card} ${styles.wide}`} variant="glowing">
                    <div
                        className={styles.imageOverlay}
                        style={{ backgroundImage: `url(${wide.featuredImage?.node.sourceUrl || 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop'})` }}
                    ></div>
                    <div className={styles.content}>
                        <h3 className={styles.headline} dangerouslySetInnerHTML={{ __html: wide.title }} />
                        <button className={styles.readMore}>READ MORE</button>
                    </div>
                </GlassCard>
            )}
        </div>
    );
};

export default BentoGrid;
