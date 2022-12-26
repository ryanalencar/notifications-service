import { randomUUID } from 'crypto';
import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send notifications', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'You received a new Like',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
