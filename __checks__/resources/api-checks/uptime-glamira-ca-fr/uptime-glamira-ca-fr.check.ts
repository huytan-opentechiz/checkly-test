import { AlertEscalationBuilder, ApiCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('uptime-glamira-ca-fr-HjxNuCDV', {
  name: 'Uptime - glamira.ca/fr',
  request: {
    url: 'https://www.glamira.ca/fr/?utm_source=monitoring',
    method: 'GET',
    ipFamily: 'IPv4',
  },
  degradedResponseTime: 5000,
  maxResponseTime: 20000,
  activated: true,
  muted: false,
  shouldFail: false,
  frequency: 180,
  group: CheckGroupV2.fromId(2998426),
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
