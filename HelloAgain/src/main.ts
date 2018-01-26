import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  setTimeout(function() {
    console.log("a time delayed log to test client side output")
  }, 1000);
}




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
