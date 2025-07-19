import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  controllers: [FilesController],
  providers: [FilesService, CloudinaryService],
  exports: [FilesService]
})
export class FilesModule {}
