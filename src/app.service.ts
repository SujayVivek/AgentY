import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return 'Hello World! I am a Twitter Bot powered by AI.';
  }
}
