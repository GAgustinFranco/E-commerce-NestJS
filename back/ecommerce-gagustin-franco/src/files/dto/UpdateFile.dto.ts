import { PartialType } from '@nestjs/mapped-types';
import { CreateFileDto } from './UploadFile.dto';

export class UpdateFileDto extends PartialType(CreateFileDto) {}
