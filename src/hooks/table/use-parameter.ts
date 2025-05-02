import { useEffect, useState } from 'react'
import { ColumnType, DataSourceType, filterType } from '../../components/table/table-type'
import { updateColumns } from '../../components/table/helper'
import { getParameterDataa } from '../../apis/table/table'
import { parametersData } from '../../utils/data'

interface DataType {
  columns: ColumnType
  dataSource: DataSourceType[]
  total: number
}

export default function useParameter(key: string, filters: filterType) {
  const [data, setData] = useState<DataType>({ columns: [], dataSource: [], total: 0 })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    getParameterDataa(key, filters)
      .then((data) => {
        setData({ ...data, dataSource: data.data, columns: updateColumns(data.columns, data.data) })
      })
      .finally(() => {
        setIsLoading(false)
      })
    // if (key === 'scenario-summary' || key === 'view-details') {
    //   setData({
    //     ...parametersData[key],
    //     columns: updateColumns(parametersData[key].columns, parametersData[key].dataSource),
    //   })
    //   setIsLoading(false)
    // } else {
    //   getParameterDataa(key, filters)
    //     .then((data) => {
    //       setData({ ...data, dataSource: data.data, columns: updateColumns(data.columns, data.data) })
    //     })
    //     .finally(() => {
    //       setIsLoading(false)
    //     })
    // }
  }, [filters, key])

  return {
    data,
    isLoading,
  }
}
