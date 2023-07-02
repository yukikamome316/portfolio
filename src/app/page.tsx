import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { SocialList } from '@/ui/feature/account/socialList';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.profileContainer}>
        <Image
          src="/Cinnamoroll_integrated_512px.jpg"
          alt="Profile"
          width={350}
          height={350}
          style={{
            objectFit: 'cover',
            borderRadius: '50%',
            userSelect: 'none',
          }}
        />
        <div className={styles.profileContent}>
          <div className={styles.profileText}>
            <p className={styles.nameText}>Yuki</p>
            <p className={styles.usernameText}>yukikamome316</p>
          </div>
          <hr className={styles.line}/>
          <div className={styles.contentRight}>
            <div className={styles.line}></div>
            <SocialList />
          </div>
        </div>
      </div>

      <div className={styles.buttonsList}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/about" className={styles.navLink} passHref>
              About
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/blog" className={styles.navLink} passHref>
              Blog
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/contact" className={styles.navLink} passHref>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}