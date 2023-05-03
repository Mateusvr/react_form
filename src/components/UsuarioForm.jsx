import React, { useState } from 'react'

export const UsuarioForm = () => {

    // const [nome, setNome] = useState('Mateus')
    // const [email, setEmail] = useState('')
    // const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState({
        nome:'',
        email:'',
        senha:'',
    })

    const submeterForm = (e) => {
        e.preventDefault()

        console.log(usuario)
    }

    // const atualizarValorNome = (e) => {
    //     // console.log(e.target.value)
    //     let valor = e.target.value
    //     setNome(valor)
    // }
    // const atualizarValorEmail = (e) => {
    //     // console.log(e.target.value)
    //     let valor = e.target.value
    //     setEmail(valor)
    // }
    // const atualizarValorSenha = (e) => {
    //     // console.log(e.target.value)
    //     let valor = e.target.value
    //     setSenha(valor)
    // }
    
    const atualizarValor = (e) => {
        const id = e.target.id;
        const valor=e.target.value;

        setUsuario({ ...usuario,[id]: valor })
    }

    return (
        <div className='container'>
            <form className='col' onSubmit={submeterForm}>
                <h2>Cadastro de Usuário</h2>
                <hr />
                <div className="col-md-5 mb-3">
                    <label htmlFor="email" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        required
                        value={usuario.nome}
                        onChange={atualizarValor}
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={usuario.email}
                        onChange={atualizarValor}
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="email" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="senha"
                        required
                        value={usuario.senha}
                        onChange={atualizarValor}
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>

    )
}
