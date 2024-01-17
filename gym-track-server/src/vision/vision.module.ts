import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule, BullModuleOptions } from '@nestjs/bull';
import { VisionController } from './vision.controller';
import { VisionService } from './vision.service';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'vision',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<BullModuleOptions> => ({
        redis: configService.get('QUEUE_URL')
      })
    }),
    ],
  controllers: [VisionController],
  providers: [VisionService]
})
export class VisionModule {}
