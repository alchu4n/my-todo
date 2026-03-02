import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  total: number;
  done: number;
}

export function ProgressBar({ total, done }: ProgressBarProps) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.labels}>
        <span>Completion</span>
        <span className={styles.pct}>{pct}%</span>
      </div>
    </div>
  );
}
