import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );
    const RECIPIENT_ID = 'recipient-fake';

    const notification1 = makeNotification();
    const notification2 = makeNotification({ recipientId: RECIPIENT_ID });
    const notification3 = makeNotification({ recipientId: RECIPIENT_ID });

    await notificationsRepository.create(notification1);
    await notificationsRepository.create(notification2);
    await notificationsRepository.create(notification3);

    const { count } = await countRecipientNotification.execute({
      recipientId: RECIPIENT_ID,
    });

    expect(count).toBe(2);
  });
});
