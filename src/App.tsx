import { useState } from 'react';
import type { Task, FilterType, Priority, Category } from './types';
import type { Lang } from './i18n';
import { loadTasks, saveTasks, loadLang, saveLang } from './storage';
import { Header } from './components/Header/Header';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { FilterTabs } from './components/FilterTabs/FilterTabs';
import { TaskInput } from './components/TaskInput/TaskInput';
import { TaskList } from './components/TaskList/TaskList';
import { LanguageToggle } from './components/LanguageToggle/LanguageToggle';
import styles from './App.module.css';

export function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);
  const [filter, setFilter] = useState<FilterType>('all');
  const [lang, setLang] = useState<Lang>(loadLang);

  const doneCount   = tasks.filter((t) => t.done).length;
  const activeCount = tasks.length - doneCount;

  const visibleTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'done')   return t.done;
    return true;
  });

  function addTask(text: string, prio: Priority, cat: Category) {
    const next: Task[] = [
      { id: Date.now().toString(), text, done: false, prio, cat, at: new Date().toISOString() },
      ...tasks,
    ];
    setTasks(next);
    saveTasks(next);
  }

  function toggleTask(id: string) {
    const next = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    setTasks(next);
    saveTasks(next);
  }

  function deleteTask(id: string) {
    const next = tasks.filter((t) => t.id !== id);
    setTasks(next);
    saveTasks(next);
  }

  function toggleLang() {
    const next: Lang = lang === 'zh' ? 'en' : 'zh';
    setLang(next);
    saveLang(next);
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  }

  return (
    <div className={styles.app}>
      <LanguageToggle lang={lang} onToggle={toggleLang} />
      <Header pendingCount={activeCount} lang={lang} />
      <ProgressBar total={tasks.length} done={doneCount} />
      <FilterTabs
        filter={filter}
        allCount={tasks.length}
        activeCount={activeCount}
        doneCount={doneCount}
        onFilterChange={setFilter}
      />
      <TaskInput lang={lang} onAdd={addTask} />
      <TaskList tasks={visibleTasks} lang={lang} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}
