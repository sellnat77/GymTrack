import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisionModule } from './vision/vision.module';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: configService.get('QUEUE_URL'),
      }),
      inject: [ConfigService],
    }),
    VisionModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
