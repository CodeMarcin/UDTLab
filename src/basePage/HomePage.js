import React from 'react'

import CardContainer from '../components/CardContainer/CardContainer'
import TopBanner from '../components/TopBanner/TopBanner'
import Accessibility from '../components/Accessibility/Accessibility'
import Offert from '../components/Offert/Offert'

const HomePage = () => {
  return (<>
     <div style={{ backgroundColor: 'var(--clr-one)', marginTop: '3rem' }}>
        <CardContainer>
          <TopBanner />
        </CardContainer>
      </div>

      <CardContainer>
        <Accessibility />
        <Offert />
      </CardContainer>
    </>
  )
}

export default HomePage