'use client'
import ImageGallery from '@/components/global/gallery'
import { HomepageWrapper } from '@/components/page/auth/signin/style'

function Homepage({images} : { images: ImageItem[]}) {
  return (
    <HomepageWrapper>
      <div>
        <h1>Trending Photos...</h1>
        <ImageGallery data={images} />
      </div>
    </HomepageWrapper>
     
                
             
  )
}

export default Homepage
