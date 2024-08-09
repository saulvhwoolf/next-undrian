// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioData } from '@/app/util/portfolio';
import styles from './page.module.css';
import ArtCarousel from "@/components/ArtCarousel";

export default function Home() {
    const portfolioData = getPortfolioData();
    const allImages = portfolioData.pieces.flatMap(piece => [piece.previewUrl, ...(piece.images || [])]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{portfolioData.artist.name}</h1>
            <p className={styles.bio}>{portfolioData.artist.bio}</p>

            <div className={styles.content}>
                <div className={styles.seriesSection}>
                    <h2 className={styles.sectionTitle}>Series</h2>
                    <div className={styles.seriesGrid}>
                        {portfolioData.series.map((seriesName) => {
                            const seriesImage = portfolioData.pieces.find(piece => piece.series === seriesName)?.previewUrl;
                            return (
                                <Link href={`/series/${encodeURIComponent(seriesName)}`} key={seriesName} className={styles.seriesLink}>
                                    <div className={styles.seriesCard}>
                                        <Image
                                            src={seriesImage || '/placeholder.jpg'}
                                            alt={seriesName}
                                            width={300}
                                            height={200}
                                            className={styles.seriesImage}
                                        />
                                        <h3 className={styles.seriesName}>{seriesName}</h3>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.carouselSection}>
                    <ArtCarousel images={allImages} />
                </div>
            </div>
        </div>
    );
}
