import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MeteoController } from './meteo.controller';
import { MeteoService } from './meteo.service';

@Module({
  imports: [HttpModule],
  controllers: [MeteoController],
  providers: [MeteoService],
})
export class MeteoModule { }