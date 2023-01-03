import { Content } from '@app/entities/content';
import { INotificationProps, Notification } from '@app/entities/notification';

type Override = Partial<INotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New friendship invite'),
    recipientId: 'recipient-1',
    ...override,
  });
}
