import axios from 'axios'
import { getSession } from 'next-auth/react'

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

apiInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession()
    if (session && session?.token) {
      config.headers.Authorization = `Bearer ${session?.token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// {
//     "user": {
//         "userId": "ecc9744c-56a4-4dce-8e34-b30f967c4dee",
//         "userPhoneNo": "7001074104",
//         "role": "ROLE_CUST",
//         "password": "$2a$10$.SxdvlcvcSLfjvdi3prpQu9W1PIXhtEWujNFu/cuMF/4tu3b7TVBS",
//         "createdAt": "2024-06-01T16:51:30.847564",
//         "lastModifiedAt": "2024-06-01T16:51:30.847779",
//         "enabled": true,
//         "username": "7001074104",
//         "authorities": [
//             {
//                 "authority": "ROLE_CUST"
//             }
//         ],
//         "accountNonExpired": true,
//         "accountNonLocked": true,
//         "credentialsNonExpired": true
//     },
//     "expires": "2024-06-02T12:06:00.844Z",
//     "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MDAxMDc0MTA0IiwiaWF0IjoxNzE3MjQwOTExLCJleHAiOjE3MTcyNDIzNTF9.Sdgne_Z_C4zDkVJozNsDI8z79tvC5DE6Waa5EWWkkl0",
//     "iat": 1717243210,
//     "exp": 1717329610,
//     "jti": "fc689ce1-260b-4080-9bb5-cdbcd1f4d12f"
// }
