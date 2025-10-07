import React from 'react';
import "src/assets/css/actions.css"
import Achive from "src/assets/icons/archive.svg"
import Delete from "src/assets/icons/delete.svg"

interface NotesActionsPanelProps {
  onArchiveNote: () => void;
  onDeleteNote: () => void;
  selectedNote?: number | null;
}

const ActionsPanel: React.FC<NotesActionsPanelProps> = ({
  onArchiveNote,
  onDeleteNote,
  selectedNote
}) => {
  return (
    <div className="notes-actions-panel">
      {/* Header simple */}
      <div className="panel-header">
        <h2 className="panel-title">Actions</h2>
      </div>

      <div className="actions-section">
        <button
          className="action-btn"
          onClick={onArchiveNote}
          disabled={!selectedNote}
        >
          <img src={Achive} alt="Archive" className="action-icon" />
          Archive Note
        </button>

        <button
          className="action-btn"
          onClick={onDeleteNote}
          disabled={!selectedNote}
        >
          <img src={Delete} alt="Delete" className="action-icon" />
          Delete Note
        </button>
      </div>
    </div>
  );
};

export default ActionsPanel;