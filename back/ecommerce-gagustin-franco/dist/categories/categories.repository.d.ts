import { Repository } from 'typeorm';
import { Category } from './entities/categories.entity';
export declare class CategoriesRepository {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    getCategories(): Promise<Category[]>;
    addCategories(newCategories: string[]): Promise<Category[]>;
}
