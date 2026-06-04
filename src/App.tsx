import { useState, useEffect} from "react"
import NoteCard from "./components/NoteCard"
import type { Note } from "./types"
import NoteForm from "./components/NoteForm"

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
  const stored = localStorage.getItem("notes")
  return stored ? JSON.parse(stored) : []
  })

  // On every update for notes, save the data
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function handleAdd(note: Note) {
    setNotes([... notes, note])
  }

  function handleDelete(id: string) {
    setNotes(notes.filter(n => n.id !== id))
  }

  function handleEdit(updatedNote: Note) {
    setNotes(notes.map(n => n.id === updatedNote.id ? updatedNote : n))
  }

  return (
    // Main landing page
    <div className="min-h-height bg-gray-900 px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">My notes</h1>
      {<NoteForm onAdd={handleAdd} />}
      <div className="grid grid-cols-3 gap-4">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit}/>
      ))}
      </div>
    </div>
  )
}

export default App
