// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }
import { Name, WeatherLocation } from "./modules/weather";
import { Name as ohtername } from "./modules/dublicateName";
import {  TempConverter } from "./modules/tempconverter";


let my = new Name("Yearul", "Islam");
let myn = new ohtername("Nabil", "Islam");

console.log(my.first);  
console.log(myn.first);  

console.log(TempConverter.convertFtoC(30));;  
