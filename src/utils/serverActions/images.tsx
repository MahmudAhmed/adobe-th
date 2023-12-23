'use server'

import { getAllImagesFromDB, updateImageMetaInDB } from '@/utils/apiUtils.ts/images'
import { Mod } from '@/utils/constants/api.constants'

export async function fetchImagesOnServer() {
  return await getAllImagesFromDB()
}

export async function addLikesToImagesOnServer(item: ImageItem) {
  return await updateImageMetaInDB(item, Mod.like)
}

export async function disikeImagesOnServer(item: ImageItem) {
  return await updateImageMetaInDB(item, Mod.dislike)

}