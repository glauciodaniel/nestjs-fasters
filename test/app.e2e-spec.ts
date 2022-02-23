import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth (POST)', () => {
    const body = {
      email: 'joao@hcode.com.br',
      password: '123456',
    };
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(body)
      .expect(201);
  });
});
