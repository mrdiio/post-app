export { default } from 'next-auth/middleware'

export const config = { matcher: ['/posts/create', '/extra', '/server'] }
