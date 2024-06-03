'use client'
import { Diagram } from '@/app/(authenticated)/(diagram)/components/Diagram'
import { Navigation } from '@/app/(authenticated)/components/Navigation'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import { Modals } from '../../../components/Modals'
import { useModal } from '../../../hooks/useModal'
import { WfRunResponse } from '../getWfRun'
import { Details } from './Details'
import { Variables } from './Variables';

export const WfRun: FC<WfRunResponse> = ({ wfRun, wfSpec, nodeRuns, variables }) => {
  const { modal, showModal } = useModal()
  const searchParams = useSearchParams()
  const threadRunNumber = Number(searchParams.get('threadRunNumber'))
  return (
    <div className='mb-16'>
      <Navigation
        href={`/wfSpec/${wfRun.wfSpecId?.name}/${wfRun.wfSpecId?.majorVersion}/${wfRun.wfSpecId?.revision}`}
        title="Go back to WfSpec"
      />
      <Details {...wfRun} />
      <Diagram spec={wfSpec} wfRun={wfRun} nodeRuns={nodeRuns} />

      <Variables
        variableDefs={wfSpec.threadSpecs[wfRun.threadRuns[threadRunNumber].threadSpecName].variableDefs}
        variables={variables.filter(v => v.id?.threadRunNumber == Number(searchParams.get('threadRunNumber')))}
      />
      <Modals />
    </div>
  )
}
