import type { Priority, Category } from './types';

const DAYS   = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

const EN_DAYS   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const EN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getChineseDate(): string {
  const now = new Date();
  return `${DAYS[now.getDay()]}，${MONTHS[now.getMonth()]} ${now.getDate()} 日`;
}

export function getEnglishDate(): string {
  const now = new Date();
  return `${EN_DAYS[now.getDay()]}, ${EN_MONTHS[now.getMonth()]} ${now.getDate()}`;
}

export function fmtTime(iso: string): string {
  const d = new Date(iso);
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

export const PRIO_LABELS: Record<string, string> = {
  high: '高',
  medium: '中',
  low: '低',
};

export const CAT_LABELS: Record<string, string> = {
  work: '工作',
  personal: '个人',
  errands: '差事',
  ideas: '想法',
};

export const PRIORITIES: Priority[] = [null, 'high', 'medium', 'low'];

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'work', label: '工作' },
  { value: 'personal', label: '个人' },
  { value: 'errands', label: '差事' },
  { value: 'ideas', label: '想法' },
  { value: null, label: '无' },
];
