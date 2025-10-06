import React, { useState } from "react";
import Sidebar from "../../modules/principal/principal/ui/sidebar";
import "src/assets/css/principal.css"

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Principal: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "React Performance Optimization",
      content: `1. Code Splitting
- Use React.lazy for route-based splitting
- Dynamic imports for heavy modules

2. Memoization
- Use React.memo and useMemo to avoid re-renders

3. Virtualization
- Use react-window or react-virtualized for lists

4. Avoid anonymous functions in render`,
      date: "Oct 06, 2025",
    },
    {
      id: 2,
      title: "Japan Travel Planning",
      content: "- Book flights\n- Reserve hotel\n- Prepare itinerary",
      date: "Oct 03, 2025",
    },
  ]);

  const [selectedNote, setSelectedNote] = useState<Note | null>(notes[0]);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <Sidebar />

      </aside>

      {/* Notes List */}
      <section className="notes-list">
        <button className="new-note-btn">+ Create New Note</button>

        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              className={`note-item ${
                selectedNote?.id === note.id ? "selected" : ""
              }`}
              onClick={() => setSelectedNote(note)}
            >
              <h4>{note.title}</h4>
              <p>{note.date}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Note Content */}
      <main className="note-content">
        {selectedNote ? (
          <>
            <h2>{selectedNote.title}</h2>
            <p className="note-date">{selectedNote.date}</p>
            <textarea
              value={selectedNote.content}
              onChange={(e) =>
                setSelectedNote({ ...selectedNote, content: e.target.value })
              }
            />
            <div className="note-actions">
              <button className="save-btn">Save Note</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </>
        ) : (
          <p>Select a note to view or edit</p>
        )}
      </main>
    </div>
  );
};

export default Principal;