import CommonUrlShortenerService from '@/services/UrlShortenerService/common'

/* The UrlShortenerServerService is a class that extends a CommonUrlShortenerService
and provides a static method to post a URL and return a shortened link using the Bitly API. */
export default class UrlShortenerServerService extends CommonUrlShortenerService {
  static postUrl = async (url: string) => {
    try {
      const isValidUrl = this.validateUrl(url)
      if (!isValidUrl) {
        throw new Error('invalid url')
      }
      const result = await fetch(process.env.BITLY_API_URL as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.BITLY_API_TOKEN}`
        },
        body: JSON.stringify({ long_url: url })
      })
      if (!result.ok) {
        throw new Error('error getting url')
      }
      const { link } = await result.json()
      return link
    } catch (e) {
      console.log({ e })
      return e
    }
  }
}
