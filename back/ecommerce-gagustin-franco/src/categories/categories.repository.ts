import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesRepository {
    constructor(
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
    ) {}

    async getCategories(): Promise<Category[]> {
        return this.categoriesRepository.find();
    }

    async addCategories(newCategories: string[]): Promise<Category[]> {
        const added: Category[] = [];

        for (const name of newCategories) {
        const exists = await this.categoriesRepository.findOne({ where: { name } });
            if (!exists) {
                const newCategory = this.categoriesRepository.create({ name, products: [] });
                await this.categoriesRepository.save(newCategory);
                added.push(newCategory);
            }
        }

        return added;
    }
}