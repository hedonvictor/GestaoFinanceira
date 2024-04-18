import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

const InputSection2 = () => {
    const [lancamentos, setLancamentos] = useState([]);
    const [tipoLancamento, setTipoLancamento] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [subcategoria, setSubcategoria] = useState('');

    useEffect(() => {
        listarLancamentos();
    }, []);

    const listarLancamentos = async () => {
        try {
            const response = await axios.get('http://localhost:4000/lancamentos');
            setLancamentos(response.data);
        } catch (error) {
            console.log("Erro ao listar lançamentos financeiros:", error);
        }
    }

    const realizarLancamento = async () => {
        const novoLancamento = {
            tipoLancamento: tipoLancamento,
            valor: valor,
            descricao: descricao,
            categoria: categoria,
            subcategoria: subcategoria
        };

        try {
            const response = await axios.post('http://localhost:4000/lancamentos', novoLancamento);
            console.log('Lançamento financeiro realizado com sucesso:', response.data);
            listarLancamentos();
            limparCampos();
        } catch (error) {
            console.error('Erro ao realizar lançamento financeiro:', error);
        }
    }

    const limparCampos = () => {
        setTipoLancamento('');
        setValor('');
        setDescricao('');
        setCategoria('');
        setSubcategoria('');
    }

    return (
        <div>
            <h3 className='mb-4'>Gastos</h3>
            <Card>
                <div className='d-flex flex-column p-5 bg-danger'>
                    <label htmlFor="tipoLancamento">Tipo de Lançamento:</label>
                    <Dropdown id="tipoLancamento" value={tipoLancamento} options={[{ label: 'Entrada', value: 'Entrada' }, { label: 'Saída', value: 'Saída' }]} onChange={(e) => setTipoLancamento(e.value)} placeholder="Selecione o tipo de lançamento" />

                    <label htmlFor="valor">Valor:</label>
                    <input id="valor" value={valor} onChange={event => setValor(event.target.value)} />

                    <label htmlFor="descricao">Descrição:</label>
                    <input id="descricao" value={descricao} onChange={event => setDescricao(event.target.value)} />

                    <label htmlFor="categoria">Categoria:</label>
                    <input id="categoria" value={categoria} onChange={event => setCategoria(event.target.value)} />

                    <label htmlFor="subcategoria">Subcategoria:</label>
                    <input id="subcategoria" value={subcategoria} onChange={event => setSubcategoria(event.target.value)} />
                    <Button label="Realizar Lançamento" className='mt-5 btn-danger' onClick={realizarLancamento}>Atualizar</Button>
                </div>
            </Card>

            {/* <DataTable value={lancamentos}>
          <Column field="id" header="ID"></Column>
          <Column field="tipoLancamento" header="Tipo de Lançamento"></Column>
          <Column field="valor" header="Valor"></Column>
          <Column field="descricao" header="Descrição"></Column>
          <Column field="categoria" header="Categoria"></Column>
          <Column field="subcategoria" header="Subcategoria"></Column>
        </DataTable> */}
        </div>
    );
}

export default InputSection2;