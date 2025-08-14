import {BadRequestException, Injectable,PipeTransform} from '@nestjs/common';
    
    @Injectable()
    export class ValidateImagePipe implements PipeTransform {
        transform(file: Express.Multer.File) {

        if (!file) {
            throw new BadRequestException('There is no file uploaded');
        }

        const MAX_SIZE = 200 * 1024;
        if (file.size > MAX_SIZE) {
            throw new BadRequestException('image size exceeds the limit of 200KB');
        }
    
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new BadRequestException(
            `Image type not allowed: ${file.mimetype} `,
            );
        }
    
        return file;
        }
    }