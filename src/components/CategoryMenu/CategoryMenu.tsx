import type { Category } from '../../types';
import styles from './CategoryMenu.module.css';

interface CatOption {
  value: Category;
  label: string;
}

interface CategoryMenuProps {
  cats: CatOption[];
  onSelect: (cat: Category) => void;
}

export function CategoryMenu({ cats, onSelect }: CategoryMenuProps) {
  return (
    <div className={styles.menu}>
      {cats.map((c) => (
        <div
          key={String(c.value)}
          className={styles.item}
          onClick={() => onSelect(c.value)}
        >
          {c.label}
        </div>
      ))}
    </div>
  );
}
