'use client'
import ImageGallery from '@/components/global/gallery'
import { HeaderSection, HomepageWrapper } from '@/components/page/homepage/style'
import { getCurrentUser, logout, signInWithGoogle } from '@/utils/authentication/google'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
function Homepage({ images }: { images: ImageItem[] }) {
  const [userId, setUserId] = useState("")
  useEffect(() => {
    getCurrentUser().then(
      (res) => {
        res && setUserId(res.uid)
      }
    )
  }, [])
  return (
    <HomepageWrapper>
      <div>
        <HeaderSection>
          <h1>Trending Photos...</h1>
          {userId ? (
            <Button variant='contained' onClick={() => logout().then( () => setUserId(""))}>
              Sign Out
            </Button>
          ) : (
            <Button variant='contained' onClick={() => signInWithGoogle().then(user => setUserId(user?.uid ?? ""))}>
              Sign In
            </Button>
          )}
        </HeaderSection>
        <ImageGallery data={images} />
      </div>
    </HomepageWrapper>
  )
}

export default Homepage
