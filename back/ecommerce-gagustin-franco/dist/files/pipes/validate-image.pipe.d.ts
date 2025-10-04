import { PipeTransform } from '@nestjs/common';
export declare class ValidateImagePipe implements PipeTransform {
    transform(file: Express.Multer.File): Express.Multer.File;
}
