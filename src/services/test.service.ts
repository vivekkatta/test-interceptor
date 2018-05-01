import { Inject, UseInterceptors, Injectable } from '@nestjs/common';
import { VCInterceptor } from 'logger/logger.interceptor';

@Injectable()
export class TestService {
    constructor() { }

    @UseInterceptors(VCInterceptor)
    sum(): number {
        return 8;
    }
}