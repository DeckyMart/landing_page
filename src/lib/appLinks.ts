/**
 * web-app isn't deployed publicly yet, so every "Sign in" / "Get started"
 * CTA on the landing page points at an in-app dummy login screen instead
 * of web-app's real auth routes. Swap these back to web-app's deployed
 * URL (e.g. via NEXT_PUBLIC_APP_URL + '/sign-in') once it's hosted.
 */
export const APP_LINKS = {
  signIn: '/login?role=customer',
  customerSignUp: '/login?role=customer',
  solverSignIn: '/login?role=solver',
  solverSignUp: '/login?role=solver',
} as const
