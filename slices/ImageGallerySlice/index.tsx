import ImageGallery from "~/components/ImageGallery"

interface IImageGallerySlice {
  slice: any
}

const ImageGallerySlice = ({ slice }: IImageGallerySlice) => {
  console.log(slice)
  return <ImageGallery />
}

export default ImageGallerySlice