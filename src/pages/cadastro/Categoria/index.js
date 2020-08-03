import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Formfield from '../../../components/Formfield';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }
    const [values, setValues] = useState(valoresIniciais);

    const setValue = (key, value) => {
        setValues({
            ...values,
            [key]: value
        });
    }

    const handleChange = e => {
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro da Categoria: {values.nome}</h1>
            <form onSubmit={e => {
                e.preventDefault();
                setCategorias([
                    ...categorias, values
                ]);
            }}>
                <Formfield
                    tag="input"
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <Formfield
                    tag="textarea"
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <Formfield
                    tag="input"
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>
            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;