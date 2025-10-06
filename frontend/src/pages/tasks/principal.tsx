import React from "react";
import Sidebar from "../../modules/principal/principal/ui/sidebar";
import NoteListComponent from "../../modules/principal/principal/ui/note_list";
import NoteContent from "../../modules/principal/principal/ui/note_content";
import ActionsPanel from "../../modules/principal/principal/ui/actions";
import "src/assets/css/principal.css"

// interface Note {
//   id: number;
//   title: string;
//   content: string;
//   date: string;
// }

const Principal: React.FC = () => {
  // const [selectedNote, setSelectedNote] = useState<Note | null>(notes[0]);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <section className="notes-list">
        <NoteListComponent />
      </section>

      <main className="note-content">
        <NoteContent />
      </main>
      <main className="sidebar">
        <ActionsPanel 
          onArchiveNote={() => {}}
          onDeleteNote={() => {}}
          selectedNote = {1}
        />
      </main>
    </div>
  );
};

export default Principal;