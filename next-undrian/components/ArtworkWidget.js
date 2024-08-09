// components/ArtworkWidget.js
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtworkWidget.module.css';

export default function ArtworkWidget({ artwork }) {
    return (
        <div className={styles.widget}>
            <Link href={`/artwork/${artwork.id}`} className={styles.mainLink}>
                <Image
                    src={artwork.previewUrl}
                    alt={artwork.name}
                    width={300}
                    height={200}
                    className={styles.image}
                />
                <h3 className={styles.title}>{artwork.name}</h3>
                <p className={styles.date}>
                    {artwork.date.year}{artwork.date.month && `-${artwork.date.month}`}
                </p>
                <p className={styles.media}>{artwork.media}</p>
            </Link>
            <div className={styles.seriesLink}>
                <Link href={`/series/${encodeURIComponent(artwork.series)}`}>
                    Series: {artwork.series}
                </Link>
            </div>
        </div>
    );
}
