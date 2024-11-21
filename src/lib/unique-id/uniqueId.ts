import {Uuid} from "./types";

export function uniqueId(): Uuid {
  return crypto.randomUUID()
}
