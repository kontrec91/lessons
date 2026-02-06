/**
 * Gets the current UTC time
 * @returns Date object representing the current UTC time
 */
export const getCurrentUTCTime = (): Date => {
  return new Date();
};

/**
 * Gets the current UTC time as an ISO string
 * @returns ISO 8601 formatted string of current UTC time
 */
export const getCurrentUTCTimeString = (): string => {
  return new Date().toISOString();
};

/**
 * Gets the current UTC timestamp in milliseconds
 * @returns Number of milliseconds since Unix epoch
 */
export const getCurrentUTCTimestamp = (): number => {
  return Date.now();
};

/**
 * Gets formatted UTC time components
 * @returns Object containing UTC time components
 */
export const getCurrentUTCComponents = () => {
  const now = new Date();
  return {
    year: now.getUTCFullYear(),
    month: now.getUTCMonth() + 1, // 0-indexed, so add 1
    day: now.getUTCDate(),
    hours: now.getUTCHours(),
    minutes: now.getUTCMinutes(),
    seconds: now.getUTCSeconds(),
    milliseconds: now.getUTCMilliseconds(),
  };
};

/**
 * Gets a human-readable UTC time string
 * @returns Formatted UTC time string
 */
export const getFormattedUTCTime = (): string => {
  const now = new Date();
  return now.toUTCString();
};
