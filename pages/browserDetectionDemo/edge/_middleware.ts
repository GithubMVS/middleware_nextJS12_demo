import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const browserName = req.ua.browser.name?.toLowerCase()

  if (browserName !== 'edge') {
    return NextResponse.redirect(`/browserDetectionDemo/${browserName}/demo`)
  }
}