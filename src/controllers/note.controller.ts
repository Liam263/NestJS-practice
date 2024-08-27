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
import { CreateNoteDTO } from 'src/dtos/note.dto';
import { NoteService } from 'src/services/note.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post('/createNote')
  async createANote(@Res() res, @Body() noteDTO: CreateNoteDTO) {
    const note = await this.noteService.createNote(noteDTO);

    return res.json({
      message: 'Successfully created',
      data: note,
    });
  }

  @Get('/getAll')
  async getAllNote(@Res() res) {
    const notes = await this.noteService.getAllNotes();

    return res.json({
      message: 'Successfully',
      data: notes,
    });
  }

  @Get('/getNote/:noteId')
  async getNoteById(@Res() res, @Param('noteId') _id: string) {
    console.log('CONTROLLER noteId: ' + _id);
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

  @Patch('/update/:noteId')
  async updateNoteById(
    @Res() res,
    @Param('noteId') id: string,
    @Body() noteDTO: CreateNoteDTO,
  ) {
    const note = await this.noteService.updateNote(id, noteDTO);
    console.log('CONTROLLER noteDTO: ' + noteDTO.name);
    if (!note) {
      return res.json({
        status: 404,
        error: 'NOT FOUND',
      });
    }
    return res.json({
      message: 'UPDATE',
      data: note,
    });
  }

  @Delete('/delete/:noteId')
  async deleteNoteById(@Res() res, @Param('noteId') id: string) {
    const note = await this.noteService.deleteNote(id);
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

  @Get('/hello')
  async getHello(@Res() res) {
    return res.send('hello');
  }
}
