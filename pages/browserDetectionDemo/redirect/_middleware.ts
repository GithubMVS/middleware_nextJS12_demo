import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {

  const browserName = req.ua.browser.name?.toLowerCase()

  if (browserName === 'chrome') {
    return NextResponse.redirect("/browserDetectionDemo/chrome/demo")
  }

  if (browserName === 'safari') {
    return NextResponse.redirect("/browserDetectionDemo/safari/demo")
  }

  if (browserName === 'edge') {
    return NextResponse.redirect("/browserDetectionDemo/edge/demo")
  }

  if (browserName === 'firefox') {
    return NextResponse.redirect("/browserDetectionDemo/firefox/demo")
  }

  if (browserName !== 'chrome' || 'safari' || 'edge' || 'firefox') {
    return NextResponse.redirect("/browserDetectionDemo/browser_not_supported/demo")
  }

}