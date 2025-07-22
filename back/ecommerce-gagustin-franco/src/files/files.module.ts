import { Module, forwardRef } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from '../products/products.module';
import { File } from './entities/file.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([File]),
  forwardRef(() => ProductsModule)
  ],
  controllers: [FilesController],
  providers: [FilesService, CloudinaryService],
  exports: [FilesService]
})
export class FilesModule {}
