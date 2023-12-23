import { Collections } from '@/utils/constants/api.constants'
import { getDocuments } from '@/utils/helpers/firebase.util'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const querySnapshot = await getDocuments(Collections.images)
    if (querySnapshot.empty) {
      return NextResponse.json([], { status: 200 })
    } else {
      const documents =
        querySnapshot.docs?.map((doc) => {
          const data = doc.data()
          return { imageId: doc.id, ...data }
        }) ?? []

      return NextResponse.json(documents, { status: 200 })
    }
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 400 })
  }
}
