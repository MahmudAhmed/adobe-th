import { addLikesToImagesOnServer, disikeImagesOnServer } from '@/utils/serverActions/images'
import { useEffect, useState } from 'react'
import { RatingsContainer } from './style'

export default function Ratings({item} : { item: ImageItem}) {
  const [likes, setLikes] = useState(item.likes);
  const [disableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    setLikes(item.likes)
  }, [item])

  const handleLikeClick = async () => {
    setDisableBtn(true)
    const res = await addLikesToImagesOnServer(item)
    setLikes(res)
    setDisableBtn(false)
  }

  const handleDislikeClick = async () => {
    setDisableBtn(true)
    const res = await disikeImagesOnServer(item)
    setLikes(res)
    setDisableBtn(false)
  }

  return (
    <RatingsContainer>
      <div>
        <button disabled={disableBtn} onClick={handleLikeClick}>Like</button>
        <button disabled={disableBtn} onClick={handleDislikeClick}>Dislike</button>
      </div>
      <p>Total: {likes}</p>
    </RatingsContainer>
  );
}
