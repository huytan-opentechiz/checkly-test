import { EmailAlertChannel } from 'checkly/constructs'

export const sukruEmailAlert = new EmailAlertChannel('email-Li73cb5G', {
  address: 'sukru@glamira.com',
  sslExpiry: true,
})
