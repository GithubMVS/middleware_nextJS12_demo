import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {

  const { nextUrl: url, geo } = req

  const country = req.ua.ua
  const browser = req.ua.browser.name || 'Chrome'
  console.log(country)

  url.searchParams.set('country', country)
  url.searchParams.set('browser', browser)

  return NextResponse.rewrite(url);
}