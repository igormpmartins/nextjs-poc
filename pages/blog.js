// Terceira forma - ●  (SSG) 
// Ao dar build, ele gera com os dados obtidos nesse momento

import Link from 'next/link'

const Blog = ({posts}) => {
    return (
        <div>
            <h2>Blog - SSG</h2>
            <ul>
            {posts.map(post => { 
                return (
                    <li key='{post.id}'>
                        <Link href={'/posts/' + post.id}>
                        <a>{post.title}</a>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
export async function getStaticProps(context) {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataJson = await data.json()

    const convData = dataJson.map(item => {
        return ({
            id: item.id,
            title: item.title
        })
    })

    return {
        props: {
            date: new Date().getTime(),
            posts: convData
        }
    }
}

export default Blog