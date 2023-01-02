import { randomUUID } from 'crypto';
import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notifications', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      category: 'social',
      content: 'You received a new Like',
      recipientId: randomUUID(),
    });

    expect(notifications).toHaveLength(1);
  });
});
