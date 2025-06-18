import { AlertEscalationBuilder, BrowserCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('be-fr-checkout-zP7MyoZz', {
  name: 'BE/FR Checkout',
  code: {
    entrypoint: './be-fr-checkout.spec.ts',
  },
  activated: true,
  muted: false,
  shouldFail: false,
  frequency: 30,
  group: CheckGroupV2.fromId(2998398),
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
