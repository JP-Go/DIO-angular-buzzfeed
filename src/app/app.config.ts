import {ApplicationConfig} from '@angular/core'
import {  provideProtractorTestingSupport } from "@angular/platform-browser";
import { provideRoutes } from "@angular/router";
import { routes } from "./app.routes";

export const config: ApplicationConfig = {
  providers: [provideProtractorTestingSupport(),provideRoutes(routes)]
}
