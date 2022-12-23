import { randomUUID } from 'crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('New friendship invite'),
      category: 'social',
      recipientId: randomUUID(),
    });

    expect(content).toBeTruthy();
  });
});
