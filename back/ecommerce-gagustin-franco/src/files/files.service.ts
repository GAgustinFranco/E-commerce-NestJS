import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { ProductsRepository } from '../products/products.repository';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private readonly repository: Repository<File>,
    private readonly cloudinaryService: CloudinaryService,
    private readonly productsRepository: ProductsRepository
  ){}

  async uploadImage(id: string, file: Express.Multer.File) {
    
    const product = await this.productsRepository.getProductsById(id);
    if (!product) throw new NotFoundException('Product not found');
  
    const result = await this.cloudinaryService.uploadImage(file.buffer, file.originalname);
  
    product.imgUrl = result.secure_url;
    await this.productsRepository.saveProduct(product); 
  
    const newFile = this.repository.create({
      fileName: file.originalname,
      mimeType: file.mimetype,
      url: result.secure_url
    });
    await this.repository.save(newFile);
  
    return {
      message: 'Image uploaded and product updated successfully',
      imageUrl: result.secure_url,
    };
  }
}
