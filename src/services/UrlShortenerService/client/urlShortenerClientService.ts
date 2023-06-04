import CommonUrlShortenerService from '@/services/UrlShortenerService/common'

/* ClientUrlShortenerService is a class that extends CommonUrlShortenerService and provides a static method
to post a URL and receive a shortened link. */
export default class ClientUrlShortenerService extends CommonUrlShortenerService {
  static postUrl = async (url: string) => {
    try {
      const res = await fetch('/shorten-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      })
      if (!res.ok) {
        throw new Error('something went wrong')
      }
      const { link } = await res.json()
      return link
    } catch (e) {
      return e
    }
  }
}
