import { Get, Controller, UseInterceptors } from '@nestjs/common';
import { TestService } from './services/test.service';
import { VCInterceptor } from 'logger/logger.interceptor';

@Controller()
export class AppController {
  constructor(private readonly testService: TestService) {}

  @Get()
  @UseInterceptors(VCInterceptor)
  root(): number {
    return this.testService.sum();
  }
}
