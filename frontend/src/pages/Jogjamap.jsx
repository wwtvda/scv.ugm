import React, { useRef, useEffect } from 'react'

const { tableau } = window;

function Index() {
  const ref = useRef(null);
  const url = 'https://public.tableau.com/views/Statistik-rev5-ver5_16298611318650/Dashboard1'

  const initViz = () => {
    new tableau.Viz(ref.current, url, {
      width: "100%",
      height: "435vh",
    })
  }

  useEffect(initViz, []);
  return (
          <div ref={ref} />
  )
}

export default Index
