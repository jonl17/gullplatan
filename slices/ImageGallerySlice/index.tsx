import ImageGallery from '~/components/ImageGallery'

interface IImageGallerySlice {
  slice: any
}

const ImageGallerySlice = ({ slice }: IImageGallerySlice) => {
  return <ImageGallery />
}

export default ImageGallerySlice
