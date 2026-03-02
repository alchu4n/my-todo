import { getChineseDate, getEnglishDate } from './utils';

export type Lang = 'zh' | 'en';

export const T = {
  zh: {
    pending:      (n: number) => `${n} 待完成`,
    placeholder:  '添加新任务...',
    priority:     '优先级',
    category:     '分类',
    addHint:      '↵ 添加',
    sectionLabel: '任务列表',
    empty:        '这里还什么都没有。',
    prio:  { high: '高', medium: '中', low: '低' } as Record<string, string>,
    cat:   { work: '工作', personal: '个人', errands: '差事', ideas: '想法' } as Record<string, string>,
    cats: [
      { value: 'work'     as const, label: '工作' },
      { value: 'personal' as const, label: '个人' },
      { value: 'errands'  as const, label: '差事' },
      { value: 'ideas'    as const, label: '想法' },
      { value: null,                label: '无'   },
    ],
    getDate: () => getChineseDate(),
  },
  en: {
    pending:      (n: number) => `${n} pending`,
    placeholder:  'Add a task...',
    priority:     'Priority',
    category:     'Category',
    addHint:      '↵ Add',
    sectionLabel: 'Task list',
    empty:        'Nothing here yet.',
    prio:  { high: 'High', medium: 'Mid', low: 'Low' } as Record<string, string>,
    cat:   { work: 'Work', personal: 'Personal', errands: 'Errands', ideas: 'Ideas' } as Record<string, string>,
    cats: [
      { value: 'work'     as const, label: 'Work'     },
      { value: 'personal' as const, label: 'Personal' },
      { value: 'errands'  as const, label: 'Errands'  },
      { value: 'ideas'    as const, label: 'Ideas'    },
      { value: null,                label: 'None'     },
    ],
    getDate: () => getEnglishDate(),
  },
};
