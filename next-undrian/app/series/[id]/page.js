// app/series/[name]/page.js
import Link from 'next/link';
import { getSeriesData, getAllSeries } from '@/app/util/portfolio';
import ArtworkWidget from '@/components/ArtworkWidget';
import styles from './styles.module.css';

export async function generateStaticParams() {
    const allSeries = getAllSeries();
    return allSeries.map(series => ({
        name: series,
    }));
}

export default function Series({ params }) {
    const seriesName = decodeURIComponent(params.id);
    const seriesArtworks = getSeriesData(seriesName);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Series: {seriesName}</h1>
            {seriesArtworks.length > 0 && (
                <p className={styles.description}>{seriesArtworks[0].description}</p>
            )}
            <div className={styles.grid}>
                {seriesArtworks.map(artwork => (
                    <ArtworkWidget key={artwork.id} artwork={artwork} />
                ))}
            </div>
            <Link href="/" className={styles.backLink}>
                Back to Home
            </Link>
        </div>
    );
}
