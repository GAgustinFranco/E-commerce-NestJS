import { Controller, Post, Param, UploadedFile, UseInterceptors, HttpCode, HttpStatus, ParseUUIDPipe, UseGuards} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from '../products/products.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags("Files")
@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    ) {}

    @ApiBearerAuth()
    @ApiConsumes('multipart/form-data')
    @Post('uploadImage/:id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(FileInterceptor('file'))
    @ApiParam({
                name: 'id',
                type: 'string',
                format: 'uuid',
                description: 'UUID of the product to which the image will be uploaded',
            })
            @ApiBody({
            schema: {
                type: 'object',
                properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                },
            },
            })
    async uploadImage(
      @Param('id', ParseUUIDPipe) id: string,
      @UploadedFile() file: Express.Multer.File
    ) {
      return this.filesService.uploadImage(id, file);
    
  }
}