import React from 'react';
import "src/assets/css/note_list.css"

interface Note {
  id: number;
  title: string;
  category: string;
  tags: string;
  date: string;
}


const NoteListComponent: React.FC = () => {
  const initialNotes: Note[] = [
    {
      id: 1,
      title: "React Performance Optimization",
      category: "Day",
      tags: "React",
      date: "29 Oct 2024"
    },
    {
      id: 2,
      title: "Japan Travel Planning",
      category: "Travel",
      tags: "Personal",
      date: "28 Oct 2024"
    },
    {
      id: 3,
      title: "Favorite Pasta Recipes",
      category: "Cooking",
      tags: "Recipes",
      date: "27 Oct 2024"
    },
    {
      id: 4,
      title: "Weekly Workout Plan",
      category: "Day",
      tags: "React",
      date: "25 Oct 2024"
    },
    {
      id: 5,
      title: "Meal Prep Ideas",
      category: "Cooking",
      tags: "Health Recipes",
      date: "12 Oct 2024"
    },
    {
      id: 6,
      title: "Reading List",
      category: "Personal",
      tags: "Dity",
      date: "05 Oct 2024"
    },
    {
      id: 7,
      title: "Fitness Goals 2025",
      category: "Fitness",
      tags: "Health Personal",
      date: "22 Sep 2024"
    }
  ];

  const getCategoryClass = (category: string): string => {
    const categoryClasses: { [key: string]: string } = {
      'Day': 'category-day',
      'Travel': 'category-travel',
      'Cooking': 'category-cooking',
      'Personal': 'category-personal',
      'Fitness': 'category-fitness'
    };
    return categoryClasses[category] || 'category-default';
  };

  return (
    <div className="notes-container">
      <div className="new-note-section">
        <button className="new-note-btn">+ Create New Note</button>
      </div>

      <div className="notes-list">
        {initialNotes.map((note: Note) => (
          <div key={note.id} className="note-card">
            <div className="note-header">
              <h3 className="note-title-list">{note.title}</h3>
            </div>
            <div className="note-meta">
              <span className={`category-tag ${getCategoryClass(note.category)}`}>
                {note.category}
              </span>
              <span className="tags">{note.tags}</span>
            </div>
            <div className="note-meta">
              <span className="note-date">{note.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteListComponent;