import type { Task } from '../../types';
import type { Lang } from '../../i18n';
import { T } from '../../i18n';
import { TaskItem } from '../TaskItem/TaskItem';
import { EmptyState } from '../EmptyState/EmptyState';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  lang: Lang;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, lang, onToggle, onDelete }: TaskListProps) {
  return (
    <div>
      <div className={styles.sectionLabel}>{T[lang].sectionLabel}</div>
      {tasks.length === 0 ? (
        <EmptyState lang={lang} />
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} lang={lang} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
