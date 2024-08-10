// app/series/[name]/page.js
import Link from 'next/link';
import { getSeriesData, getAllSeries, getArtworksForSeries } from '@/app/util/portfolio';
import ArtworkWidget from '@/components/ArtworkWidget';
import styles from './styles.module.css';

export async function generateStaticParams() {
    const allSeries = getAllSeries();
    return allSeries.map(series => ({
        name: series.name,
    }));
}

export default function Series({ params }) {
    const seriesName = decodeURIComponent(params.id);
    const seriesInfo = getSeriesData(seriesName);
    const seriesArtworks = getArtworksForSeries(seriesName);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Series: {seriesName}</h1>
            {seriesInfo && (
                <>
                    {/*<p className={styles.count}>Artworks in this series: {seriesInfo.count}</p>*/}
                    <p className={styles.description}>{seriesInfo.description}</p>
                </>
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
