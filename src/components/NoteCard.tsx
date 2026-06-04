import type { Note } from "../types";

interface NoteCardProp {
    note: Note
    onDelete: (id: string) => void
}

export default function NoteCard({ note, onDelete }: NoteCardProp) {
    
    function handleDelete() {
        onDelete(note.id)
    }
    // Display the note
    return (
        <div className="bg-gray-800 px-4 py-2 flex flex-col text-white rounded-xl hover:opacity-90">
            <h2 className="text-xl">{note.title}</h2>
            <p className="text-gray-400 mb-4">{note.type}</p>
            <p className="text-sm">{note.body}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
} 