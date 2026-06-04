export type NoteType = "work" | "education" | "coding"

export interface Note {
    id: string
    title: string
    body: string
    type: NoteType
}
