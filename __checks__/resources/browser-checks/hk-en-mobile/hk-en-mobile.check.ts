import { AlertEscalationBuilder, BrowserCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('hk-en-mobile-pcsSrAGY', {
  name: 'HK/EN Mobile',
  code: {
    entrypoint: './hk-en-mobile.spec.ts',
  },
  activated: true,
  muted: false,
  shouldFail: false,
  frequency: 180,
  group: CheckGroupV2.fromId(2998412),
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
