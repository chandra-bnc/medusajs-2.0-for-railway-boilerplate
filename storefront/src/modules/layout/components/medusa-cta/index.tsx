import { Text } from "@medusajs/ui"

import BoxNCase from "../../../common/icons/boxncase"
import NextJs from "../../../common/icons/nextjs"

const BoxNCaseCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://boxncase.com" target="_blank" rel="noreferrer">
        <BoxNCase fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
      &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a>
    </Text>
  )
}

export default BoxNCaseCTA
