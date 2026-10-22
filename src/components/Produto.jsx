function Produto({ nome, descricao, preco, disponivel }) {
    return (
        <div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>Preço: R$ {preco}</p>
            <p>{disponivel ? "Disponível" : "Indisponível"}</p>
        </div>
    );
}

export default Produto;

