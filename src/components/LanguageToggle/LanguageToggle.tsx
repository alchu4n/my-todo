import type { Lang } from '../../i18n';
import styles from './LanguageToggle.module.css';

interface LanguageToggleProps {
  lang: Lang;
  onToggle: () => void;
}

export function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  return (
    <button className={styles.toggle} onClick={onToggle} aria-label="Toggle language">
      <span className={lang === 'zh' ? styles.active : styles.muted}>ZH</span>
      <span className={styles.sep}>·</span>
      <span className={lang === 'en' ? styles.active : styles.muted}>EN</span>
    </button>
  );
}
