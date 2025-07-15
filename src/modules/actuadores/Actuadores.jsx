import React from 'react';
import '../../styles/actuadores/ActuadoresStyles.css';

import '../../styles/actuadores/ActuadoresMessagesStyles.css';
import '../../styles/actuadores/ActuadoresCardsStyles.css';
import '../../styles/actuadores/ActuadoresDetailsStyles.css';
import '../../styles/actuadores/ActuadoresModalStyles.css';
import '../../styles/actuadores/ActuadoresFormsStyles.css';
import '../../styles/actuadores/ActuadoresUtilitiesStyles.css';

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
        seleccionarActuador,
        cerrarDetalles
    } = useActuadores();


    return (
        <div className="actuadores-page">
            <Header title="Actuadores" />
            
            <ContentLayout>
                 <div className="action-bar">
                    <h2 className="section-title">Actuadores</h2>
                    <ButtonAdd title="Crear Actuador" onClick={abrirModal} />
                 </div>
                
                {/* Mensaje de éxito/error */}
                <MessageNotification mensaje={mensaje} />

                {/* Grid de tarjetas de actuadores */}
                <ActuadoresGrid 
                    actuadores={actuadores}
                    actuadorSeleccionado={actuadorSeleccionado}
                    onCardClick={seleccionarActuador}
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
