import type { Lang } from '../../i18n';
import { T } from '../../i18n';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  lang: Lang;
}

export function EmptyState({ lang }: EmptyStateProps) {
  return (
    <div className={styles.empty}>
      <div className={styles.glyph}>∅</div>
      <div className={styles.sub}>{T[lang].empty}</div>
    </div>
  );
}
