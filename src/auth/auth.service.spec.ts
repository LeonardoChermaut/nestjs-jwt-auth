import { Test, TestingModule } from '@nestjs/testing';
import { AutService } from '@src/auth/auth.service';

describe('AutService', () => {
  let service: AutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutService],
    }).compile();

    service = module.get<AutService>(AutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
