import React, { useState, useEffect } from 'react';
// importando o react e desestruturando os Hooks useState e useEffect
const Hooks : React.FC = () => {
    const [name, setName] = useState<string>();
    // criando um estado que recebe um string simples
    useEffect(() => {
        setName('Patrick Ribeiro')
    }, [])
    // iniciando o nosso componente com um valor em nosso estado
    return (
        <div>
            <h3>Olá, {name}</h3>
            <input type="text" placeholder="Informe seu nome"
                value={name} onChange={e => setName(e.target.value)}
            />
            {/* Recebendo evento de change e atualizando o estado */}
        </div>
    );
}

export default Hooks;
// exportando o nosso componente