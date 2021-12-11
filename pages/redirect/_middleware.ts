import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  console.log('This is run at the edge!!!')

  const browserName = req.ua.browser.name?.toLowerCase() || 'Safari'
  console.log(browserName)

  if (browserName === 'chrome') {
    return NextResponse.redirect("/chrome/demo")
  }

  if (browserName === 'safari') {
    return NextResponse.redirect("/safari/demo")
  }

  if (browserName === 'edge') {
    return NextResponse.redirect("/edge/demo")
  }

  if (browserName === 'firefox') {
    return NextResponse.redirect("/firefox/demo")
  }

  if (browserName !== 'chrome' || 'safari' || 'edge' || 'firefox') {
    return NextResponse.redirect("/unsupported_browser/demo")
  }
}