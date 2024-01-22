import "./styles.css";
import LogoMarketCubos from "../../components/LogoMarketCubos";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api"

function Cadastro() {


    const [form, setForm] = useState({
        nome_loja: '',
        email: '',
        senha: ''
    });

    const [error, setError] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setError('');

            if (!form.nome_loja) {
                setError('Digite o nome da loja');
                return;
            }

            if (!form.email) {
                setError('Digite o seu email');
                return;
            }

            if (!form.senha) {
                setError('Digite sua senha');
                return;
            }


            const response = await api.post("/usuario", form);

            console.log(response);

        } catch (error) {
            console.log(error);

        }


    }

    function handleChangeForm(event) {
        const value = event.target.value;

        setForm({ ...form, [event.target.name]: value });
    }

    return (
        <div className="container-page">
            <div className="container-page-cadastro" >
                <LogoMarketCubos />
                <h3>Cadastre-se</h3>

                <form onSubmit={handleSubmit}>

                    <h4>Nome da Loja</h4>
                    <input
                        id="input-nome_loja"
                        className="input-nome_loja"
                        type="text"
                        name="nome_loja"
                        value={form.nome_loja}
                        onChange={(event) => handleChangeForm(event)}

                    />

                    <h4>E-mail</h4>
                    <input

                        id="input-email"
                        className="input-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(event) => handleChangeForm(event)}
                    />



                    <h4>Senha</h4>
                    <input
                        id="input-senha"
                        className="input-senha"
                        type="password"
                        name="senha"
                        value={form.senha}
                        onChange={(event) => handleChangeForm(event)}
                    />

                    <h4>Confirme sua senha</h4>
                    <input
                        id="input-confirmarSenha"
                        className="input-confirmarSenha"
                        type="password"
                        name="confirmarSenha"
                        value={form.confirmarSenha}
                        onChange={(event) => handleChangeForm(event)}
                    />


                    {error && <span className='error'>{error}</span>}

                    <button type="submit">
                        Criar Conta
                    </button>

                </form>


                <div>
                    <p className="paragrafo-login">
                        Já tem uma conta? <Link to="/Login">Fazer login</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}


export default Cadastro;