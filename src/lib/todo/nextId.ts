import {UUID} from "./types";

/**
 * This function originally started as an incrementing integer counter, then I remembered about the Crypto library 🙈
 */
export function nextId(): UUID {
  return crypto.randomUUID()
}
