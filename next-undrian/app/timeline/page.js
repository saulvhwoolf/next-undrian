// app/timeline/page.js
import { getAllArtworksForTimeline } from '@/app/util/portfolio';
import ArtworkWidget from '@/components/ArtworkWidget';
import styles from './styles.module.css';

export default function Timeline() {
    const artworks = getAllArtworksForTimeline();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Artist Timeline</h1>
            <div className={styles.timeline}>
                {artworks.map((artwork, index) => (
                    <div key={artwork.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.right : styles.left}`}>
                        <div className={styles.content}>
                            <ArtworkWidget artwork={artwork} />
                        </div>
                        <div className={styles.date}>
                            {artwork.date.year}
                            {artwork.date.month && `-${artwork.date.month}`}
                            {artwork.date.day && `-${artwork.date.day}`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
