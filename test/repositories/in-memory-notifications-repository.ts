import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository {
  public notifications: Notification[] = [];

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
    return notifications;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (notification) => notification.id === notificationId,
    );
    return notification || null;
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (_notification) => _notification.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
    return count;
  }
}
