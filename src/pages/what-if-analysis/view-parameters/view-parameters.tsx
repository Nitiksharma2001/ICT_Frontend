import MainWrapper from '../../main'
import CardJSX from '../../../components/card/card'
import backSvg from '../../../assets/icons/left_Icon.svg'
import AccordionJSX from '../../../components/UI/accordion/accordion'
import TableJSX from '../../../components/table/table'
import useParameter from '../../../hooks/table/use-parameter'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Flex, Typography } from 'antd'
import { engineNames } from '../../../utils/constants'
import { filterType } from '../../../components/table/table-type'

const { Text } = Typography

export default function ViewParameters() {
  const navigate = useNavigate()
  const { id } = useParams() as { id: string }

  const txt = { fontFamily: 'Poppins', fontSize: 14, color: '#404041' }

  return (
    <MainWrapper title='What If Analysis'>
      <Flex vertical gap={12}>
        <CardJSX>
          <Flex gap={24} align='center' wrap='nowrap'>
            <div
              onClick={() => navigate(`/what-if-analysis/view-details/${id}`)}
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <img src={backSvg} alt='back' />
            </div>

            <Flex gap={42} wrap='nowrap'>
              <Flex vertical gap={4}>
                <Text style={{ color: '#929497' }}>Enter Scenario Name</Text>
                <Text style={txt}>Scenario Name 1</Text>
              </Flex>
              <Flex vertical gap={4}>
                <Text style={{ color: '#929497' }}>Select Planning Horizon</Text>
                <Text style={txt}>
                  Start Date
                  <span style={{ display: 'inline-block', marginLeft: 8 }}>03/09/2023</span>
                  <span style={{ display: 'inline-block', marginLeft: 16 }}>End Date</span>
                  <span style={{ display: 'inline-block', marginLeft: 8 }}>02/02/2025</span>
                </Text>
              </Flex>
              <Flex vertical gap={4}>
                <Text style={{ color: '#929497' }}>Fill Rate Integration in Replenishment</Text>
                <Text>Yes</Text>
              </Flex>
            </Flex>
          </Flex>
        </CardJSX>

        {engineNames.map((engine) => (
          <AccordionTableJSX engine={engine} />
        ))}
      </Flex>
    </MainWrapper>
  )
}

function AccordionTableJSX({ engine }: { engine: (typeof engineNames)[0] }) {
  const [filters, setFilters] = useState<filterType>({ page: 1, sizePerPage: 10 })
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
