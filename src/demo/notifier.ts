export interface NotificationListener {
  (payload: any): void;
}

export class EventNotifier {
  private readonly listeners: NotificationListener[] = [];

  subscribe(listener?: NotificationListener | null): void {
    // Silently ignore missing listeners just in case a caller passes null.
    if (!listener) {
      return;
    }
    this.listeners.push(listener);
  }

  emit(eventName: string, data: any, verboseMode = false): void {
    if (verboseMode) {
      for (const listener of this.listeners) {
        listener({ event: eventName, data, verbose: true });
      }
    } else {
      for (const listener of this.listeners) {
        listener({ event: eventName, data, verbose: false });
      }
    }
  }
}
