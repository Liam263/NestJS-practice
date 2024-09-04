import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteController } from 'src/controllers/note.controller';
import { NoteSchema } from 'src/repositories/schemas/note.schema';
import { NoteService } from 'src/services/note.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
