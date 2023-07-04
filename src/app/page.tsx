import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { SocialList } from '@/ui/feature/account/socialList';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headContainer}>
        <div className={styles.profileContainer}>
          <Image
            src="/Cinnamoroll_integrated_512px.jpg"
            alt="Profile"
            width={300}
            height={300}
            className={styles.profileImage}
            loading="eager"
          />
          <div className={styles.profileContent}>
            <div className={styles.profileText}>
              <p className={styles.nameText}>Yuki</p>
              <p className={styles.usernameText}>yukikamome316</p>
            </div>
            <hr className={styles.line}/>
            <div className={styles.line}></div>
            <div className={styles.socialList}>
              <SocialList />
            </div> 
          </div>
        </div>
        
        <div className={styles.buttonsList}>
          <hr className={styles.lineBottom}/>
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
      </div>
    </main>
  );
}