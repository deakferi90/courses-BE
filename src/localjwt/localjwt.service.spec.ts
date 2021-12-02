import { Test, TestingModule } from '@nestjs/testing';
import { LocaljwtService } from './localjwt.service';

describe('LocaljwtService', () => {
  let service: LocaljwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocaljwtService],
    }).compile();

    service = module.get<LocaljwtService>(LocaljwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
