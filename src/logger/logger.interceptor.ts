import { Interceptor, NestInterceptor, ExecutionContext, Injectable, Inject } from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class VCInterceptor implements NestInterceptor {

    constructor() { }

    // tslint:disable:no-console
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        const methodSignature = `${context.getHandler().name}:${context.getClass().name}`;
        console.log(`entering: ${methodSignature}`);

        return call$.pipe(tap(() => console.log(`exiting: ${methodSignature}`)));
    }
}