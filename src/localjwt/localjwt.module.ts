import { Module } from '@nestjs/common';
import { LocaljwtService } from './localjwt.service';

@Module({
  providers: [LocaljwtService],
  exports: [LocaljwtService]
})
export class LocaljwtModule {}
