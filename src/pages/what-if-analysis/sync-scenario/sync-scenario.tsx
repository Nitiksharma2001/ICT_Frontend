import { useState, ReactNode, JSX } from 'react'
import MainWrapper from '../../main'
import CardJSX from '../../../components/card/card'
import ButtonJSX from '../../../components/UI/button/button'
import { Typography, Input, DatePicker, RadioChangeEvent, Flex } from 'antd'
import dayjs from 'dayjs'
import TableJSX from '../../../components/table/table'
import { engineNames } from '../../../utils/constants'
import AccordionJSX from '../../../components/UI/accordion/accordion'
import RadioJSX from '../../../components/UI/radio/radio'
import { showModal } from '../../../redux/modal-slice/modal-slice'
import { AppDispatch } from '../../../redux/store'
import { useAppDispatch } from '../../../redux/hooks'
import { filterType } from '../../../components/table/table-type'
import useParameter from '../../../hooks/table/use-parameter'

const { Text } = Typography

export default function SyncScenario(): JSX.Element {
  const [fillRate, setFillRate] = useState<'yes' | 'no'>('yes')
  const dispatch = useAppDispatch<AppDispatch>()

  return (
    <MainWrapper title='What If Analysis'>
      <Flex vertical gap='12px'>
        <CardJSX>
          <ColumnWrapper>
            <Text type='secondary'>Enter Scenario Name</Text>
            <Input
              placeholder='Scenario Name1'
              style={{
                height: '40px',
                padding: '8px 16px',
                alignSelf: 'stretch',
                border: '1px solid #E6E7E8',
              }}
            />
          </ColumnWrapper>

          <ColumnWrapper>
            <Text type='secondary'>Select Planning Horizon</Text>
            <Flex gap='16px'>
              <Flex align='center' gap='8px'>
                <Text className='sync-sub-label'>Start Date</Text>
                <DatePicker defaultValue={dayjs()} style={{ padding: '4px 8px' }} />
              </Flex>
              <Flex align='center' gap='8px'>
                <Text className='sync-sub-label'>End Date</Text>
                <DatePicker defaultValue={dayjs().add(1, 'month')} style={{ padding: '4px 8px' }} />
              </Flex>
            </Flex>
          </ColumnWrapper>

          <ColumnWrapper>
            <Text type='secondary'>Fill Rate Integration in Replenishment</Text>
            <Flex align='center'>
              <RadioJSX
                values={[
                  { key: 'yes', value: 'Yes' },
                  { key: 'no', value: 'No' },
                ]}
                onChange={(e: RadioChangeEvent) => setFillRate(e.target.value)}
                selectedValue={fillRate}
              />
            </Flex>
          </ColumnWrapper>

          <Flex align='flex-end'>
            <ButtonJSX label='Sync Sharepoint' onClick={() => console.log('Sync Parameter Clicked')} />
          </Flex>
        </CardJSX>

        {engineNames.map((engine) => (
          <AccordionTableJSX engine={engine} />
        ))}
      </Flex>

      <Flex justify='flex-end'>
        <ButtonJSX
          label='Run Scenario'
          onClick={() =>
            dispatch(
              showModal({
                isOpen: true,
                modalTitle: 'Scenario run in progress. Check the alerts for the status.',
                redirectRoute: '/what-if-analysis',
              })
            )
          }
        />
      </Flex>
    </MainWrapper>
  )
}

// ColumnWrapper Props
interface ColumnWrapperProps {
  children: ReactNode
}

function ColumnWrapper({ children }: ColumnWrapperProps): JSX.Element {
  return (
    <Flex vertical justify='space-between'>
      {children}
    </Flex>
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
