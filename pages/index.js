//01 - Página estática -> ○  (Static)
import {useEffect, useState} from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

const Home = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setCount(a => a + 1)
        }, 1000)
    }, [])

    const { data, error} = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
    console.log(data)

    return (
        <>
            <h2>Página Princ</h2>
            <Link href='/ssr'>
                <a>SSR | </a>
            </Link>
            <Link href='/blog'>
                <a>Blog - SSG</a>
            </Link>
            <p>Contagem: {count}</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default Home