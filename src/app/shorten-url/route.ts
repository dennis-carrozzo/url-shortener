import { NextResponse } from 'next/server'
import UrlShortenerServerService from '@/services/UrlShortenerService/server'

export async function POST (request: Request) {
  const { url } = await request.json()
  const link = await UrlShortenerServerService.postUrl(url)
  return NextResponse.json({ link })
}
