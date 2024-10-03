import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {

  constructor() { }

  getUrlToLogo(source: string) {
    return `https://logo.clearbit.com/${new URL(source).host}`;
  }
}
