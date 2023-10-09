import { Suspense, useState } from 'react'
import Phones from './components/phones/Phones'
import Axios from './components/Axios/Axios'
import Swr from './components/swr/Swr'
import ReactQuery from './components/reactQuery/ReactQuery'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
    const [count, setCount] = useState(0)

    const client = new QueryClient();

    return (
        <>
            <h2 className='bg-green-400 text-4xl font-bold p-4 text-center uppercase'>
                4 Ways to fetch data
            </h2>

            {/* <Axios /> */}
            <Suspense fallback={<h1> Loading.... </h1>}>
                <Swr />
            </Suspense>


            <QueryClientProvider client={client}>
                <ReactQuery />
            </QueryClientProvider>

        </>
    )
}

export default App
