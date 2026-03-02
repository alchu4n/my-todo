import { useState } from 'react';
import type { Task } from '../../types';
import type { Lang } from '../../i18n';
import { T } from '../../i18n';
import { fmtTime } from '../../utils';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  lang: Lang;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, lang, onToggle, onDelete }: TaskItemProps) {
  const [removing, setRemoving] = useState(false);
  const t = T[lang];

  function handleDelete() {
    setRemoving(true);
    setTimeout(() => onDelete(task.id), 230);
  }

  const itemClass = [
    styles.taskItem,
    task.done ? styles.done : '',
    task.prio ? styles[task.prio] : '',
    removing ? styles.removing : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={itemClass}>
      <div
        className={`${styles.check} ${task.done ? styles.on : ''}`}
        onClick={() => onToggle(task.id)}
      />
      <div className={styles.taskBody}>
        <div className={styles.taskText}>{task.text}</div>
        <div className={styles.taskMeta}>
          {task.prio && (
            <span className={`${styles.metaTag} ${styles.prio}`}>
              <span className={styles.metaDot} />
              {t.prio[task.prio]}
            </span>
          )}
          {task.cat && (
            <span className={`${styles.metaTag} ${styles.metaCat}`}>
              {t.cat[task.cat] ?? task.cat}
            </span>
          )}
          <span className={styles.metaTime}>{fmtTime(task.at)}</span>
        </div>
      </div>
      <div className={styles.taskActions}>
        <button className={`${styles.actBtn} ${styles.del}`} onClick={handleDelete} title="×">
          ×
        </button>
      </div>
    </div>
  );
}
