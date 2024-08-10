// app/artwork/[id]/page.js
import Image from 'next/image';
import {getArtworkData, getAllArtworkIds, getNextAndPreviousArtwork} from '@/app/util/portfolio';
import Link from "next/link";
import styles from './styles.module.css';

const POEM_LENGTH_THRESHOLD = 500;

export async function generateStaticParams() {
    const paths = getAllArtworkIds();
    return paths;
}

export default function Artwork({params}) {
    const artwork = getArtworkData(params.id);
    const {next, previous, currentSeries} = getNextAndPreviousArtwork(params.id);

    const hasAudio = !!artwork.audio_url;
    const hasVideo = !!artwork.video_url;
    const mediaCount = (artwork.images?.length || 0) + (hasVideo ? 1 : 0);
    const isLongPoem = artwork.poem && artwork.poem.length > POEM_LENGTH_THRESHOLD;


    const mediaElements = []
    if (hasVideo) {
        const video_url = artwork.video_url
        const url_parts = video_url.split("/")
        const video_id = url_parts[url_parts.length-1]
        mediaElements.push(<>
            <iframe src={`https://player.vimeo.com/video/${video_id}`} width="600" height="400"
                    frameBorder="0" style={{ gridColumn: "span 2"}} allow="fullscreen" allowFullScreen></iframe>

            {/*<video style={{ gridColumn: "span 2"}} controls src={artwork.video_url} width={"100%"}/>*/}
        </>)
    }


    for (let i = 0; i < artwork.images?.length; i++) {
        mediaElements.push(<>
            <img key={i} src={artwork.images[i].replace("http://undrian.com/", "/proxy-images/").replace("https://storage.googleapis.com/", "/proxy-images2/")}
                 alt={`${artwork.name} - Photo ${i + 1}`}
                 style={{gridColumn: (mediaCount==1?"span 2":"span 1")}}
                 // style={{gridColumn: (mediaCount==1?"span 2":"span 1")}}
            />
        </>)
    }


    return (
        <div className={`${styles.container}`}>
            <div className={styles.infoSection}>
                <div>

                    <p className={styles.seriesInfo}>
                        Series: <Link href={`/series/${encodeURIComponent(currentSeries)}`}>{currentSeries}</Link>
                    </p>

                    <h1 className={styles.title}>
                        {artwork.name} ({artwork.date.year})
                    </h1>

                    <p className={styles.description}>{artwork.description}</p>


                    <div className={styles.mediaSection}>
                        <div className={styles.pictureGrid}>
                            {mediaElements.map((mediaElement, index) => (mediaElement))}
                        </div>
                    </div>

                    {hasAudio && (
                        <div className={styles.audioPlayer}>
                            <iframe width="100%" height="100" scrolling="no" frameBorder="no"
                                    src={`https://w.soundcloud.com/player/?url=${artwork.audio_url}&amp;auto_play=false&amp;hide_related=false&amp;show_user=true&amp;&amp;visual=false`}></iframe>

                        </div>
                    )}
                </div>

                {artwork.poem && (
                    <div className={styles.poemSection}>

                        {artwork.poem.split("\n").map((line, i) => (<p key={"poem_" + i}>| {line}</p>))}
                    </div>
                )}

            </div>


            <div className={styles.navigation}>
                <Link href={`/artwork/${previous.id}`} className={styles.navButton}>
                    &larr; Previous
                    <br/>
                    <span className={styles.navInfo}>
                        <i>{previous.series} |</i> <b>{previous.name}</b>
                    </span>
                </Link>

                <Link href={`/artwork/${next.id}`} className={styles.navButton}>
                    Next &rarr;
                    <br/>

                    <span className={styles.navInfo}>
                        <i>{next.series} |</i> <b>{next.name}</b>
                    </span>
                </Link>
            </div>
        </div>
    );
}
