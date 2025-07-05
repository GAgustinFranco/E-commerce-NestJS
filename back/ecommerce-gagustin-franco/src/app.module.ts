import { Module, OnModuleInit } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products/products.service';
import typeOrmConfig from "./config/typeorm";
import { productsP } from './assets/act3';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: ".env.development",
      load: [typeOrmConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions =>{
        const ormConfig = configService.get<TypeOrmModuleOptions>("typeorm");

        if(!ormConfig) {
          throw new Error (`TypeORM configuration not found`);
        }

        return ormConfig
      } 
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
      await this.categoriesService.addCategoriesFromSeeder(productsP);
      
      await this.productsService.addProductsFromSeeder(productsP);
    }
}
