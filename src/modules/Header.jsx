import React from 'react'
// import Tabla from './modulesTablaformulario'

const Header = props => {
    return (
        <div className="Header">
            <nav>
                <div className="name">
                    <h2>Crud-Clientes</h2>
                </div>
                <div className="Boton-Agregar">
                    <button className='btn btn-outline-success' onClick={props.doIt}>Agregar Nuevo usuario</button>
                </div>
            </nav>

        
        </div>
    )
}

export default Header