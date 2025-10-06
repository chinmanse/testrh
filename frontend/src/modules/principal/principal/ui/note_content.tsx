import React, { useState } from 'react';
import "src/assets/css/note_content.css"

interface NoteContentProps {
  note?: {
    id: number;
    title: string;
    category: string;
    tags: string;
    date: string;
    content?: string;
  };
}

const NoteContent: React.FC<NoteContentProps> = ({ note }) => {
  const [tagsCompleted, setTagsCompleted] = useState(false);
  const [lastEditedCompleted, setLastEditedCompleted] = useState(true);

  const defaultNote = {
    id: 1,
    title: "React Performance Optimization",
    category: "Day",
    tags: "Dev, React",
    date: "29 Oct 2024",
    content: `Key performance optimization techniques:

1. Code Splitting  
   - Use React.lazy() for route-based splitting  
   - Implement dynamic imports for heavy components  

2. Memoization  
   - useMemo for expensive calculations  
   - useCallback for function props  
   - React.memo for component optimization  

3. Virtual List Implementation  
   - Use react-window for long lists  
   - Implement infinite scrolling

TODO: Benchmark current application and identify bottlenecks`
  };

  const currentNote = note || defaultNote;

  const toggleTagsCompletion = () => {
    setTagsCompleted(!tagsCompleted);
  };

  const toggleLastEditedCompletion = () => {
    setLastEditedCompleted(!lastEditedCompleted);
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)?.[0].length || 1;
        const text = line.replace(/^#+\s*/, '');
        return React.createElement(`h${level}`, { key: index, className: 'content-heading' }, text);
      }

      if (line.match(/^\d+\.\s/)) {
        const text = line.replace(/^\d+\.\s*/, '');
        return (
          <div key={index} className="numbered-item">
            <span className="number">{line.match(/^\d+/)?.[0]}.</span>
            <span className="text">{text}</span>
          </div>
        );
      }

      if (line.startsWith('   - ')) {
        const text = line.replace(/^\s*-\s*/, '');
        return (
          <div key={index} className="bullet-item">
            <span className="bullet">•</span>
            <span className="text">{text}</span>
          </div>
        );
      }

      if (line.startsWith('TODO:')) {
        const text = line.replace(/^TODO:\s*/, '');
        return (
          <div key={index} className="todo-section">
            <strong>TODO:</strong> {text}
          </div>
        );
      }

      if (line.startsWith('---')) {
        return <hr key={index} className="content-divider" />;
      }

      if (line.trim() === '') {
        return <br key={index} />;
      }

      return <p key={index} className="content-paragraph">{line}</p>;
    });
  };

  return (
    <div className="note-content">
      <div className="note-header">
        <h1 className="note-title">{currentNote.title}</h1>
        <div className="note-metadata">
          <div className="metadata-item">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={tagsCompleted}
                onChange={toggleTagsCompletion}
                className="metadata-checkbox"
              />
              <span className="checkmark"></span>
              <span className="metadata-text">
                <strong>Tags</strong> {currentNote.tags}
              </span>
            </label>
          </div>

          <div className="metadata-item">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={lastEditedCompleted}
                onChange={toggleLastEditedCompletion}
                className="metadata-checkbox"
              />
              <span className="checkmark"></span>
              <span className="metadata-text">
                <strong>Last edited</strong> {currentNote.date}
              </span>
            </label>
          </div>
        </div>

        <hr className="content-divider" />
      </div>

      <div className="note-body">
        {formatContent(currentNote.content || '')}
      </div>

    </div>
  );
};

export default NoteContent;