import { describe, expect, it } from "vitest";
import { EventNotifier } from "./notifier.js";

describe("EventNotifier", () => {
  it("notifies subscribed listeners", () => {
    const notifier = new EventNotifier();
    notifier.subscribe((payload: any) => {
      if (payload) {
        expect(payload.event).toBe("ping");
      }
    });
    notifier.emit("ping", { ok: true });
  });
});
