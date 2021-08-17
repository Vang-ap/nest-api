import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { MeteoCityDto } from './meteoDto/meteoCity.dto';

@Injectable()
export class MeteoService {
  constructor(private httpService: HttpService) { }

  async getWeatherCity(meteoCity: MeteoCityDto) {
    const endpointUrl = `${process.env.API_URL}/current.json`;
    const params = {
      key: process.env.API_KEY,
      q: meteoCity.cityName,
      lang: 'fr',
    };

    return this.httpService
      .get(endpointUrl, { params })
      .pipe(map((res) => res.data));
  }

  getWeatherWeek(meteoCity: MeteoCityDto) {
    const endpointUrl = `${process.env.API_URL}/forecast.json`;
    const params = {
      key: process.env.API_KEY,
      q: meteoCity.cityName,
      days: '3',
      lang: 'fr',
    };

    return this.httpService
      .get(endpointUrl, { params })
      .pipe(map((res) => res.data));
  }
}
