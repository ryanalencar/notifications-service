interface INotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}
export class NotificationsService {
  private props: INotificationProps;

  constructor(props: INotificationProps) {
    this.props = props;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content() {
    return this.props.content;
  }
}
