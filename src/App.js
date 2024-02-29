import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './router';
import Loading from './pages/Loading'

const App = () => {
  const element = useRoutes(routes)
  return (
    <div style={{ height: "100vh" }}>
      <Suspense fallback={<Loading />}>
        {element}
      </Suspense>

    </div>
  )
}

export default App;
