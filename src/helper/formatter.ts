import { keyLocalStorage } from "./environment"
import { decryptedText } from "./secure"

const splitIdType = (id: string) => {
  const splitData = id.split('-')
  const data = {
    id: parseInt(splitData[0]),
    type: parseInt(splitData[1])
  }
  return data
}

const getUserLogin = () => {
  const getData = localStorage.getItem(keyLocalStorage);
  let data = null

  if(getData) data = decryptedText(getData)

  return JSON.parse(data)
}

export {splitIdType, getUserLogin};