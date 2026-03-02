import type { FilterType } from '../../types';
import styles from './FilterTabs.module.css';

interface FilterTabsProps {
  filter: FilterType;
  allCount: number;
  activeCount: number;
  doneCount: number;
  onFilterChange: (f: FilterType) => void;
}

export function FilterTabs({ filter, allCount, activeCount, doneCount, onFilterChange }: FilterTabsProps) {
  return (
    <nav className={styles.filters}>
      <button
        className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All <span className={styles.badge}>{allCount}</span>
      </button>
      <button
        className={`${styles.filterBtn} ${filter === 'active' ? styles.active : ''}`}
        onClick={() => onFilterChange('active')}
      >
        Active <span className={styles.badge}>{activeCount}</span>
      </button>
      <button
        className={`${styles.filterBtn} ${filter === 'done' ? styles.active : ''}`}
        onClick={() => onFilterChange('done')}
      >
        Done <span className={styles.badge}>{doneCount}</span>
      </button>
    </nav>
  );
}
