import React from 'react';
import '../../styles/actuadores/ActuadoresStyles.css';
import Header from '../../components/Header';
import ContentLayout from '../../components/ContentLayout';
import { useActuadores } from './hooks/useActuadores';
import {
    MessageNotification,
    ActuadoresGrid,
    BandejaDetailsPanel,
    ModalAgregarActuador
} from './components';

import ButtonAdd from '../../components/ButtonAdd';

const Actuadores = () => {
    const {
        // Estados
        actuadores,
        bandejas,
        modalActivo,
        actuadorSeleccionado,
        detallesPanelActivo,
        bandejaSeleccionada,
        mensaje,
        formulario,
        
        // Funciones
        handleInputChange,
        abrirModal,
        cerrarModal,
        crearActuador,
        toggleEstadoActuador,
        mostrarDetallesBandeja,
        cerrarDetalles
    } = useActuadores();


    return (
        <div>
            <Header title="Actuadores" />
            <div>
                <h2 className="section-title">Lista de Actuadores</h2>
                <ButtonAdd title="Agregar Actuador"/>
            </div>
            
            <ContentLayout>
                {/* Mensaje de éxito/error */}
                <MessageNotification mensaje={mensaje} />

                {/* Acciones de contenedor */}
                <ButtonAdd onAddClick={abrirModal} />

                {/* Grid de tarjetas de actuadores */}
                <ActuadoresGrid 
                    actuadores={actuadores}
                    actuadorSeleccionado={actuadorSeleccionado}
                    onCardClick={mostrarDetallesBandeja}
                    onToggleEstado={toggleEstadoActuador}
                />

                {/* Panel de detalles de bandeja */}
                <BandejaDetailsPanel 
                    bandeja={bandejaSeleccionada}
                    isActive={detallesPanelActivo}
                    onClose={cerrarDetalles}
                />

                {/* Modal Agregar Actuador */}
                <ModalAgregarActuador 
                    isActive={modalActivo}
                    formulario={formulario}
                    bandejas={bandejas}
                    onInputChange={handleInputChange}
                    onSubmit={crearActuador}
                    onClose={cerrarModal}
                />
            </ContentLayout>
        </div>
    );
};

export default Actuadores;
