/* The CommonUrlShortenerService class provides a static method to validate URLs using a regular
expression. */
export default class CommonUrlShortenerService {
  static validateUrl = (url: string) => {
    return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
      url
    )
  }
}
