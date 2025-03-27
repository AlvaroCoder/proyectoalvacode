import React from 'react'
import { Skeleton } from '../ui/skeleton'

export default function SkeletonCardPost() {
  return (
    <div className='rounded-lg p-8   min-h-80 mt-4'>
      
      <Skeleton
          className='rounded-lg w-full min-h-40 bg-azul_oscuro_claro'
        />
      <Skeleton
        className='mt-4 min-h-10 bg-azul_oscuro_claro'
      />
      <Skeleton
        className='mt-4 min-h-10 bg-azul_oscuro_claro'
      />
    </div>
  )
}
