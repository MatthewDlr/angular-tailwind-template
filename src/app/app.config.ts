import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideNgIconsConfig } from "@ng-icons/core";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideBrowserGlobalErrorListeners(),

    // Define the default configuration for icons
    // Can be overridden by providing a different configuration in a component
    provideNgIconsConfig({
      size: "1.5em",
      strokeWidth: 2,
      color: "#030712",
    }),
  ],
};
