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
        console.log(index)
        const arrAtualizado = transicoes.filter((element, id) => id !== index)
        setTransicoes(arrAtualizado)
    }

    if(filtro === "Todos"){

        return  filtrandoTransicoes.map((filtrandoTransicoes, index) =>{
                    return <li key={index} className="card-li">
                        <div>
                            <h3>{filtrandoTransicoes.descricao}</h3>
                            <span>{`R$ ${filtrandoTransicoes.valor.toFixed(2).replace(".", ",")}`}</span>
                            <img src={lixo} alt="icone lixo" onClick={ () => deletar(index) }/>
                        </div>
                        <p>{filtrandoTransicoes.opcao}</p>
                    </li>
                })
    }
    else if (filtro === "Entrada"){

        return  filtrandoTransicoes.map((filtrandoTransicoes, index) =>{
            return <li key={index} className="card-li sombra-entrada">
                <div>
                    <h3>{filtrandoTransicoes.descricao}</h3>
                    <span>{`R$ ${filtrandoTransicoes.valor.toFixed(2).replace(".", ",")}`}</span>
                    <img src={lixo} alt="icone lixo" onClick={ () => deletar(index) }/>
                </div>
                <p>{filtrandoTransicoes.opcao}</p>
            </li>
        })
        
    }
    else {
        
        return  filtrandoTransicoes.map((filtrandoTransicoes, index) =>{
            return <li key={index} className="card-li sombra-despesas">
                <div>
                    <h3>{filtrandoTransicoes.descricao}</h3>
                    <span>{`R$ ${filtrandoTransicoes.valor.toFixed(2).replace(".", ",")}`}</span>
                    <img src={lixo} alt="icone lixo" onClick={ () => deletar(index) }/>
                </div>
                <p>{filtrandoTransicoes.opcao}</p>
            </li>
        })
    }

}