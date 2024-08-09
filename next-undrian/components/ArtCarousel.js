// components/Carousel.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ArtCarousel.module.css';

export default function Carousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={styles.carousel}>
            <div className={styles.imageWrapper}>
                <Image
                    src={images[currentImageIndex]}
                    alt="Artwork preview"
                    layout="fill"
                    objectFit="cover"
                    className={styles.carouselImage}
                />
            </div>
        </div>
    );
}
