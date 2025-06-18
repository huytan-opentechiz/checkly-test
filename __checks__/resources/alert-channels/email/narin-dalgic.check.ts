import { EmailAlertChannel } from 'checkly/constructs'

export const narinDalgicEmailAlert = new EmailAlertChannel('email-6JYtWJew', {
  address: 'narin.dalgic@glamira-group.com',
  sendDegraded: true,
  sslExpiry: true,
})
