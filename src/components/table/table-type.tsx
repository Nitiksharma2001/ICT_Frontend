import { TableProps } from "antd"

export type DataSourceType = Record<string, string | number>

export type ColumnType = TableProps<DataSourceType>['columns']

export type filterType = Record<string, string | number>
export interface TableJSXProps {
  data: {
    columns: ColumnType
    dataSource: DataSourceType[]
    total: number
  }
  filters: filterType
  updateFilters: (filters: filterType) => void
  isPagination?: boolean
  isLoading?: boolean
}
