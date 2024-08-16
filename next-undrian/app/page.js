// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioData } from '@/app/util/portfolio';
import styles from './page.module.css';
import Gallery from "@/components/Gallery";

function getYearRange(pieces) {
    const years = pieces.map(piece => piece.date.year).filter(year => year);
    if (years.length === 0) return '';
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    if (minYear === maxYear) return `(${minYear.toString().slice(-2)})`;
    return `(${minYear.toString().slice(-2)}-${maxYear.toString().slice(-2)})`;
}


export default async function  Home() {
    const portfolioData = getPortfolioData();


    // Process series data
    const seriesWithYearRange = portfolioData.series.map(seriesInfo => {
        const seriesPieces = portfolioData.pieces.filter(piece => piece.series === seriesInfo.name);
        const yearRange = getYearRange(seriesPieces);
        const latestYear = Math.max(...seriesPieces.map(piece => piece.date.year).filter(year => year));
        const previewImage = portfolioData.pieces.find(piece => piece.series === seriesInfo.name)?.previewImage;
        return { ...seriesInfo, yearRange, latestYear, previewImage };
    });

    // Sort series by latest year, then by name
    const sortedSeries = seriesWithYearRange.sort((a, b) => {
        if (b.latestYear !== a.latestYear) return b.latestYear - a.latestYear;
        return a.name.localeCompare(b.name);
    });

    return (
        <div className={styles.container}>
            {/*<h1 className={styles.title}>{portfolioData.artist.name}</h1>*/}
            {/*<p className={styles.bio}>{portfolioData.artist.bio}</p>*/}
            <div className={styles.content}>
                <div className={styles.seriesSection}>
                    <h2 className={styles.sectionTitle}>Series</h2>
                    <div className={styles.seriesGrid}>
                        {sortedSeries.map((seriesInfo) => (
                            <Link href={`/series/${encodeURIComponent(seriesInfo.name)}`} key={seriesInfo.name} className={styles.seriesLink}>
                                <div className={styles.seriesCard}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={seriesInfo.previewImage || '/placeholder.jpg'}
                                            alt={seriesInfo.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className={styles.seriesImage}
                                        />
                                    </div>
                                    <div className={styles.seriesInfo}>
                                        <h3 className={styles.seriesName}>
                                            {seriesInfo.name} <span className={styles.yearRange}>{seriesInfo.yearRange}</span>
                                        </h3>
                                        <p className={styles.seriesCount}>Artworks: {seriesInfo.count}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
