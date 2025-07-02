import React, { useState, useEffect } from 'react';
import BandejasGrid from './BandejasGrid';
import ModalAddBandeja from './ModalAddBandeja';
import '../../styles/BandejasStyles.css';
import Header from '../../components/Header'; // Asegúrate de que la ruta sea correcta
import { usePage } from '../../hooks/usePage';
import { useSidebar } from '../../hooks/useSidebar';

const Bandejas = () => {
    const { pageTitle, setPageTitle } = usePage('Bandejas');
    const { collapsed } = useSidebar();
    const [modalOpen, setModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        nombre: '',
        ubicacion: '',
        tipoSemilla: '',
        fechaInicio: ''
    });

    useEffect(() => {
        setPageTitle('Bandejas');
    }, [setPageTitle]);

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
        <div className="bandejas-page">
            <Header title={pageTitle} />
            <div className="action-bar" style={{
                marginLeft: collapsed ? '80px' : '260px',
                transition: 'margin-left 0.3s ease',
                padding: '24px'
            }}>
                <h2 className="section-title">Gestión de Bandejas</h2>
                <button onClick={toggleModal} className="btn-add">
                    <span className="icon">+</span>
                    Agregar Bandeja
                </button>
            </div>
            <div style={{
                marginLeft: collapsed ? '80px' : '260px',
                transition: 'margin-left 0.3s ease',
                padding: '0 24px'
            }}>
                <BandejasGrid bandejas={bandejas} />
            </div>
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
