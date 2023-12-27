import Image from "next/image"
import LogoImage from '@statics/logo.png'

export const Logo = () => {
  return (
    <Image src={LogoImage} alt="Aldino FNT" width={120} />
  )
}
