'use client'
import { useContext } from 'react'
import { Formik } from 'formik'
import { FormikValues, FormikHelpers } from 'formik/dist/types'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import ClientUrlShortenerService from '@/services/UrlShortenerService/client'
import generatedUrlContext from '@/context/generatedUrl/generatedUrl'

interface errors {
  url?: string
}

interface values {
  url: string
}

/* This component uses the `useContext`
hook to get the `setUrl` function from the `generatedUrlContext` context. It also imports and uses
the `Formik` component from the `formik` library to handle form validation and submission. */
export default function UrlShortenerForm () {
  const { setUrl } = useContext(generatedUrlContext)
  const validateFormFn = (values: values) => {
    const errors: errors = {}
    if (!values.url) {
      errors.url = 'Required'
    } else if (!ClientUrlShortenerService.validateUrl(values.url)) {
      errors.url = 'Invalid url'
    }
    return errors
  }

  const submitHandler = async (
    values: FormikValues,
    methods: FormikHelpers<values>
  ) => {
    try {
      const link = await ClientUrlShortenerService.postUrl(values.url)
      if (setUrl) {
        setUrl(link)
      }
    } catch (e) {
      console.log(e)
    } finally {
      methods.setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{ url: '' }}
      validate={validateFormFn}
      onSubmit={submitHandler}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Stack
          spacing={2}
          maxWidth='sm'
          direction='column'
          component='form'
          onSubmit={handleSubmit}
        >
          <TextField
            type='text'
            name='url'
            error={!!errors.url}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.url}
            helperText={errors.url}
            label='url'
            color='primary'
          />
          <Button type='submit' disabled={isSubmitting}>
            Shorten
          </Button>
        </Stack>
      )}
    </Formik>
  )
}
