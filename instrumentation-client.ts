// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5415041c67b936fe7edc15b2792102ec@o4511987548160000.ingest.de.sentry.io/4512053357445200",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],

  // Sample traces moderately to minimize client instrumentation performance cost
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0,

  // Sample Replay primarily when an error occurs to save CPU and network bandwidth
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,

  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
