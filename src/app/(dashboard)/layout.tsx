import { onLoginUser } from '@/actions/auth';
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Ownerlayout = async ({ children }: Props) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null
  return (
    <div>Ownerlayout</div>
  )
}

export default Ownerlayout