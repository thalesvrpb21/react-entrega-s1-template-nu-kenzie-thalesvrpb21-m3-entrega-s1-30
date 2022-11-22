import lixo from "../../assets/icon/trash.svg"
import "./List.css"

function List ({transicoes, filtro, filtrandoTransicoes, setTransicoes}){
    return (
        <ul>
            <Card transicoes={transicoes} filtro={filtro} filtrandoTransicoes={filtrandoTransicoes}
            setTransicoes={setTransicoes}>

            </Card>
        </ul>
    )
}

export default List

function Card ({transicoes, filtro, filtrandoTransicoes, setTransicoes}){

    function deletar (index){
        
        const arrAtualizado = transicoes.filter((element, id) => id !== index)
        setTransicoes(arrAtualizado)

        
    }

    if(filtro === "Todos"){

        return  filtrandoTransicoes.map((filtrandoTransicoes, index) =>{
                    return <li key={filtrandoTransicoes.id} id={filtrandoTransicoes.id} className="card-li">
                        <div>
                            <h3>{filtrandoTransicoes.descricao}</h3>
                            <span>{filtrandoTransicoes.valor.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                        })}</span>
                            <img src={lixo} alt="icone lixo" onClick={ () => deletar(index) }/>
                        </div>
                        <p>{filtrandoTransicoes.opcao}</p>
                    </li>
                })
    }
    else if (filtro === "Entrada"){

        return  filtrandoTransicoes.map((filtrandoTransicoes, index) =>{
            return <li key={filtrandoTransicoes.id} id={filtrandoTransicoes.id} className="card-li sombra-entrada">
                <div>
                    <h3>{filtrandoTransicoes.descricao}</h3>
                    <span>{filtrandoTransicoes.valor.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                        })}</span>
                    <img src={lixo} alt="icone lixo" onClick={ () => deletar(index) }/>
                </div>
                <p>{filtrandoTransicoes.opcao}</p>
            </li>
        })
        
    }
    else {
        
        return  filtrandoTransicoes.map((filtrandoTransicoes, index) =>{
            return <li key={filtrandoTransicoes.id} id={filtrandoTransicoes.id} className="card-li sombra-despesas">
                <div>
                    <h3>{filtrandoTransicoes.descricao}</h3>
                    <span>{filtrandoTransicoes.valor.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                        })}</span>
                    <img src={lixo} alt="icone lixo" onClick={ () => deletar(index) }/>
                </div>
                <p>{filtrandoTransicoes.opcao}</p>
            </li>
        })
    }

}