export type NoteType = "work" | "education" | "coding"

export interface Note {
    id: string
    title: string
    body: string
    type: NoteType
}

export interface NoteFormProps {
    onAdd: (note: Note) => void
}