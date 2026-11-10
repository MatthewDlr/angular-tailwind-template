import type { ApplicationConfig } from "@angular/core";

import { provideBrowserGlobalErrorListeners } from "@angular/core";
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from "@angular/platform-browser";
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from "@angular/router";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({ scrollPositionRestoration: "enabled" }),
    ),
    provideClientHydration(withEventReplay(), withIncrementalHydration()),
  ],
};
