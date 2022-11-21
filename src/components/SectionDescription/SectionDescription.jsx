import "./SectionDescription.css"

function SectionDescription ({page}) {
    return (
        <section className="description">
            <h1> <strong>Nu</strong> Kenzie</h1>

            <h2>Centralize o controle das suas finanças</h2>

            <p>de forma rápida e segura</p>

            <button onClick={ event => page(false)}>iniciar</button>
        </section>
    )
}

export default SectionDescription