import { useState } from 'react'
import MainWrapper from '../main'
import ButtonJSX from '../../components/UI/button/button'
import PlusIcon from '../../assets/icons/plus-icon.svg'
import TableJSX from '../../components/table/table'
import SearchJSX from '../../components/search/search'
import DropdownJSX from '../../components/dropdown/dropdown'
import { Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { filterType } from '../../components/table/table-type'
import useParameter from '../../hooks/table/use-parameter'

const { Text } = Typography

export default function WhatIfAnalysis() {
  const [filters, setFilters] = useState<filterType>({ page: 1, limit: 10 })
  const { data, isLoading } = useParameter('scenario-summary', filters)
  
  const navigate = useNavigate()

  function updateFilters(updateFilters: filterType) {
    setFilters({ ...filters, ...updateFilters })
  }
  const handleSearch = (value: string) => {
    console.log('Search:', value)
  }
  const handleDropdownChange = (value: string | number | undefined) => {
    console.log('Selected:', value)
  }
  const handleCreateScenarioClick = () => {
    navigate('/what-if-analysis/sync-scenario')
  }

  return (
    <MainWrapper title='What If Analysis'>
      <Flex vertical gap={12}>
        <Flex justify='space-between' align='flex-start' style={{ padding: '0 20px' }}>
          <Text
            style={{
              fontWeight: 600,
              fontSize: '16px',
              color: '#333',
              whiteSpace: 'nowrap',
            }}
          >
            Scenario Summary
          </Text>

          <Flex gap='12px' wrap='wrap' align='flex-end'>
            <Flex vertical gap='4px'>
              <Text style={{ fontSize: '14px', color: '#404041' }}>Scenario Name</Text>
              <SearchJSX placeholder='Search by scenario name' onSearch={handleSearch} style={{ width: 305 }} />
            </Flex>

            <Flex vertical gap='4px'>
              <Text style={{ fontSize: '14px', color: '#404041' }}>Location Type</Text>
              <DropdownJSX
                placeholder='All'
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                ]}
                onChange={handleDropdownChange}
                style={{ width: 105 }}
              />
            </Flex>

            <Flex vertical gap='4px'>
              <Text style={{ fontSize: '14px', color: '#404041' }}>Location Name</Text>
              <DropdownJSX
                placeholder='All'
                options={[
                  { label: 'A', value: 'A' },
                  { label: 'B', value: 'B' },
                ]}
                onChange={handleDropdownChange}
                style={{ width: 105 }}
              />
            </Flex>

            <Flex justify='flex-end'>
              <ButtonJSX
                label='Create Scenario'
                icon={<img src={PlusIcon} alt='plus' style={{ width: 16, height: 16, marginTop: 5 }} />}
                onClick={handleCreateScenarioClick}
              />
            </Flex>
          </Flex>
        </Flex>
        
        <TableJSX
          data={data}
          isLoading={isLoading}
          filters={filters}
          updateFilters={updateFilters}
          isPagination={false}
        />
      </Flex>
    </MainWrapper>
  )
}
