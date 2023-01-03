import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotifications(
      notificationsRepository,
    );
    const RECIPIENT_ID = 'recipient-fake';

    const notification2 = makeNotification({ recipientId: RECIPIENT_ID });
    const notification3 = makeNotification({ recipientId: RECIPIENT_ID });

    await notificationsRepository.create(notification2);
    await notificationsRepository.create(notification3);

    const { notifications } = await getRecipientNotification.execute({
      recipientId: RECIPIENT_ID,
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: RECIPIENT_ID }),
        expect.objectContaining({ recipientId: RECIPIENT_ID }),
      ]),
    );
  });
});
