/**
 * Tabla editable genérica reutilizable.
 *
 * props:
 *  - columns: [{ key, label, type?, options?, placeholder?, width? }]
 *  - rows: array de objetos
 *  - onChange: (newRows) => void
 *  - newRow: objeto plantilla para fila nueva
 *  - addLabel: texto del botón agregar
 */
export const EditableTable = ({ columns, rows, onChange, newRow, addLabel = '+ Agregar Fila' }) => {
  const handleCell = (index, key, value) => {
    const next = rows.map((r, i) => (i === index ? { ...r, [key]: value } : r));
    onChange(next);
  };

  const addRow = () => {
    onChange([...rows, { ...newRow }]);
  };

  const deleteRow = (index) => {
    onChange(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="editable-table-block">
      <div className="table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th className="col-number">#</th>
              {columns.map((c) => (
                <th key={c.key} style={c.width ? { width: c.width } : undefined}>
                  {c.label}
                </th>
              ))}
              <th className="col-action"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2} className="empty-message">
                  Sin registros. Usa "{addLabel}".
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={index} className="data-row">
                  <td className="col-number">{index + 1}</td>
                  {columns.map((c) => (
                    <td key={c.key}>
                      {c.type === 'select' ? (
                        <select
                          value={row[c.key] ?? ''}
                          onChange={(e) => handleCell(index, c.key, e.target.value)}
                          className="cell-input"
                        >
                          <option value="">—</option>
                          {(c.options || []).map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={c.type || 'text'}
                          value={row[c.key] ?? ''}
                          onChange={(e) => handleCell(index, c.key, e.target.value)}
                          className="cell-input"
                          placeholder={c.placeholder || ''}
                          step={c.type === 'number' ? 'any' : undefined}
                        />
                      )}
                    </td>
                  ))}
                  <td className="col-action">
                    <button
                      onClick={() => deleteRow(index)}
                      className="btn-delete"
                      title="Eliminar fila"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <button onClick={addRow} className="btn btn-primary btn-sm">
        {addLabel}
      </button>
    </div>
  );
};
