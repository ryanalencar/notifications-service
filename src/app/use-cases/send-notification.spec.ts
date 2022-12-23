import { randomUUID } from 'crypto';
import { SendNotification } from './send-notification';

describe('Send notifications', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'You received a new Like',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
