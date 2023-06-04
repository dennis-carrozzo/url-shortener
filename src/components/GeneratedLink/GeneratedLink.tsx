import { useContext, useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import generatedUrlContext from '@/context/generatedUrl/generatedUrl'

/**
 * This is a React component that displays a generated URL and allows the user to copy it to the
 * clipboard.
 */
export default function GeneratedUrl () {
  const [copied, setCopied] = useState<boolean>(false)
  const { url } = useContext(generatedUrlContext)

  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 5000)
    } catch (err) {
      setCopied(false)
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{
        display: !!url ? 'block' : 'none',
        position: 'relative',
        border: '1px solid lightblue',
        padding: 5,
        cursor: 'pointer'
      }}
      onClick={copyUrlToClipboard}
    >
      <Typography variant='subtitle1'>Here's the shortened Link:</Typography>
      <Typography variant='subtitle2'>👉 {url}</Typography>
      {copied && (
        <Typography
          variant='caption'
          sx={{
            position: 'absolute',
            bottom: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'primary.main'
          }}
        >
          Copied ✔
        </Typography>
      )}
    </Stack>
  )
}
