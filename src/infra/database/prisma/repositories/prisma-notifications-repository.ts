import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
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
