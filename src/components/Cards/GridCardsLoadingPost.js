import React from 'react'
import { LoadingCardPost } from '../Loading'

export default function GridCardsLoadingPost() {
    const dataJSON = [
        "","","","",""
      ]
  return (
    <section
        className=''
    >
        {
            dataJSON.map((_, key)=><LoadingCardPost key={key} />)
        }
    </section>
  )
}
