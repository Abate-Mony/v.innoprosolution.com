import { Badge } from '@/components/ui/badge'
import React from 'react'

const about = () => {
  return (
    <div>
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>

    </div>
  )
}

export default about