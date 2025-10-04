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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_entity_1 = require("./entities/file.entity");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const products_repository_1 = require("../products/products.repository");
let FilesService = class FilesService {
    repository;
    cloudinaryService;
    productsRepository;
    constructor(repository, cloudinaryService, productsRepository) {
        this.repository = repository;
        this.cloudinaryService = cloudinaryService;
        this.productsRepository = productsRepository;
    }
    async uploadImage(id, file) {
        const product = await this.productsRepository.getProductsById(id);
        if (!product)
            throw new common_1.NotFoundException('Product not found');
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
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cloudinary_service_1.CloudinaryService,
        products_repository_1.ProductsRepository])
], FilesService);
//# sourceMappingURL=files.service.js.map