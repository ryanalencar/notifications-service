import {
  Content,
  MAX_NOTIFICATION_CHARACTER_LENGTH,
  MIN_NOTIFICATION_CHARACTER_LENGTH,
} from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Notification test');
    expect(content).toBeTruthy();
  });

  it(`should not be able to create a notification content with less than ${MIN_NOTIFICATION_CHARACTER_LENGTH}`, () => {
    expect(() => new Content('Test')).toThrow();
  });

  it(`should not be able to create a notification content with more than ${MAX_NOTIFICATION_CHARACTER_LENGTH}`, () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
