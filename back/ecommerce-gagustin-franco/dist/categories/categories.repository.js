"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const categories_entity_1 = require("./entities/categories.entity");
let CategoriesRepository = class CategoriesRepository {
    categoriesRepository;
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async getCategories() {
        return this.categoriesRepository.find();
    }
    async addCategories(newCategories) {
        const added = [];
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
};
exports.CategoriesRepository = CategoriesRepository;
exports.CategoriesRepository = CategoriesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(categories_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoriesRepository);
//# sourceMappingURL=categories.repository.js.map