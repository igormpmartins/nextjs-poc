//02 - SSR - λ  (Server)
//Ou seja, sempre é renderizada no server e enviada de novo. Recebe 'chumbado' no html esse conteúdo das props
//Naturalmente, vai ser mais lenta, pq. o server precisa processar a page

const pageSSR = (props) => {
    return (
        <div>
            <h2>SSR</h2>
            <p>Página usando Server Side Rendering</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            data: new Date().getTime()
        }
    }
}

export default pageSSR