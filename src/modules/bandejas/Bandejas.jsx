import React, { useState } from 'react';
import BandejasGrid from './BandejasGrid';
import ModalAddBandeja from './ModalAddBandeja';
import '../../styles/bandejas/BandejasStyles.css';
import Header from '../../components/Header';
import ContentLayout from '../../components/ContentLayout';
import ButtonAdd from '../../components/ButtonAdd';

const Bandejas = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        nombre: '',
        ubicacion: '',
        tipoSemilla: '',
        fechaInicio: ''
    });

    // Datos de ejemplo
    const [bandejas, setBandejas] = useState([
        {
            id: 1,
            nombre: "Bandeja A1",
            ubicacion: "Sección Norte",
            tipoSemilla: "Tomate Cherry",
            fechaInicio: "2025-01-15",
            sensores: [
                { id: "TEMP001", tipo: "Temperatura", estado: "activo" },
                { id: "HUM001", tipo: "Humedad", estado: "activo" },
                { id: "LUZ001", tipo: "Luz", estado: "mantenimiento" }
            ]
        },
        {
            id: 2,
            nombre: "Bandeja B2",
            ubicacion: "Sección Sur",
            tipoSemilla: "Lechuga",
            fechaInicio: "2025-01-20",
            sensores: [
                { id: "TEMP002", tipo: "Temperatura", estado: "activo" },
                { id: "HUM002", tipo: "Humedad", estado: "inactivo" }
            ]
        },
        {
            id: 3,
            nombre: "Bandeja C3",
            ubicacion: "Sección Este",
            tipoSemilla: "Albahaca",
            fechaInicio: "2025-01-25",
            sensores: [
                { id: "TEMP003", tipo: "Temperatura", estado: "activo" },
                { id: "HUM003", tipo: "Humedad", estado: "activo" },
                { id: "PH003", tipo: "pH", estado: "activo" }
            ]
        },
        {
            id: 4,
            nombre: "Bandeja D4",
            ubicacion: "Sección Oeste",
            tipoSemilla: "Cilantro",
            fechaInicio: "2025-02-01",
            sensores: [
                { id: "TEMP004", tipo: "Temperatura", estado: "mantenimiento" },
                { id: "HUM004", tipo: "Humedad", estado: "activo" }
            ]
        }
    ]);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        if (!modalOpen) {
            // Limpiar formulario al abrir
            setFormValues({
                nombre: '',
                ubicacion: '',
                tipoSemilla: '',
                fechaInicio: new Date().toISOString().split('T')[0]
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Validar que todos los campos estén llenos
        if (!formValues.nombre || !formValues.ubicacion || !formValues.tipoSemilla || !formValues.fechaInicio) {
            alert('Por favor, complete todos los campos');
            return;
        }

        // Crear nueva bandeja
        const nuevaBandeja = {
            id: bandejas.length + 1,
            ...formValues,
            sensores: []
        };

        setBandejas(prev => [...prev, nuevaBandeja]);
        toggleModal();
    };

    return (
        <div>
            <Header title="Bandejas" />

            <ContentLayout>
                <div className="action-bar">
                    <h2 className="section-title">Gestión de Bandejas</h2>
                    <ButtonAdd title="Agregar Bandeja" onClick={toggleModal} />
                </div>

                <BandejasGrid bandejas={bandejas} />
            </ContentLayout>

            <ModalAddBandeja 
                isOpen={modalOpen}
                onClose={toggleModal}
                onSave={handleSave}
                formValues={formValues}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Bandejas;
