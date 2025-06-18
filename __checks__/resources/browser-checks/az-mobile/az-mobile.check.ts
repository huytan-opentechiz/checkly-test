import { AlertEscalationBuilder, BrowserCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('az-mobile-igbr6QM2', {
  name: 'AZ Mobile',
  code: {
    entrypoint: './az-mobile.spec.ts',
  },
  activated: true,
  muted: false,
  shouldFail: false,
  frequency: 180,
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
