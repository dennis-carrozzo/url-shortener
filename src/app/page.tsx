'use client'

import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import UrlShortenerForm from '@/components/UrlShortenerForm'
import GeneratedUrl from '@/components/GeneratedLink'
import GeneratedUrlContext from '@/context/generatedUrl'
function Home () {
  const [url, setUrl] = useState<string>('')
  return (
    <GeneratedUrlContext.Provider value={{ url, setUrl }}>
      <Stack
        justifyContent='center'
        alignItems='center'
        rowGap={10}
        sx={{ width: '100vw', height: '100vh' }}
      >
        <Typography variant='h4' component='h1' align='center'>
          Url Shortener
        </Typography>
        <GeneratedUrl />
        <UrlShortenerForm />
      </Stack>
    </GeneratedUrlContext.Provider>
  )
}

export default Home
