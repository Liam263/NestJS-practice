import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateNoteDTO } from 'src/dtos/note.dto';
import { Note } from 'src/interfaces/note.interface';
@Injectable()
export class NoteService {
  constructor(private noteService: Model<Note>) {}
  async createNote(note: CreateNoteDTO): Promise<Note> {
    const newNote = await this.noteService.create(note);
    return newNote;
  }
  async getAllNotes(): Promise<Note[]> {
    const results = await this.noteService.find();
    return results;
  }

  async getSingleNote(noteId: string): Promise<Note> {
    const note = await this.noteService.findById(noteId);
    return note;
  }
  async updateNote(noteId: string, noteDTO: CreateNoteDTO): Promise<Note> {
    const note = await this.noteService.findByIdAndUpdate(noteId, noteDTO);
    return note;
  }

  async deleteNote(noteId: string): Promise<Note> {
    const note = await this.noteService.findByIdAndDelete(noteId);
    return note;
  }
}
