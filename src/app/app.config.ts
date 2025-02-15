import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { provideNgIconsConfig } from "@ng-icons/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    // Define the default configuration for icons
    // Can be overridden by providing a different configuration in a component
    provideNgIconsConfig({
      size: "1.5em",
      strokeWidth: 2,
      color: "#030712",
    }),
  ],
};
