<<<<<<< HEAD
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import "hammerjs";

if (environment.production) {
  console.log("Inside the main.ts file and in the production enviornment");
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
=======
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  console.log("Inside the main.ts file and in the production enviornment");
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
  .catch(err => console.log(err));