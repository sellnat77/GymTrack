import { Controller, Get } from '@nestjs/common';
import { VisionService } from './vision.service';

@Controller('vision')
export class VisionController {
  constructor(private readonly visionService: VisionService) {}

  @Get()
  getHello(): string {
    return this.visionService.getHello();
  }
}
