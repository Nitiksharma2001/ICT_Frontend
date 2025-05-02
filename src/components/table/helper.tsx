import { Avatar, Flex, Typography, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { ColumnType, DataSourceType } from './table-type'

const { Text } = Typography

const filterColumns = [
  'division',
  'category',
  'segment',
  'region',
  'city',
  'locationType',
  'sourceWarehouseOrSupplier',
  'location',
  'supplierSite',
  'sourceWarehouseOrSupplierSite',
]

export function updateColumns(columns: ColumnType, rows: DataSourceType[]) {
  function addDataIndex() {
    return columns!.map((col) => {
      return { ...col, dataIndex: col.key }
    })
  }
  function uniqueValuesList(key: string) {
    return [
      ...new Set(
        rows.map((row) => {
          return {
            text: row[key],
            value: row[key],
          }
        })
      ),
    ]
  }

  return addDataIndex()
    .filter((col) => col.key !== 'key')
    .map((col) => {
      if (col.key === 'currentStatus') {
        return {
          ...col,
          render: ({ key, title }: { key: string; title: string }) => (
            <Tag style={{ textTransform: 'capitalize', color: 'black' }} color={key === 'DONE' ? '#FCF2CF' : '#ACECBE'}>
              {title}
            </Tag>
          ),
        }
      }

      if (col.key === 'remark') {
        return {
          ...col,
          render: (_: any, record: any) => {
            const isDisabled = record.currentStatus.key === 'INPROGRESS'
            const linkStyle = { textDecoration: 'underline', color: '#1890ff' }

            return isDisabled ? (
              <span style={{ color: 'rgba(0,0,0,0.25)', textDecoration: 'underline' }}>view details</span>
            ) : (
              <Link to={`/what-if-analysis/view-details/${record.id}`} style={linkStyle}>
                view details
              </Link>
            )
          },
        }
      }

      if (col.key === 'createdBy') {
        return {
          ...col,
          render: ({ avatar, name }: { avatar: string; name: string }) => (
            <Flex gap='4px' align='center'>
              <Avatar src={avatar} size={30}></Avatar>
              <Text style={{ textWrap: 'nowrap', fontSize: '12px' }}>{name}</Text>
            </Flex>
          ),
        }
      }

      if (filterColumns.includes(col.key as string)) {
        return {
          ...col,
          filters: uniqueValuesList(col.key as string),
          filterSearch: true,
          // @ts-ignore
          onFilter: (value: string, record: DataType) => record[col.key] === value,
          render: (text: string) => <Text style={{ textWrap: 'nowrap', fontSize: '12px' }}>{text}</Text>,
        }
      }
      return {
        ...col,
        render: (text: string) => <Text style={{ textWrap: 'nowrap', fontSize: '12px' }}>{text}</Text>,
      }
    })
}
