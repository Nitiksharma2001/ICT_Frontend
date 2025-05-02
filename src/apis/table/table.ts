import { filterType } from '../../components/table/table-type'
import { axiosClient } from '../instance'

export async function getParameterDataa(parameterName: string, body: filterType) {
  const { data } = await axiosClient({ url: `/paramInput/engines/${parameterName}`, data: body, method: 'post' })
  return data
}
