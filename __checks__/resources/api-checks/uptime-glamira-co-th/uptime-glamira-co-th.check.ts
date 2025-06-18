import { AlertEscalationBuilder, ApiCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('uptime-glamira-co-th-XOUsPJ5n', {
  name: 'Uptime - glamira.co.th',
  request: {
    url: 'https://www.glamira.co.th/?utm_source=monitoring',
    method: 'GET',
    ipFamily: 'IPv4',
  },
  degradedResponseTime: 5000,
  maxResponseTime: 20000,
  activated: true,
  muted: true,
  shouldFail: false,
  frequency: 180,
  group: CheckGroupV2.fromId(2998423),
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
