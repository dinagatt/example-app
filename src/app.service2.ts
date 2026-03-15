import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService2 {
  getHello(): string {
    return 'changes in AppService2 in feature2 branch';
  }
}