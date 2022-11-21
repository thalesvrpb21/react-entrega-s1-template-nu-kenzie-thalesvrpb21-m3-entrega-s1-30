import "./Header.css"

function Header ({page}) {
    return (
        <header className="header">
            <h1> <strong>Nu</strong> Kenzie</h1>
            <button onClick={event => page(true)}>Inicio</button>
        </header>
    )
}

export default Header