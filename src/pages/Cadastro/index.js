import "./styles.css";
import LogoMarketCubos from "../../components/LogoMarketCubos";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {


    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        setError('');

        if (!form.email) {
            setError('Digite o seu email');
            return;
        }

        if (!form.password) {
            setError('Digite sua senha');
            return;
        }

    }

    function handleChangeForm(e) {
        const value = e.target.value;

        setForm({ ...form, [e.target.name]: value });
    }

    return (
        <div className="container-page">
            <div className="container-page-cadastro" >
                <LogoMarketCubos />
                <h3>Cadastre-se</h3>

                <form onSubmit={handleSubmit}>

                    <h4>Nome da Loja</h4>
                    <input
                        id="input-loja"
                        className="input-loja"
                        type=""


                    />

                    <h4>E-mail</h4>
                    <input

                        id="input-email"
                        className="input-email"
                        type="email"
                        placeholder="exemplo@email.com"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleChangeForm(e)}
                    />



                    <h4>Senha</h4>
                    <input
                        id="input-password"
                        className="input-password"
                        type="password"
                        placeholder="Insira sua senha"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleChangeForm(e)}
                    />


                    {error && <span className='error'>{error}</span>}



                </form>
                <button type="submit">
                    Fazer login
                </button>

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