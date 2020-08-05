/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Formfield from '../../../components/Formfield';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleChange = (e) => {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro da Categoria:
        {values.nome}
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias, values,
        ]);
      }}
      >
        <Formfield
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <Formfield
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Formfield
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
