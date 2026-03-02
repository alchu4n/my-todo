import { useState, useEffect, useRef } from 'react';
import type { Priority, Category } from '../../types';
import { PRIORITIES } from '../../utils';
import type { Lang } from '../../i18n';
import { T } from '../../i18n';
import { CategoryMenu } from '../CategoryMenu/CategoryMenu';
import styles from './TaskInput.module.css';

interface TaskInputProps {
  lang: Lang;
  onAdd: (text: string, prio: Priority, cat: Category) => void;
}

export function TaskInput({ lang, onAdd }: TaskInputProps) {
  const [inputText, setInputText] = useState('');
  const [prioIdx, setPrioIdx] = useState(0);
  const [cat, setCat] = useState<Category>(null);
  const [catOpen, setCatOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = T[lang];
  const prio = PRIORITIES[prioIdx] ?? null;

  useEffect(() => {
    const close = () => setCatOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return;
    const text = inputText.trim();
    if (!text) return;
    onAdd(text, prio, cat);
    setInputText('');
    setPrioIdx(0);
    setCat(null);
  }

  function cyclePriority() {
    setPrioIdx((i) => (i + 1) % PRIORITIES.length);
  }

  function handleCatClick(e: React.MouseEvent) {
    e.stopPropagation();
    setCatOpen((o) => !o);
  }

  function pickCat(c: Category) {
    setCat(c);
    setCatOpen(false);
  }

  const prioClass = prio ? styles[prio] : '';
  const selectedCat = t.cats.find((c) => c.value === cat);
  const catLabel = selectedCat && cat !== null ? selectedCat.label : t.category;
  const prioLabel = prio ? t.prio[prio] : t.priority;

  return (
    <div className={styles.inputCard}>
      <div className={styles.inputRow}>
        <span className={styles.plus} onClick={() => inputRef.current?.focus()}>+</span>
        <input
          ref={inputRef}
          className={styles.taskInput}
          type="text"
          placeholder={t.placeholder}
          maxLength={200}
          autoComplete="off"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.toolbar}>
        <button className={`${styles.pillBtn} ${prioClass}`} onClick={cyclePriority}>
          <span className={styles.dot} />
          <span>{prioLabel}</span>
        </button>
        <div className={styles.catWrap}>
          <button className={styles.pillBtn} onClick={handleCatClick}>
            <span>{catLabel}</span>
          </button>
          {catOpen && <CategoryMenu cats={t.cats} onSelect={pickCat} />}
        </div>
        <span className={styles.hint}>{t.addHint}</span>
      </div>
    </div>
  );
}
