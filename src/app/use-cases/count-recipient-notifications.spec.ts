import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'crypto';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const recipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );
    const RECIPIENT_ID = 'recipient-fake';

    const notification1 = makeNotification();
    const notification2 = makeNotification({ recipientId: RECIPIENT_ID });
    const notification3 = makeNotification({ recipientId: RECIPIENT_ID });

    await notificationsRepository.create(notification1);
    await notificationsRepository.create(notification2);
    await notificationsRepository.create(notification3);

    const { count } = await recipientNotification.execute({
      recipientId: RECIPIENT_ID,
    });

    expect(count).toBe(2);
  });
});
