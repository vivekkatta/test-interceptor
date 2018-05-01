import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TestService } from 'services/test.service';
import { VCInterceptor } from 'logger/logger.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ VCInterceptor, TestService ],
})
export class AppModule {}
