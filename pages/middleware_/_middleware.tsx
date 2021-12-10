import { NextResponse } from 'next/server'

export function middleware(req: NextResponse) {
  const premiumUser = req.headers.get('authorization')

  if (premiumUser) {
    const auth = premiumUser.split(' ')[1]
    const [user, password] = Buffer.from(auth, 'base64').toString().split(':')

    if (user === 'special' && password === 'special_user') {
      return NextResponse.next()
    }

    // if the password AND username is incorrect redirect to a page it tells them and where they can try again or go to normal homePage
    if (user !== 'special' && password !== 'special_user') {
      return NextResponse.redirect("/wrongPasswordAndUsername")
    }

    // if the password is incorrect redirect to a page it tells them and where they can try again or go to normal homePage
    if (password !== 'special_user') {
      return NextResponse.redirect("/wrongPassword")
    }

    // if the username is incorrect redirect to a page it tells them and where they can try again or go to normal homePage
    if (user !== 'special') {
      return NextResponse.redirect("/wrongUserName")
    }
  }

  // If the user logged in the same products but with a discount of 10%

  // redirect the user back to the begin page if they do not know the password and login.
  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}