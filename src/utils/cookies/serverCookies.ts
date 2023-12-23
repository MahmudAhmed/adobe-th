// 'use server'
// import { cookies, headers } from 'next/headers'
// import { decryptToken, encryptToken } from '../helpers/encryption'

// export const getServerCookie = (key) => {
//   const serverCookies = cookies()
//   return serverCookies.get(key)?.value || null
// }

// export const setServerCookie = ({ key, value, expires, httpOnly, secure }) => {
//   const serverCookies = cookies()
//   const oneDay = 24 * 60 * 60 * 1000
//   expires = expires ?? Date.now() + oneDay
//   serverCookies.set(key, value, { expires, httpOnly, secure })
// }

// export const getServerHeaders = (key) => {
//   const headersList = headers()
//   const referer = headersList.get(key)
//   return referer || null
// }

// export const setEncryptedServerCookie = ({ key, value, expires, httpOnly, secure }) => {
//   const encrypted = encryptToken(value)
//   setServerCookie({
//     key,
//     value: encrypted,
//     expires,
//     httpOnly,
//     secure,
//   })
// }

// export const getEncryptedServerCookie = (key: string) => {
//   const encryptedToken = getServerCookie(key)
//   const token = decryptToken(encryptedToken)
//   return token
// }
