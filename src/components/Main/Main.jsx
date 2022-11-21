import { useState } from "react"
import "./Main.css"

function Main ({setTransicoes, children, transicoes, setFiltro}) {

    function formulario (event){
        event.preventDefault()

        const obj = {
            descricao: descricao,
            valor: valor,
            opcao: opcao
        }          

        setTransicoes([...transicoes, obj]) 
    }

    const [descricao, setDescricao] = useState("")
    const [valor, setValor]         = useState(1)
    const [opcao, setOpcao]         = useState("Entrada")

    const total = function (transicoes) {
        const arr = transicoes.reduce((contador, valorAtual) =>{

            if(valorAtual.opcao === "Entrada"){

                return contador + Number(valorAtual.valor)
            }
            else{
                return contador - Number(valorAtual.valor)
            }
                
        }, 0)
        return arr
    }

    return (
        <main className="main">
            <section className="novo-valor">
                <div className="card">

                    <form onSubmit={formulario}>
                        <p>Descrição</p>
                        <input className="input-descricao" type="text" placeholder="Digite aqui sua descrição" 
                        value={descricao} onChange={ event => setDescricao(event.target.value)}/>
                        <span className="span-ex">Ex: Compra de roupas</span>
                        <div>
                            <p>Valor</p>
                            <p>Tipo de valor</p>
                        </div>
                        <div>
                        <input type="number" value={valor} onChange={event => setValor(event.target.value)}/>
                        <select value={opcao} onChange={event => setOpcao(event.target.value)}>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesas">Despesas</option>
                        </select>
                        </div>

                        <button type="submit" >Inserir valor</button>
                    </form>
                </div>
               
                <div className="card-total">
                    <div className="caixa-total">
                        <h3>Valor Total:</h3>
                        <span>$ {total(transicoes)}</span>
                    </div>
                    <p>O valor se refere ao saldo</p>
                </div>
               
            </section>

            <section className="resumo">
                <div className="caixa-btn">
                    <h3>Resumo financeiro</h3>
                    <div>

                    <button autoFocus onClick={() => setFiltro("Todos")}>Todos</button>

                    <button onClick={() => setFiltro("Entrada")}>Entradas</button>

                    <button onClick={() => setFiltro("Despesas")}>Despesas</button>

                    </div>
                </div>
                <div>
                    {children}
                </div>
            </section>
        </main>
    )
}

export default Main