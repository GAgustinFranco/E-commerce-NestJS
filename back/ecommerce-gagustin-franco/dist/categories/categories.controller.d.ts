import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<import("./entities/categories.entity").Category[]>;
    seedCategories(): Promise<{
        message: string;
        result: import("./entities/categories.entity").Category[];
    }>;
}
