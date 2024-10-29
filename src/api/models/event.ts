export enum EventSeverity {
  log = "log",
  error = "error",
  warning = "warning",
}

export interface EventModel {
  id: number;
  severity: "log" | "error" | "warning";
  message: string;
  createdAt: string;
}
