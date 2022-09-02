import { createClient, linkResolver } from '@root/prismicio'
import { ImageType, IMenu, ISocialMedia } from '~/types'

const resolveMenuItem = (menuItem: any): IMenu => ({
  label: menuItem.data.label,
  svgImage: menuItem.data.svg_title,
  submenu: menuItem.data.submenu.map((item: any) => ({
    label: item.label,
    url: linkResolver(item.link),
  })),
  image: menuItem.data.image,
})

export const serviceGlobalSettings = async () => {
  const client = createClient()
  const globalSettings = await client.getSingle('global_settings')
  const mainmenu = await client.getAllByIDs(
    globalSettings.data.main_menu.map((item: any) => item.menu.id)
  )
  const heroImages: Array<ImageType> = [
    globalSettings.data.front_left_image,
    globalSettings.data.front_right_image,
  ]
  const menu = mainmenu.map(resolveMenuItem)

  const title: string = globalSettings.data.page_title

  return { menu, heroImages, title }
}

export const serviceFooter = async () => {
  const client = createClient()
  const result = await client.getSingle('footer')
  return result.data
}

export const serviceContactInformation = async () => {
  const client = createClient()
  const result = await client.getSingle('global_settings')
  return {
    email: result.data.email.url as string,
    socialMedia: result.data.social_media as ISocialMedia[],
  }
}
