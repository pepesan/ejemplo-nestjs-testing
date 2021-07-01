import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect('get /user');
  });
  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/user')
      .expect(201)
      .expect('post /user');
  });
  it('/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/1')
      .expect(200)
      .expect('get /user/:id 1');
  });
  afterAll(async () => {
    await app.close();
  });
});
