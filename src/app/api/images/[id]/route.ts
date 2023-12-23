import { db } from '@/utils/authentication/firebase'
import { Collections, Errors, Mod, Tags } from '@/utils/constants/api.constants'
import { getDocument } from '@/utils/helpers/firebase.util'
import { doc, updateDoc } from 'firebase/firestore'
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'


export async function PUT(request: Request, { params } : { params : { id: string }}) {
  try {
    const body = await request.json()
    const id = params.id
    const imageSnapshot = await getDocument(Collections.images, id)
    const data = imageSnapshot.data() 
    const newLikes = body.mod === Mod.like ? data?.likes + 1 : data?.likes  - 1
    if (!imageSnapshot.exists) {
      return NextResponse.json({ msg: Errors.notFound }, { status: 404 })
    } else {
      await updateDoc(doc(db, Collections.images, id), {
        ...data,
        likes: newLikes
      })
      revalidateTag(Tags.images)
      return NextResponse.json(newLikes, { status: 200 })
    }
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 400 })
  }
}
