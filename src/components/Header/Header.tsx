import type { Lang } from '../../i18n';
import { T } from '../../i18n';
import styles from './Header.module.css';

interface HeaderProps {
  pendingCount: number;
  lang: Lang;
}

export function Header({ pendingCount, lang }: HeaderProps) {
  const t = T[lang];
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h1 className={styles.title}>
          TA<span className={styles.titleS}>S</span>KS
        </h1>
        <div className={styles.headerMeta}>
          <div className={styles.dateDisplay}>{t.getDate()}</div>
          <div className={styles.pendingCount}>{t.pending(pendingCount)}</div>
        </div>
      </div>
      <div className={styles.headerRule} />
    </header>
  );
}
