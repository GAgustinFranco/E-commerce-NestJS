import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from "./categories.repository";

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async getCategories() {
    return this.categoriesRepository.getCategories();
  }

  async addCategoriesFromSeeder(products: any[]) { 
    const categoryNames = [...new Set(products.map(p => p.category))];
    return this.categoriesRepository.addCategories(categoryNames);
  }
}
