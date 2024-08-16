import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.headernav}>
            <Link href="/" className={styles.homelink}>
                Undrian
            </Link>
            <nav>
                <ul className={styles.navlist}>
                    <li>
                        <Link href="/gallery" className={styles.navlink}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={styles.navlink}>
                            Series
                        </Link>
                    </li>
                    <li>
                        <Link href="/timeline" className={styles.navlink}>
                            Timeline
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
