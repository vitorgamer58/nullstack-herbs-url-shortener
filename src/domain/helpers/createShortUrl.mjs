import crypto from 'crypto'

/**
 * Creates a shortened ID from a given long URL.
 *
 * @function
 * @param {string} longUrl - The long URL to shorten.
 * @returns {string} The shortened Id.
 * @example
 * const longUrl = 'https://www.example.com/very/long/url';
 * const result = createShortUrl(longUrl);
 * console.log(result);  // Outputs: '3f48a6b' (example output)
 */
export const createShortId = (longUrl) => {
  const timestamp = new Date().getTime()
  const hashInput = `${longUrl}-${timestamp}`

  const hash = crypto.createHash('md5').update(hashInput).digest('hex')

  const shortId = hash.slice(0, 7)

  return shortId
}
