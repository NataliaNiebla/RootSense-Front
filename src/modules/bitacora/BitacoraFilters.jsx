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
    onLimpiarFiltros 
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

    return (
        <Card 
            className="bitacora-filters-card"
            title={
                <div className="filter-title">
                    <FilterOutlined className="filter-icon" />
                    <span>Filtrar Reportes</span>
                </div>
            }
        >
            <Form
                form={form}
                layout="vertical"
                className="bitacora-filters-form"
            >
                <Row gutter={[16, 16]}>
                    {/* Rango de Fechas */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item label="Rango de Fechas">
                            <RangePicker
                                placeholder={['Fecha inicio', 'Fecha fin']}
                                value={getRangePickerValue()}
                                onChange={handleDateRangeChange}
                                format="DD/MM/YYYY"
                                allowClear
                            />
                        </Form.Item>
                    </Col>

                    {/* Búsqueda por Bandeja */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item label="Bandeja">
                            <Search
                                placeholder="Buscar por bandeja..."
                                value={filtros.bandeja}
                                onChange={(e) => handleBandejaSearch(e.target.value)}
                                onSearch={handleBandejaSearch}
                                allowClear
                                enterButton={<SearchOutlined />}
                            />
                        </Form.Item>
                    </Col>

                    {/* Tipo de Reporte */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item label="Tipo de Reporte">
                            <Select
                                placeholder="Seleccionar tipo"
                                value={filtros.tipoReporte || undefined}
                                onChange={handleTipoReporteChange}
                                allowClear
                            >
                                <Option value="Diario">Diario</Option>
                                <Option value="Semanal">Semanal</Option>
                                <Option value="Mensual">Mensual</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    {/* Calidad */}
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Form.Item label="Calidad">
                            <Select
                                placeholder="Seleccionar calidad"
                                value={filtros.calidad || undefined}
                                onChange={handleCalidadChange}
                                allowClear
                            >
                                <Option value="excelente">
                                    <span>
                                        <span style={{ color: '#52c41a' }}>●</span> Excelente
                                    </span>
                                </Option>
                                <Option value="buena">
                                    <span>
                                        <span style={{ color: '#1890ff' }}>●</span> Buena
                                    </span>
                                </Option>
                                <Option value="regular">
                                    <span>
                                        <span style={{ color: '#faad14' }}>●</span> Regular
                                    </span>
                                </Option>
                                <Option value="deficiente">
                                    <span>
                                        <span style={{ color: '#ff4d4f' }}>●</span> Deficiente
                                    </span>
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                {/* Botones de Acción */}
                <Row justify="end" style={{ marginTop: 16 }}>
                    <Col>
                        <Space>
                            <Button 
                                icon={<ClearOutlined />}
                                onClick={handleLimpiar}
                            >
                                Limpiar Filtros
                            </Button>
                            <Button 
                                icon={<SearchOutlined />}
                                onClick={onAplicarFiltros}
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
