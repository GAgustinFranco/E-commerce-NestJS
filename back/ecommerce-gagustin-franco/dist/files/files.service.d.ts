import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { ProductsRepository } from '../products/products.repository';
export declare class FilesService {
    private readonly repository;
    private readonly cloudinaryService;
    private readonly productsRepository;
    constructor(repository: Repository<File>, cloudinaryService: CloudinaryService, productsRepository: ProductsRepository);
    uploadImage(id: string, file: Express.Multer.File): Promise<{
        message: string;
        imageUrl: string;
    }>;
}
