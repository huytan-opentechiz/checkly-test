import { AlertEscalationBuilder, BrowserCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('us-2tLc6wy4', {
  name: 'US',
  code: {
    entrypoint: './us.spec.ts',
  },
  activated: false,
  muted: false,
  shouldFail: false,
  frequency: 30,
  group: CheckGroupV2.fromId(2998220),
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
