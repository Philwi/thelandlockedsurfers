import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

export default function initSentry(app, router) {
  const environment = import.meta.env.MODE
  Sentry.init({
    app,
    environment: environment,
    dsn: "https://67b604eccc504615840fa42698b2ec8e@o1159336.ingest.sentry.io/6243136",
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "thelandlockedsurfers.com", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}
