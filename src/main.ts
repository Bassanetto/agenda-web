import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './projects/agenda-web/app.component';
import { appConfig } from './projects/agenda-web/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
