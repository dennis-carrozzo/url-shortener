import { SetStateAction, Dispatch, createContext } from 'react'

interface generatedUrlContextType {
  url: string
  setUrl: Dispatch<SetStateAction<string>> | undefined
}

const generatedUrlContext = createContext<generatedUrlContextType>({
  url: '',
  setUrl: undefined
})

export default generatedUrlContext
