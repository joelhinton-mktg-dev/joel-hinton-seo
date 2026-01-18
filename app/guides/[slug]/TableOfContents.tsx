'use client';

import { useState, useEffect, useMemo } from 'react';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const extractTableOfContents = (content: string): TableOfContentsItem[] => {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ id, title, level });
  }

  return toc;
};

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const tableOfContents = useMemo(() => extractTableOfContents(content), [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="space-y-1">
      {tableOfContents.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`block w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
            item.level === 1 ? 'font-medium' : ''
          } ${
            item.level === 2 ? 'pl-4' : ''
          } ${
            item.level === 3 ? 'pl-6 text-xs' : ''
          } ${
            activeSection === item.id
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:text-foreground hover:bg-slate-100'
          }`}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}
