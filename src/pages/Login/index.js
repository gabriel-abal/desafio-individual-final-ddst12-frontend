import "./styles.css";
import LogoMarketCubos from "../../components/LogoMarketCubos";
import { useState } from "react";

function Login() {


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
            <div className="container-page-login" >
                <LogoMarketCubos />
                <h3>Boas-vindas!</h3>
                <p className="informacoes-acesso">Use seu e-mail e senha para acessar a conta</p>


                <form onSubmit={handleSubmit}>



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
                    <p className="paragrafo-cadastrar">
                        Não possui conta?  Cadastrar
                    </p>
                </div>

            </div>
        </div>
    )
}


export default Login;