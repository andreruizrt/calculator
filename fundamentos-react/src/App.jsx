import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import RandomColor from './components/basics/RandomColor';


import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicao/IndiretaPai';
import DiretaPai from './components/comunicao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import ProductsTable from './components/repeticao/ProductsTable';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import NumeroAleatorio from './components/basics/NumeroAleatorio';
import Fragmento from './components/basics/Fragmento';
import ComParametro from './components/basics/ComParametro';
import Primeiro from './components/basics/Primeiro';

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            
            <div className="Corner">
                <RandomColor />
            </div>

            <div className="Cards">

                {/* <Card title="Random Card Color" color="#5H3">
                    <RandomColor />
                </Card> */}
                
                <Card title="#12 - Contador" color="#ef9740">
                    <Contador numeroInicial={10} passoInicial={10}/>
                </Card>
                
                <Card title="#11 - Componente Controlado" color="#8d5335">
                    <Input />
                </Card>
                
                <Card title="#10 - Comunicação Indireta" color="#57927e">
                    <IndiretaPai />
                </Card>
              
                <Card title="#09 - Comunicação Direta" color="#a8231e">
                    <DiretaPai />
                </Card>
                
                <Card title="#08 - Condicional 01" color="#f58206">
                    <ParOuImpar numero={20} />
                    <ParOuImpar numero={1} />
                    <UsuarioInfo usuario={{ nome: "Fernando"}}/>
                </Card>
                
                <Card title="#07 - Tabela de Produtos" color="#49ba60">
                    <ProductsTable />
                </Card>

                <Card title="#06 - Repetição 01" color="#910a45">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card title="#05 - Componente Com Filho" color="#01b2e4">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="José" />
                        <FamiliaMembro nome="Pedro" />
                    </Familia>
                </Card>

                <Card title="#04 - Questão Aleatório" color="#080">
                    <NumeroAleatorio max={10} min={1} />
                </Card>

                <Card title="#03 - Fragmentos" color="#008">
                    <Fragmento />
                </Card>

                <Card title="#02 - Com Parâmetros" color="#264569">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>

                <Card title="#01 - Primeiro Componente" color="#3cf63b">
                    <Primeiro />
                </Card>
            </div>

        </div>
    );
}