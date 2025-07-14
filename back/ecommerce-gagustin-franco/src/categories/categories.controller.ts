import { Controller, Post, Get} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

@Get()
async getCategories () {
    return this.categoriesService.getCategories(); 
}

@Post('seeder')
async seedCategories() {
    const data = require('../assets/act3');
    const result = await this.categoriesService.addCategoriesFromSeeder(data.productsP);
    return { message: 'Categorías precargadas', result };
  }
}
