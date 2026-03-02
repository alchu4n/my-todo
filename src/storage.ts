import type { Task } from './types';
import type { Lang } from './i18n';

const KEY = 'tasks_v2';

export function loadTasks(): Task[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]') as Task[];
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}

export function loadLang(): Lang {
  return (localStorage.getItem('lang') as Lang) ?? 'zh';
}

export function saveLang(lang: Lang): void {
  localStorage.setItem('lang', lang);
}
