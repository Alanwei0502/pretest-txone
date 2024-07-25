/**
 * 建立完整的 URL，包含基本 URL 和查詢參數。
 *
 * @param {string} baseUrl - 基本 URL。
 * @param {Record<string, unknown>} params - 查詢參數的鍵值對。
 * @returns {string} - 包含查詢參數的完整 URL。
 *
 * @example
 * const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
 * const params = {
 *   q: 'London',
 *   appid: 'your_api_key',
 *   units: 'metric',
 * };
 * const requestUrl = buildRequestUrl(baseUrl, params);
 * console.log(requestUrl);
 * // Output: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key&units=metric'
 */
export function buildRequestUrl(
  baseUrl: string,
  params: Record<string, unknown>
): string {
  const url = new URL(baseUrl);
  const searchParams = new URLSearchParams(url.search);

  for (const [key, value] of Object.entries(params)) {
    value && searchParams.set(key, `${value}`);
  }

  url.search = searchParams.toString();
  return url.toString();
}

/**
 * 根據輸入的日期和時區偏移量，計算並返回該時區的當地時間。
 *
 * @param {string | number | Date} date - 輸入的日期，可以是字串、數字或 Date 對象。
 * @param {number} timezone - 時區偏移量（以秒為單位）。
 * @returns {Date} - 計算出的該時區的當地時間。
 *
 * @example
 * // 使用日期字串
 * const localTime = getLocalTime('2024-07-25T12:00:00Z', 3600);
 * console.log(localTime); // 根據 UTC+1 時區的當地時間
 *
 * @example
 * // 使用時間戳（毫秒）
 * const localTime = getLocalTime(1658764800000, -14400);
 * console.log(localTime); // 根據 UTC-4 時區的當地時間
 *
 * @example
 * // 使用 Date 對象
 * const localTime = getLocalTime(new Date(), 28800);
 * console.log(localTime); // 根據 UTC+8 時區的當地時間
 */
export function getLocalTime(
  date: string | number | Date,
  timezone: number
): Date {
  // 步驟 1: 將本地時間轉換為Date對象
  const localDate = new Date(date);
  // 步驟 2: 將本地時間轉換為UTC時間（毫秒）
  const utcTime = localDate.getTime() + localDate.getTimezoneOffset() * 60000;
  // 步驟 3: 根據該時區偏移計算該地區時間
  const localTime = new Date(utcTime + timezone * 1000);

  return localTime;
} 
