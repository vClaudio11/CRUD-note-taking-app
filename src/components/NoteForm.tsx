import { useState } from "react";
import type { NoteType, Note } from "../types";

interface NoteFormProps {
    onAdd: (note: Note) => void
}

export default function NoteForm({ onAdd }: NoteFormProps) {
    const [form, setForm] = useState({ title: "", body: "", type: "work" })
    const [error, setError] = useState("")
    
    function handleSubmit(){
        if (!form.title || !form.body) {
            setError("Please fill in all fields")
            return
        }
        setError("")
        const newNote: Note = {
            id: crypto.randomUUID(),
            title: form.title,
            body: form.body,
            type: form.type as NoteType
        }
        onAdd(newNote)
    }

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-4 text-white border-2 bg-gray-800 py-4 gap-2 rounded-md">
            <h2 className="text-2xl">Create note</h2>
            <textarea
                className="bg-gray-700 w-48 h-8 px-2 py-1 rounded-sm caret-gray-200 hover:opacity-90"
                value={form.title}
                onChange={(e) => setForm({...form, title: e.target.value})}
                placeholder="Title"
            />
            <textarea
                className="bg-gray-700 px-2 py-1 w-48 h-32 rounded-sm hover:opacity-90"
                value={form.body}
                onChange={(e) => setForm({...form, body: e.target.value})}
                placeholder="Body"
            />
            <select
                className="bg-gray-700 px-2 py-1 rounded-sm hover:opacity-90"
                value={form.type}
                onChange={(e) => setForm({...form, type: e.target.value as NoteType })}
            >
                <option value="work">Work</option>
                <option value="education">Education</option>
                <option value="coding">Coding</option>    
            </select>
            <button className="bg-gray-900 mt-2 px-2 py-1 rounded-md hover:cursor-pointer hover:scale-[1.1] transition duration-100"
                    onClick={handleSubmit}>Add Note
            </button>
            {error && <p className="text-red-400">{error}</p>}
        </div>
    )
}