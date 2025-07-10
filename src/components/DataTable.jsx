import React from 'react';
import '../styles/components/DataTableStyles.css';

const DataTable = ({ 
    columns = [], 
    data = [], 
    onRowAction = null,
    actionButtonText = "Ver Detalle",
    actionKey = "id",
    className = "data-table-container"
}) => {
    return (
        <div className={className}>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.header}</th>
                        ))}
                        {onRowAction && <th>Acción</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={row[actionKey] || rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} data-label={column.header}>
                                    {column.render ? column.render(row) : row[column.key]}
                                </td>
                            ))}
                            {onRowAction && (
                                <td>
                                    <button
                                        className="btn-detail"
                                        onClick={() => onRowAction(row)}
                                    >
                                        {actionButtonText}
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
