import React from 'react';
// importa do React dependências
// Todas as importações de componentes ou até mesmo arquivos devem ser feita neste trecho
const App: React.FC = () => {
    // O React.FC functional component e a tipagem do TS
    function hello() {
        alert('Olá!!!')
    }
    // funções adicionais ou até mesmo os Hooks devem estar neste trecho antes do retorno de nosso componente
    return (
        <div>
            <button
                onClick={hello}
            // Evento de clique recebendo uma função
            >Clique aqui</button>
        </div>
        // Os retornos contendo HTML devem estar neste trecho
    );
}
// Uma arrow function retornando um botão escrito clique aqui disparando um evento de clique com um alert no browser escrito "Ola!!!"
export default App;
// Exportando o componente para