import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { SocialList } from '@/ui/feature/account/socialList';
import Timeline from '@/ui/timeline';

export default function Home() {
  return (
    <div className={styles.scrollWrap}>
      <section className={styles.snapContainer}>
        <div className={styles.headContainer}>
          <Image
            src="/Cinnamoroll_integrated_512px.jpg"
            alt="Profile"
            width={300}
            height={300}
            className={styles.profileImage}
            loading="eager"
            priority={true}
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
      </section>
      <section className={styles.snapContainer}>
        {/* <h1>Timeline</h1> */}
        <Timeline />
      </section>
    </div>
  );
}
