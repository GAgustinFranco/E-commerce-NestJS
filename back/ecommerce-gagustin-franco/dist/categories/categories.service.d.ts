import { CategoriesRepository } from "./categories.repository";
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    getCategories(): Promise<import("./entities/categories.entity").Category[]>;
    addCategoriesFromSeeder(products: any[]): Promise<import("./entities/categories.entity").Category[]>;
}
