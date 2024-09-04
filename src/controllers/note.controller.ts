import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CreateNoteDTO } from '../dtos/note.dto';
import { NoteService } from '../services/note.service';

@Controller()
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post('/createNote')
  async createNote(@Res() res, @Body() noteDTO: CreateNoteDTO) {
    const note = await this.noteService.createNote(noteDTO);

    return res.json({
      message: 'Note created successfully',
      data: note,
    });
  }

  @Get('/getAll')
  async getAllNotes(@Res() res) {
    const notes = await this.noteService.getAllNotes();

    return res.json({
      message: 'Get all notes',
      data: notes,
    });
  }

  @Get('/getSingleNote/:id')
  async getSingleNote(@Res() res, @Param('id') _id: string) {
    const note = await this.noteService.getSingleNote(_id);
    if (!note) {
      return res.json({
        status: 404,
        error: 'NOT FOUND',
      });
    }

    return res.json({
      message: 'FOUND',
      data: note,
    });
  }

  @Patch('/updateNote/:id')
  async updateNote(
    @Res() res,
    @Body() noteDTO: CreateNoteDTO,
    @Param('id') _id: string,
  ) {
    const note = await this.noteService.updateNote(_id, noteDTO);
    if (!note) {
      return res.json({
        status: 404,
        error: 'NOT FOUND',
      });
    }

    return res.json({
      message: 'UPDATED',
      data: note,
    });
  }

  @Delete('/deleteNote/:id')
  async deleteNote(@Res() res, @Param('id') _id: string) {
    const note = await this.noteService.deleteNote(_id);
    if (!note) {
      return res.json({
        status: 404,
        error: 'NOT FOUND',
      });
    }

    return res.json({
      message: 'DELETED',
      data: note,
    });
  }
}
