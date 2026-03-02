export type Priority = 'high' | 'medium' | 'low' | null;
export type Category = 'work' | 'personal' | 'errands' | 'ideas' | null;
export type FilterType = 'all' | 'active' | 'done';

export interface Task {
  id: string;
  text: string;
  done: boolean;
  prio: Priority;
  cat: Category;
  at: string;
}
