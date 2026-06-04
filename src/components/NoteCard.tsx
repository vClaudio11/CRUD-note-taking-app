import type { Note } from "../types";

interface NoteCardProp {
    note: Note
}

export default function NoteCard({ note }: NoteCardProp) {
    
    // Display the note
    return (
        <div>
            <h2 className="">{note.title}</h2>
            <p className="">{note.type}</p>
            <p className="">{note.body}</p>
        </div>
    )
} 