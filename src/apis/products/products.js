import { instance } from '../instance'

export async function getProducts() {
  const { data, statusText } = await instance({
    method: 'get',
    url: '/products',
  })

  if (statusText === 'OK') {
    return data
  }
}
