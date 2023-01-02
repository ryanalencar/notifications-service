import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) { }

  async create(notification: Notification): Promise<void> {
    const { category, content, createdAt, id, readAt, recipientId } =
      notification;
    await this.prismaService.notification.create({
      data: {
        category,
        content: content.value,
        createdAt,
        id,
        readAt,
        recipientId,
      },
    });
  }
}
