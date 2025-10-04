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
exports.OrdersRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const orders_entity_1 = require("./entities/orders.entity");
const common_2 = require("@nestjs/common");
const users_entity_1 = require("../users/entities/users.entity");
const products_entity_1 = require("../products/entities/products.entity");
const order_details_entity_1 = require("../order-details/entities/order-details.entity");
const uuid_1 = require("uuid");
const typeorm_2 = require("@nestjs/typeorm");
let OrdersRepository = class OrdersRepository extends typeorm_1.Repository {
    repository;
    dataSource;
    constructor(repository, dataSource) {
        super(orders_entity_1.Order, dataSource.createEntityManager());
        this.repository = repository;
        this.dataSource = dataSource;
    }
    async getOrder(orderId) {
        const order = await this.findOne({
            where: { id: orderId },
            relations: ['user', 'details', 'details.products'],
        });
        if (!order) {
            throw new common_2.NotFoundException(`Orden con ID ${orderId} no encontrada`);
        }
        return order;
    }
    async createOrder(createOrderDto) {
        const { userId, products } = createOrderDto;
        const user = await this.manager.findOne(users_entity_1.User, { where: { id: userId } });
        if (!user) {
            throw new common_2.NotFoundException(`Usuario con ID ${userId} no encontrado`);
        }
        const order = new orders_entity_1.Order();
        order.id = (0, uuid_1.v4)();
        order.date = new Date();
        order.user = user;
        const orderDetail = new order_details_entity_1.OrderDetail();
        orderDetail.id = (0, uuid_1.v4)();
        orderDetail.order = order;
        orderDetail.products = [];
        orderDetail.price = 0;
        for (const productItem of products) {
            const product = await this.manager.findOne(products_entity_1.Product, {
                where: { id: productItem.id, stock: (0, typeorm_1.MoreThan)(0) },
            });
            if (!product) {
                throw new common_2.NotFoundException(`Producto con ID ${productItem.id} no encontrado o sin stock`);
            }
            product.stock -= 1;
            await this.manager.save(products_entity_1.Product, product);
            orderDetail.products.push(product);
            orderDetail.price += Number(product.price);
        }
        order.details = [orderDetail];
        await this.manager.save(orders_entity_1.Order, order);
        await this.manager.save(order_details_entity_1.OrderDetail, orderDetail);
        const orderToReturn = await this.getOrder(order.id);
        return orderToReturn;
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(orders_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], OrdersRepository);
//# sourceMappingURL=orders.repository.js.map