import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteController } from '../controllers/note.controller';
import { NoteSchema } from '../repositories/schemas/note.schema';
import { NoteService } from '../services/note.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
