import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const browserName = req.ua.browser.name?.toLowerCase()

  if (browserName !== 'safari') {
    return NextResponse.redirect(`/${browserName}/demo`)
  }
}