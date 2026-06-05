import { useState } from "react";
import type { Note, NoteType } from "../types";

interface NoteCardProp {
    note: Note
    onDelete: (id: string) => void
    onEdit: (note: Note) => void
}

export default function NoteCard({ note, onDelete, onEdit }: NoteCardProp) {
    const [isEditing, setIsEditing] = useState(false)
    const [card, setCard] = useState({ title: "", body: "", type: "work" })

    function handleDelete() {
        onDelete(note.id)
    }

    function handleEdit() {
        const updatedNote = {
            id: note.id,
            title: card.title,
            body: card.body,
            type: card.type as NoteType
        }    
        onEdit(updatedNote)
        setIsEditing(false)
    }

    function checkEdit() {
        setIsEditing(true)
        setCard({ title: note.title, body: note.body, type: note.type })
    }

    // Display the note
    return (
        <div className="border-2 border-gray-700 bg-gray-800 px-4 py-2 flex flex-col text-white rounded-xl">
            {isEditing ? (
                <div>
                    <textarea
                        className="text-xl w-full h-8"
                        value={card.title}
                        onChange={(e) => setCard({...card, title: e.target.value })}
                        placeholder="New title"
                    />
                    <select
                        className="bg-gray-700 px-2 py-1 mb-4 rounded-sm hover:opacity-90"
                        value={card.type}
                        onChange={(e) => setCard({...card, type: e.target.value as NoteType })}
                    >
                        <option value={"work"}>Work</option>
                        <option value={"education"}>Education</option>
                        <option value={"coding"}>Coding</option>
                    </select>
                    <textarea
                        className="field-sizing-fixed w-full h-32 border-2 border-gray-700 rounded-sm bg-gray-700 min-h-40 text-sm mb-4 p-2"
                        value={card.body}
                        onChange={(e) => setCard({...card, body: e.target.value })}
                        placeholder="New body"
                    />
                    <div className="flex flex-col items-center gap-2">
                        <button 
                            className="bg-gray-700 max-w px-4 rounded-full mb-2 hover:scale-[1.1] transition duration-100 hover:cursor-pointer"
                            onClick={handleEdit} >Set changes
                        </button>
                    </div>
                </div>
            ) : (
                <>
                <h2 className="text-xl">{note.title}</h2>
                <p className="text-gray-400 mb-8">{note.type}</p>
                <p className="border-2 border-gray-700 rounded-sm bg-gray-700 min-h-40 text-sm mb-4 p-2">{note.body}</p>
                <div className="flex flex-col items-center gap-2">
                    <button className="bg-gray-700 max-w px-4 rounded-full hover:scale-[1.1] transition duration-100 hover:cursor-pointer" onClick={handleDelete}>Delete</button>
                    <button className="bg-gray-700 max-w px-4 rounded-full mb-2 hover:scale-[1.1] transition duration-100 hover:cursor-pointer" onClick={checkEdit}>Edit</button>
                </div>
                </>
            )}
        </div>
    )
} 