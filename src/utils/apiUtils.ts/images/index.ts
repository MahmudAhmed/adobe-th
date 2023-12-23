'use server'

import { Tags } from '@/utils/constants/api.constants'
import axios from 'axios'

// import axios from 'axios'

export const getAllImagesFromDB = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/images/`, {
      next: { tags: [Tags.images] },
    })
    if (!res.ok) throw res.statusText
    const resData = await res.json()
    return resData
  } catch (error) {
    console.log('error getting images from firebase:', error)
  }
}

export const updateImageMetaInDB = async (data: ImageItem, mod: string) => {
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/images/${data.imageId}`, {
      method: 'PUT',
      data: {mod},
      headers: {
      "Content-Type": "application/json",
      }
    })
    const resData = await res.data
    return resData
  } catch (error) {
    console.log('error getting images from firebase:', error)
  }
}

