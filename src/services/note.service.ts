import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from 'src/interfaces/note.interface';
import { CreateNoteDTO } from 'src/dtos/note.dto';

@Injectable()
export class NoteService {
  constructor(@InjectModel('Note') private noteModel: Model<Note>) {}

  async createNote(createNoteDTO: CreateNoteDTO): Promise<Note> {
    const newNote = await this.noteModel.create(createNoteDTO);

    return newNote.save();
  }

  async getAllNotes(): Promise<Note[]> {
    const notes = await this.noteModel.find();
    return notes;
  }

  async getSingleNote(noteId): Promise<Note> {
    console.log('NoteID: ', noteId);
    const note = await this.noteModel.findById(noteId);
    return note;
  }

  async updateNote(id, noteDTO: CreateNoteDTO): Promise<Note> {
    const note = await this.noteModel.findByIdAndUpdate(id, noteDTO);
    return note;
  }

  async deleteNote(id): Promise<Note> {
    const note = await this.noteModel.findByIdAndDelete(id);
    return note;
  }
}
