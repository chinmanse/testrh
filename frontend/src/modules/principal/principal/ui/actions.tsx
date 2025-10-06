import React from 'react';
import "src/assets/css/actions.css"

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
          className="action-btn archive-btn"
          onClick={onArchiveNote}
          disabled={!selectedNote}
        >
          Archive Note
        </button>

        <button
          className="action-btn delete-btn"
          onClick={onDeleteNote}
          disabled={!selectedNote}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
};

export default ActionsPanel;