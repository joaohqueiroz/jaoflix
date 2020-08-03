import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>
            <form>
                <label>
                    Nome da Categoria:
                    <input type="text"/>
                    <button>
                        Cadastrar
                    </button>
                </label>
            </form>
            <Link to="/">
                ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;