import CryptoJS from 'crypto-js'

type Event = {
  event: string
  [key: string]: unknown
}

export const sha256 = (value: string): string =>
  CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex)

export const track = ({ event, ...payload }: Event): void => {
  window.dataLayer = window.dataLayer || []

  window.dataLayer.push({
    event,
    ...payload,
  })
}
