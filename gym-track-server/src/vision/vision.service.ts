import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class VisionService {
    constructor(@InjectQueue('vision') private visionQueue: Queue) {}

    getHello(): string {
      return 'Hello from vision service';
    }
}
