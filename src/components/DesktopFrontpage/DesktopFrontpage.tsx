import { ImageType, IMenu } from '~/types'
import MenuButtonDropdown from '../MenuButtonDropdown/MenuButtonDropdown'

type Props = {
  image: ImageType
  menu: IMenu[]
}

const DesktopFrontpage = ({ image, menu }: Props) => {
  return (
    <div className="relative top-0 w-full hidden lg:block">
      <div>
        {/* <Image
          className="h-full"
          objectFit="contain"

          layout="fill"
          src={image.url}
          alt={image.alt ?? 'frontpage image'}
        /> */}
      </div>

      <div className="w-full">
        <div className="text-center grid gap-2 place-content-center h-full">
          {menu.map((item, key) => (
            <MenuButtonDropdown {...item} key={key} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesktopFrontpage
