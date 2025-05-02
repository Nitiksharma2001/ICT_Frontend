import { parametersData } from '../../utils/data'
import { DataSourceType, ColumnType } from '../../components/table/table-type'
interface PromiseApiType {
  data: {
    columns: ColumnType
    dataSource: DataSourceType[]
    total: number
  }
}

export async function getParameterData(parameterName: keyof typeof parametersData): Promise<PromiseApiType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve({ data: parametersData[parameterName] })
    }, 1000)
  })
}
