import type { Note } from "../types";

interface NoteCardProp {
    note: Note
}

export default function NoteCard({ note }: NoteCardProp) {
    
    // Display the note
    return (
        <div className="bg-gray-800 px-4 py-2 flex flex-col text-white rounded-xl hover:opacity-90">
            <h2 className="text-xl">{note.title}</h2>
            <p className="text-gray-400 mb-4">{note.type}</p>
            <p className="text-sm">{note.body}</p>
        </div>
    )
} 