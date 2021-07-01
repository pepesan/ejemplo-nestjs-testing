import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appService = new AppService();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = 'Hello World!';
      jest.spyOn(appService, 'getHello').mockImplementation(() => result);

      expect(await appController.getHelloService()).toBe(result);
    });
  });
});
