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

  return (
    // Main landing page
    <div className="min-h-height bg-gray-900 px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">My notes</h1>
      {<NoteForm onAdd={handleAdd} />}
      <div className="grid grid-cols-3 gap-4">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
      </div>
    </div>
  )
}

export default App
