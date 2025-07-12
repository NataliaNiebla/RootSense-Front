import React from 'react';
import { Form, Row, Col, DatePicker, Input, Select, Button, Space, Card } from 'antd';
import { SearchOutlined, ClearOutlined, FilterOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { Search } = Input;
const { Option } = Select;

const BitacoraFilters = ({ 
    filtros, 
    onFiltroChange, 
    onAplicarFiltros, 
    onLimpiarFiltros,
    className = '',
    showTitle = true,
    size = 'default'
}) => {
    const [form] = Form.useForm();

    // Manejar cambio de rango de fechas
    const handleDateRangeChange = (dates) => {
        if (dates && dates.length === 2) {
            onFiltroChange('fechaInicio', dates[0].format('YYYY-MM-DD'));
            onFiltroChange('fechaFin', dates[1].format('YYYY-MM-DD'));
        } else {
            onFiltroChange('fechaInicio', '');
            onFiltroChange('fechaFin', '');
        }
    };

    // Manejar búsqueda de bandeja
    const handleBandejaSearch = (value) => {
        onFiltroChange('bandeja', value);
    };

    // Manejar cambio de tipo de reporte
    const handleTipoReporteChange = (value) => {
        onFiltroChange('tipoReporte', value);
    };

    // Manejar cambio de calidad
    const handleCalidadChange = (value) => {
        onFiltroChange('calidad', value);
    };

    // Limpiar todos los filtros
    const handleLimpiar = () => {
        form.resetFields();
        onLimpiarFiltros();
    };

    // Convertir fechas a dayjs para el RangePicker
    const getRangePickerValue = () => {
        if (filtros.fechaInicio && filtros.fechaFin) {
            return [dayjs(filtros.fechaInicio), dayjs(filtros.fechaFin)];
        }
        return null;
    };

    // Aplicar filtros con Enter
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onAplicarFiltros();
        }
    };

    // Opciones de calidad con colores
    const calidadOptions = [
        {
            value: 'excelente',
            label: 'Excelente',
            color: '#52c41a'
        },
        {
            value: 'buena',
            label: 'Buena',
            color: '#1890ff'
        },
        {
            value: 'regular',
            label: 'Regular',
            color: '#faad14'
        },
        {
            value: 'deficiente',
            label: 'Deficiente',
            color: '#ff4d4f'
        }
    ];

    // Opciones de tipo de reporte
    const tipoReporteOptions = [
        { value: 'Diario', label: 'Diario', icon: '📅' },
        { value: 'Semanal', label: 'Semanal', icon: '📊' },
        { value: 'Mensual', label: 'Mensual', icon: '📈' }
    ];

    const cardTitle = showTitle ? (
        <div className="filter-title">
            <FilterOutlined className="filter-icon" />
            <span>Filtrar Reportes</span>
        </div>
    ) : null;

    return (
        <Card 
            className={`bitacora-filters-card ${className}`}
            title={cardTitle}
            size={size}
        >
            <Form
                form={form}
                layout="vertical"
                className="bitacora-filters-form"
                onKeyPress={handleKeyPress}
            >
                <Row gutter={[16, 16]}>
                    {/* Rango de Fechas */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item 
                            label="Rango de Fechas"
                            name="dateRange"
                        >
                            <RangePicker
                                placeholder={['Fecha inicio', 'Fecha fin']}
                                value={getRangePickerValue()}
                                onChange={handleDateRangeChange}
                                format="DD/MM/YYYY"
                                allowClear
                                size={size}
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>

                    {/* Búsqueda por Bandeja */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item 
                            label="Bandeja"
                            name="bandeja"
                        >
                            <Search
                                placeholder="Buscar por bandeja..."
                                value={filtros.bandeja}
                                onChange={(e) => handleBandejaSearch(e.target.value)}
                                onSearch={handleBandejaSearch}
                                allowClear
                                enterButton={<SearchOutlined />}
                                size={size}
                            />
                        </Form.Item>
                    </Col>

                    {/* Tipo de Reporte */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item 
                            label="Tipo de Reporte"
                            name="tipoReporte"
                        >
                            <Select
                                placeholder="Seleccionar tipo"
                                value={filtros.tipoReporte || undefined}
                                onChange={handleTipoReporteChange}
                                allowClear
                                size={size}
                                style={{ width: '100%' }}
                            >
                                {tipoReporteOptions.map(option => (
                                    <Option key={option.value} value={option.value}>
                                        <span>
                                            <span style={{ marginRight: '8px' }}>{option.icon}</span>
                                            {option.label}
                                        </span>
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    {/* Calidad */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item 
                            label="Calidad"
                            name="calidad"
                        >
                            <Select
                                placeholder="Seleccionar calidad"
                                value={filtros.calidad || undefined}
                                onChange={handleCalidadChange}
                                allowClear
                                size={size}
                                style={{ width: '100%' }}
                            >
                                {calidadOptions.map(option => (
                                    <Option key={option.value} value={option.value}>
                                        <span>
                                            <span style={{ color: option.color, marginRight: '8px' }}>●</span>
                                            {option.label}
                                        </span>
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                {/* Botones de Acción */}
                <Row justify="end" style={{ marginTop: '16px' }}>
                    <Col>
                        <Space>
                            <Button 
                                icon={<ClearOutlined />}
                                onClick={handleLimpiar}
                                size={size}
                                disabled={!Object.values(filtros).some(value => value)}
                            >
                                Limpiar
                            </Button>
                            <Button 
                                type="primary"
                                icon={<SearchOutlined />}
                                onClick={onAplicarFiltros}
                                size={size}
                            >
                                Aplicar Filtros
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default BitacoraFilters;
