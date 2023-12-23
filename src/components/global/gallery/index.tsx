import { GalleryWrapper } from '@/components/global/gallery/style'
import BasicModal from '@/components/global/imageModal'
import Ratings from '@/components/global/ratings'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Gallery({data} : {data: ImageItem[]}) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<ImageItem | null>(null);
  const handleClose = () => {
    setOpen(false)
    setImage(null)
  }
  const handleOpen = () => setOpen(true)

  const handleImageClick = (item:ImageItem) => {
    setImage(item);
  };

  useEffect( () => {
    image && handleOpen()
  }, [image])


  return (
   <> 
      <GalleryWrapper>
        <Grid container spacing={2}>
            {data.map((item) => (
              <Grid xs={6} md={4} lg={3} key={item.img}>
                <Image
                  src={item.img}
                  width={180}
                  height={180}
                  alt={item.title}
                  onClick={(e) => handleImageClick(item)}
                  loading="lazy"
                />
                <Ratings item={item} />
              </Grid>
            ))}
        </Grid>
      </GalleryWrapper>
      {
        image && <BasicModal open={open} handleClose={handleClose} item={image}/>
      }
    </>
  );
}
