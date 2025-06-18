import { AlertEscalationBuilder, BrowserCheck, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('wait-for-a-new-page-to-load-and-screenshot-it-rOQFaKsH', {
  name: 'Wait for a new page to load and screenshot it',
  code: {
    entrypoint: './wait-for-a-new-page-to-load-and-screenshot-it.spec.ts',
  },
  activated: false,
  muted: false,
  shouldFail: false,
  locations: [
    'us-east-1',
    'us-west-1',
  ],
  frequency: 10,
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1, {
    amount: 0,
    interval: 5,
  }, {
    enabled: false,
    percentage: 10,
  }),
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
  runParallel: true,
})
