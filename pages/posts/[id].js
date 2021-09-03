// Quarta forma - ISG - Incremental Static Regeneration.
// Permite usar o revalidate (quinta forma)

const Posts = (props) => {
    return (
        <div>
            <h2>Posts - ISG</h2>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}
export async function getStaticProps(context) {
    //notar o revalidate, que diz quando deve atualizado!
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id)
    const dataJson = await data.json()

    return {
        props: {
            data: new Date().getTime(),
            post: {
                id: dataJson.id,
                title: dataJson.title
            }
        },
        revalidate: 60
    }
}

export async function getStaticPaths(context) {
    //Com fallback false, só permite acessar que foi definido aqui.
    //Marcando como true, permite acessar, com a penalidade de fazer a geração no servidor. 
    //Após isso, se mantém! (é possível ver nas pastas do next). 
    
    //Só que isso tem um custo, pois traz a página sem os dados. Isso é problema para indexação, nesse caso,
    //se usa o fallback: 'blocking', que espera a geração (SSR). Nesse caso, seria um ISG

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataJson = await data.json()

    /*aqui iria gerar build de todas as páginas!
    const paths = dataJson.map(path => {
        return {
            params: {
                id: path.id.toString()
            }
        }
    })*/


    return {
        paths: [
            {params: {id: '1'}},
            {params: {id: '5'}}
        ],
        fallback: 'blocking'
    }
}

export default Posts