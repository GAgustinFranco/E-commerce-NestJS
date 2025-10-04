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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const products_module_1 = require("./products/products.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const categories_module_1 = require("./categories/categories.module");
const orders_module_1 = require("./orders/orders.module");
const order_details_module_1 = require("./order-details/order-details.module");
const categories_service_1 = require("./categories/categories.service");
const products_service_1 = require("./products/products.service");
const typeorm_2 = __importDefault(require("./config/typeorm"));
const act3_1 = require("./assets/act3");
const files_module_1 = require("./files/files.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
    categoriesService;
    productsService;
    constructor(categoriesService, productsService) {
        this.categoriesService = categoriesService;
        this.productsService = productsService;
    }
    async onModuleInit() {
        await this.categoriesService.addCategoriesFromSeeder(act3_1.productsP);
        await this.productsService.addProductsFromSeeder(act3_1.productsP);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
                load: [typeorm_2.default]
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const ormConfig = configService.get("typeorm");
                    if (!ormConfig) {
                        throw new Error(`TypeORM configuration not found`);
                    }
                    return ormConfig;
                }
            }),
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            orders_module_1.OrdersModule,
            order_details_module_1.OrderDetailsModule,
            files_module_1.FilesModule,
            jwt_1.JwtModule.register({
                global: true,
                signOptions: { expiresIn: "1h" },
                secret: process.env.JWT_SECRET
            }),
        ],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService,
        products_service_1.ProductsService])
], AppModule);
//# sourceMappingURL=app.module.js.map