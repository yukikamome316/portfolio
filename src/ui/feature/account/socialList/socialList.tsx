import styles from './socialList.module.css';

import { SITE_CONFIG } from '@/constant/site';
import { GitHub, Twitter, Instagram } from '@/ui/icons';
import Link from 'next/link';

const socials = {
  github: {
    href: `https://github.com/${SITE_CONFIG.SOCIAL.GITHUB_ID}`,
    Icon: GitHub,
    id: SITE_CONFIG.SOCIAL.GITHUB_ID,
  },
  twitter: {
    href: `https://twitter.com/${SITE_CONFIG.SOCIAL.TWITTER_ID}`,
    Icon: Twitter,
    id: SITE_CONFIG.SOCIAL.TWITTER_ID,
  },
  instagram: {
    href: `https://instagram.com/${SITE_CONFIG.SOCIAL.INSTAGRAM_ID}`,
    Icon: Instagram,
    id: SITE_CONFIG.SOCIAL.INSTAGRAM_ID
  }
} as const;

const typedEntries = Object.entries as <T>(o: T) => [keyof T, T[keyof T]][];

interface Props {
  id?: boolean;
}

export const SocialList = ({ id = false }: Props) => (
  <div className={styles.socials}>
    {typedEntries(socials).map(([name, { href, Icon }]) => (
      <Link href={href} key={name} passHref aria-label={name} className={styles[name]}>
        <Icon className={styles.socialIcon} />
        {id && <span className={styles.socialId}>{socials[name].id}</span>}
      </Link>
    ))}
  </div>
);
