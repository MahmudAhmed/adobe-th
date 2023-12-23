import Homepage from '@/components/page/homepage'
import { fetchImagesOnServer } from '@/utils/serverActions/images'

export default async function Home() {
  const images = await fetchImagesOnServer()
  return (
    <Homepage images={images}/>
  )
}
