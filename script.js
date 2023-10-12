const dados = {
    nome: "Ada Lovelace",
    email: "ada@email.com",
    telefones:
    {
        numero: "(11) 99123-4567",
        tipo: "casa"
    }
    ,
    endereco: {
        logradouro: "Rua das programadoras",
        cidade: "Vale do silício",
        estado: "Codefornia",
        cep: "10100-100",
        pais: "Programaland"
    }
}

const [form] = document.querySelectorAll('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const { formulario } = document.forms

    dados.nome = formulario.nomeinp.value

    dados.email = formulario.emailinp.value

    dados.telefones.numero = formulario.telefoneinp.value

    dados.telefones.tipo = formulario.tipoinp.value

    dados.endereco.logradouro = formulario.enderecoinp.value

    dados.endereco.cidade = formulario.cidadeinp.value

    dados.endereco.estado = formulario.estadoinp.value

    dados.endereco.cep = formulario.cepinp.value

    dados.endereco.pais = formulario.paisinp.value

    console.log(dados)
})
