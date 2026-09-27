/**
 * The landing page is a separate Next.js app from web-app (different
 * stack: MUI here, Tailwind/DaisyUI there), so "Sign in" / "Get started"
 * CTAs link out to web-app's own routes rather than rendering forms here.
 * NEXT_PUBLIC_APP_URL should point at wherever web-app is deployed; falls
 * back to the local dev port so `next dev` works out of the box.
 */
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

export const APP_LINKS = {
  signIn: `${APP_URL}/sign-in`,
  customerSignUp: `${APP_URL}/sign-up`,
  solverSignIn: `${APP_URL}/solver/sign-in`,
  solverSignUp: `${APP_URL}/solver/sign-up`,
} as const
