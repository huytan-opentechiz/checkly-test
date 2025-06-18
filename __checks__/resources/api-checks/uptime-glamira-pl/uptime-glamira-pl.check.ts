import { AlertEscalationBuilder, ApiCheck, CheckGroupV2, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('uptime-glamira-pl-Fg7j2jMn', {
  name: 'Uptime - glamira.pl',
  request: {
    url: 'https://www.glamira.pl/?utm_source=monitoring',
    method: 'GET',
    ipFamily: 'IPv4',
  },
  degradedResponseTime: 5000,
  maxResponseTime: 20000,
  activated: true,
  muted: false,
  shouldFail: false,
  frequency: 60,
  group: CheckGroupV2.fromId(2998419),
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
