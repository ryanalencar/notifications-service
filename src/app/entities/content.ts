const MIN_NOTIFICATION_CHARACTER_LENGTH = 5;
const MAX_NOTIFICATION_CHARACTER_LENGTH = 240;

class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) throw new Error('Content length error');

    this.content = content;
  }

  private validateContentLength(content: string): boolean {
    return (
      content.length >= MIN_NOTIFICATION_CHARACTER_LENGTH &&
      content.length <= MAX_NOTIFICATION_CHARACTER_LENGTH
    );
  }

  get value(): string {
    return this.content;
  }
}

export {
  MAX_NOTIFICATION_CHARACTER_LENGTH,
  MIN_NOTIFICATION_CHARACTER_LENGTH,
  Content,
};
