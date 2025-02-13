import { Button } from '@/components/ui/button'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { cn } from '@/lib/utils';

export default function ButtonSearch({className=""}) {
  return (
    <Button
        variant="ghost"
        className={cn("bg-amarillo p-5 rounded-full", className)}
    >
        <SearchIcon 
            className='text-azul_oscuro text-xl'
        />
    </Button>
  )
}
