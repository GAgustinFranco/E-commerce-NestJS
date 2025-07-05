import { Module, OnModuleInit } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products/products.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: "./.env.development"
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        database: configService.get("DB_NAME"),
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        synchronize:true,
        logging:true
        })
    }),
    ProductsModule,
    UsersModule,
    AuthModule,
    CategoriesModule,
    OrdersModule,
    OrderDetailsModule],
  controllers: [],
  providers: [],
})

export class AppModule implements OnModuleInit {
    constructor(
      private categoriesService: CategoriesService,
      private productsService: ProductsService,
    ) {}
  
    async onModuleInit() {
      const data = require('./assets/act3');
      
      await this.categoriesService.addCategoriesFromSeeder(data.productsP);
      
      await this.productsService.addProductsFromSeeder(data.productsP);
    }
}
