import React from 'react';

import FunctionalComponent from '../../components/FunctionComplement';
import ClassComponent from '../../components/ClassComponent';
import Hooks from '../../components/Hooks';
import ButtonProps from '../../components/Props';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Listando os nossos componentes</h1>
            <FunctionalComponent />
            <ClassComponent />
            {/* importando adicionando ao código os componentes */}
            {/* <Hooks/> */}

            <ButtonProps name="Botão 1" />
            <ButtonProps name="Botão 2" />
            {/* invocando os componentes */}
        </div>
    );
}

export default Home;