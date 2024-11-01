const ASSET_URL = import.meta.env.VITE_BASE_URL + '/uploads/'
export  const toLinkAsset = (filename: string) => {
  return ASSET_URL + filename
}