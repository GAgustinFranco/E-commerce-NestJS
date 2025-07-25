import { Controller, Post, Param, UploadedFile, UseInterceptors, HttpCode, HttpStatus, ParseUUIDPipe} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from '../products/products.service';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly productsService: ProductsService
    ) {}

    @Post('uploadImage/:id')
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(
      @Param('id', ParseUUIDPipe) id: string,
      @UploadedFile() file: Express.Multer.File
    ) {
      return this.filesService.uploadImage(id, file);
    
  }
}