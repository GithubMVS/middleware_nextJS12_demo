import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {

  const { nextUrl: url, geo } = req

  const country = req.geo.country
  const latitude = req.geo.latitude
  const longitude = req.geo.longitude
  const city = req.geo.city
  const region = req.geo.region

  url.searchParams.set('country', country)
  url.searchParams.set('latitude', latitude)
  url.searchParams.set('longitude', longitude)
  url.searchParams.set('city', city)
  url.searchParams.set('region', region)

  return NextResponse.rewrite(url);
}