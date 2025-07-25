import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("Get/products/Returns an array of products with an OK status code", async () => {
    const req = await request(app.getHttpServer()).get("/products");
    console.log(req.body);
    expect(req.status).toBe(200);
    expect(req.body).toBeInstanceOf(Array);
  })

  it("Get/products/:id/Returns a product by ID with an OK status code", async () => {
    const req = await request(app.getHttpServer()).get("/products/25810431-7611-45d7-83cc-e645ccf96f50");
    console.log(req.body);
    expect(req.status).toBe(200);
    expect(req.body).toHaveProperty("id", "25810431-7611-45d7-83cc-e645ccf96f50");
    expect(req.body).toBeInstanceOf(Object)
  })

  it("Get/products/:id throws a error when validation is failed", async () => {
    const req = await request(app.getHttpServer()).get("/products/25810431-?4t1-45d7-83cc-e645ccf96f5z")
    console.log(req.body);
    expect(req.status).toBe(400);
    expect(req.body.message).toBe("Validation failed (uuid is expected)")
  })

  it("Post/users/signup/Returns a user with an OK status code", async () => {
    const req = await request(app.getHttpServer()).post("/auth/signup").send({
      name:"Test",
      email:"test@test.com",
      password:"Test1234!",
      confirmPassword:"Test1234!",
      phone:3425678768,
      country:"Rumania",
      address:"Test Address",
      city:"Test City",
      
  });
  console.log(req.body);
  expect(req.status).toBe(201);
  expect(req.body).toBeInstanceOf(Object)

  })    
});



