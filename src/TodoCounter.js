import React from 'react';

const estilos = {
    color: 'red',
    backgroundcolor: 'yellow',
};

function TodoCounter() {
    return (
        <h2 style={estilos}>has completado 2 de 3 TODOs</h2>
    );
}

export { TodoCounter };