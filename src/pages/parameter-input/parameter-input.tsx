import MainWrapper from '../main'
import AccordionJSX from '../../components/UI/accordion/accordion'
import TableJSX from '../../components/table/table'
import CardJSX from '../../components/card/card'
import RadioJSX from '../../components/UI/radio/radio'
import { useState } from 'react'
import { engineNames } from '../../utils/constants'
import { Space, Typography } from 'antd'
import { filterType } from '../../components/table/table-type'
import useParameter from '../../hooks/table/use-parameter'

const { Title } = Typography

export default function ParameterInput() {
  const [fillRateIntegration, setFillRateIntegration] = useState('yes')

  const radioOptions = [
    { key: 'yes', value: 'Yes' },
    { key: 'no', value: 'No' },
  ]

  return (
    <MainWrapper title={'View Parameters'}>
      <Space direction='vertical' size='large' style={{ width: '100%', padding: '2px 10px' }}>
        {/* Card section */}
        <CardJSX>
          <Space direction='vertical' style={{ width: '100%' }}>
            <Title
              level={5}
              style={{
                margin: 0,
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                color: '#929497',
              }}
            >
              Fill Rate Integration in Replenishment
            </Title>
            <RadioJSX
              values={radioOptions}
              selectedValue={fillRateIntegration}
              onChange={(e) => setFillRateIntegration(e.target.value)}
            />
          </Space>
        </CardJSX>

        {/* Accordion section */}
        {engineNames.map((engine) => (
          <AccordionTableJSX engine={engine} />
        ))}
      </Space>
    </MainWrapper>
  )
}

function AccordionTableJSX({ engine }: { engine: (typeof engineNames)[0] }) {
  const [filters, setFilters] = useState<filterType>({ page: 1, limit: 10 })
  const { data, isLoading } = useParameter(engine.key, filters)

  function updateFilters(updateFilters: Record<string, string | number>) {
    setFilters({ ...filters, ...updateFilters })
  }

  const accordionItem = [
    {
      label: <div style={{ fontSize: '14px', fontWeight: 600 }}>{engine.title}</div>,
      children: (
        <TableJSX
          data={data}
          isLoading={isLoading}
          isPagination={true}
          filters={filters}
          updateFilters={updateFilters}
        />
      ),
    },
  ]

  return <AccordionJSX items={accordionItem} />
}
