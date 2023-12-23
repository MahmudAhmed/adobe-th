// 'use server'
// import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto'

// const key = scryptSync(process.env.ENCRYPTION_KEY ?? "", 'salt', 32)
// const ENCRYPT_KEY = Buffer.from(key, 'base64')

// export const encryptToken = (token:string) => {
//   const plaintextJson = JSON.stringify(token)

//   const iv = randomBytes(12)
//   const cipher = createCipheriv('aes-256-gcm', ENCRYPT_KEY, iv)
//   const enc = Buffer.concat([cipher.update(plaintextJson, 'utf8'), cipher.final()])

//   return [enc, iv, cipher.getAuthTag()].map((e) => e.toString('base64')).join('~')
// }

// export const decryptToken = (ciphertext:string) => {
//   const [enc, iv, authTag] = ciphertext.split('~').map((e) => Buffer.from(e, 'base64'))
//   const decipher = createDecipheriv('aes-256-gcm', ENCRYPT_KEY, iv)
//   decipher.setAuthTag(authTag)

//   const plaintext = Buffer.concat([decipher.update(enc, 'utf8'), decipher.final()]).toString()
//   return JSON.parse(plaintext)
// }
