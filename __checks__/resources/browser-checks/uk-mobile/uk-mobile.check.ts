import { AlertEscalationBuilder, BrowserCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('uk-mobile-J0FEDde8', {
  name: 'UK_mobile',
  code: {
    entrypoint: './uk-mobile.spec.ts',
  },
  activated: false,
  muted: false,
  shouldFail: false,
  frequency: 30,
  group: CheckGroupV2.fromId(2998418),
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
