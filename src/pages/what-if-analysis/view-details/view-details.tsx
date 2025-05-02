import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Select, Flex, Button } from 'antd'
import MainWrapper from '../../main'
import CardJSX from '../../../components/card/card'
import TableJSX from '../../../components/table/table'
import useParameter from '../../../hooks/table/use-parameter'
import { filterType } from '../../../components/table/table-type'

const { Text } = Typography
const { Option } = Select

type FilterMap = Record<string, string | number>
type OptionMap = { [key: string]: string[] }

export default function ViewDetails() {
  const [filters, setFilters] = useState<filterType>({ page: 1, limit: 10 })
  const { data, isLoading } = useParameter('view-details', filters)

  function updateFilters(updateFilters: Record<string, string | number>) {
    setFilters({ ...filters, ...updateFilters })
  }
  const { id } = useParams() as { id: string }

  const dropdownLabels: string[] = [
    'Location Type',
    'Location Name',
    'Category',
    'Segment',
    'Region',
    'SourceWarehouse/Supplier Site',
    'City',
  ]

  const [selectedFilters, setSelectedFilters] = useState<FilterMap>({})
  const [options, setOptions] = useState<OptionMap>({})

  const fetchOptions = async (selected: FilterMap) => {
    const baseOptions: OptionMap = {
      'Location Type': ['Warehouse', 'Retail', 'Supplier'],
      'Location Name': selected['Location Type'] === 'Warehouse' ? ['WH1', 'WH2'] : ['Store1', 'Store2'],
      Category: ['Food', 'Electronics', 'Clothing'],
      Segment: selected['Category'] === 'Electronics' ? ['Phones', 'Laptops'] : ['General'],
      Region: ['North', 'South', 'East', 'West'],
      'SourceWarehouse/Supplier Site': ['Site A', 'Site B', 'Site C'],
      City: selected['Region'] === 'North' ? ['Delhi', 'Chandigarh'] : ['Mumbai', 'Bangalore'],
    }

    setOptions(baseOptions)
  }

  useEffect(() => {
    fetchOptions(selectedFilters)
  }, [selectedFilters])

  const handleChange = (label: string, value: string | number) => {
    const updatedFilters: FilterMap = { ...selectedFilters, [label]: value }
    const startIndex = dropdownLabels.indexOf(label)
    for (let i = startIndex + 1; i < dropdownLabels.length; i++) {
      delete updatedFilters[dropdownLabels[i]]
    }
    setSelectedFilters(updatedFilters)
  }

  return (
    <MainWrapper title='View Details'>
      <Flex vertical gap='12px'>
        <CardJSX>
          <Flex wrap='wrap' gap='16px'>
            {dropdownLabels.map((label, index) => {
              const isSpecial = label === 'SourceWarehouse/Supplier Site'
              return (
                <Flex
                  key={index}
                  vertical
                  gap='4px'
                  style={{
                    flex: 1,
                    maxWidth: 'calc(33.33% - 16px)',
                  }}
                >
                  {isSpecial ? (
                    <Text
                      type='secondary'
                      style={{
                        width: '136px',
                        whiteSpace: 'normal',
                        lineHeight: 1.2,
                        wordBreak: 'break-word',
                        color: '#333',
                      }}
                    >
                      <span>SourceWarehouse/</span>
                      <br />
                      <span>Supplier Site</span>
                    </Text>
                  ) : (
                    <Text
                      type='secondary'
                      style={{
                        whiteSpace: 'nowrap',
                        height: '3rem',
                        verticalAlign: 'bottom',
                        display: 'flex',
                        alignItems: 'flex-end',
                        fontFamily: 'Poppins',
                        color: '#333',
                      }}
                    >
                      {label}
                    </Text>
                  )}

                  <Select
                    placeholder='All'
                    value={selectedFilters[label]}
                    onChange={(value) => handleChange(label, value)}
                    style={{
                      fontFamily: 'Poppins',
                      width: isSpecial ? '136px' : '100px',
                    }}
                    allowClear
                  >
                    {(options[label] || []).map((option: string) => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                </Flex>
              )
            })}
          </Flex>
        </CardJSX>

        <Flex vertical gap='10px'>
          <TableJSX
            data={data}
            isLoading={isLoading}
            isPagination={false}
            filters={filters}
            updateFilters={updateFilters}
          />
        </Flex>
        <Button href={`/view-parameters/${id}`} type='link' style={{ alignSelf: 'flex-end', color: 'red' }}>
          View Parameters
        </Button>
      </Flex>
    </MainWrapper>
  )
}
