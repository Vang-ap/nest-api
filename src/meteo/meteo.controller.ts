import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { MeteoService } from './meteo.service';
import { MeteoCityDto } from './meteoDto/meteoCity.dto';

@Controller('meteo')
export class MeteoController {
  constructor(private meteoService: MeteoService) { }

  @ApiOperation({ summary: "Read today's weather for a city" })
  @Post('today')
  getMeteoForToday(
    @Body()
    meteoData: MeteoCityDto,
  ) {
    return this.meteoService.getWeatherCity(meteoData);
  }

  @ApiOperation({ summary: 'Read the weekly weather forecast for a city' })
  @Post('week')
  getMeteoForWeek(
    @Body()
    meteoData: MeteoCityDto,
  ) {
    return this.meteoService.getWeatherWeek(meteoData);
  }
}