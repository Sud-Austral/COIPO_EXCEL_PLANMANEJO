import { usePlan } from '../context/PlanContext';
import { FormSection } from './FormSection';

export const InventarioForestal = () => {
  const { inventario, updateInventario, addInventarioRow, deleteInventarioRow } = usePlan();

  const handleCellChange = (index, field, value) => {
    const newInventario = [...inventario];
    newInventario[index] = { ...newInventario[index], [field]: value };
    updateInventario(newInventario);
  };

  const interventionOptions = ['P', 'p', 'x', 'X'];
  const speciesOptions = [
    'Lenga',
    'Coihue',
    'Coihue de Chiloé',
    'Ñire',
    'Araucaria',
    'Pino Radiata',
    'Pino Insigne',
    'Eucalipto',
    'Roble',
    'Roble de Santiago',
    'Hualo',
    'Espino',
    'Queñoa',
    'Laurel',
    'Lingue',
    'Olivillo',
    'Notro',
    'Raulí',
    'Nothofagus alpina',
    'Nothofagus obliqua',
    'Nothofagus glauca',
    'Nothofagus dombeyi',
    'Drimys winteri',
    'Persea lingue',
    'Lomatia dentata',
    'Gevuina avellana',
    'Aextoxicon punctatum',
    'Citronella mucronata',
    'Cryptocarya alba',
    'Embothrium coccineum',
    'Quillaja saponaria',
    'Azara dentata',
    'Canelo',
    'Otro',
  ];

  return (
    <div className="view">
      <FormSection title="INVENTARIO FORESTAL">
        <div className="inventory-controls">
          <button
            onClick={addInventarioRow}
            className="btn btn-primary"
          >
            + Agregar Fila
          </button>
        </div>

        <div className="table-wrapper">
          <table className="inventory-table">
            <thead>
              <tr>
                <th className="col-number">#</th>
                <th>Rodal</th>
                <th>Parcela</th>
                <th>Especie</th>
                <th>DAP/DAT (cm)</th>
                <th>Intervención</th>
                <th className="col-action">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {inventario.length === 0 ? (
                <tr>
                  <td colSpan="7" className="empty-message">
                    No hay registros. Haz clic en "Agregar Fila" para comenzar.
                  </td>
                </tr>
              ) : (
                inventario.map((row, index) => (
                  <tr key={index} className="data-row">
                    <td className="col-number">{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        value={row.rodal || ''}
                        onChange={(e) => handleCellChange(index, 'rodal', e.target.value)}
                        className="cell-input"
                        placeholder="Ej: C2"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.parcela || ''}
                        onChange={(e) => handleCellChange(index, 'parcela', e.target.value)}
                        className="cell-input"
                        placeholder="1"
                      />
                    </td>
                    <td>
                      <select
                        value={row.especie || ''}
                        onChange={(e) => handleCellChange(index, 'especie', e.target.value)}
                        className="cell-input"
                      >
                        <option value="">Seleccione especie</option>
                        {speciesOptions.map((sp) => (
                          <option key={sp} value={sp}>
                            {sp}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        step="0.1"
                        value={row.dap || ''}
                        onChange={(e) => handleCellChange(index, 'dap', e.target.value)}
                        className="cell-input"
                        placeholder="0.0"
                      />
                    </td>
                    <td>
                      <select
                        value={row.intervencion || ''}
                        onChange={(e) => handleCellChange(index, 'intervencion', e.target.value)}
                        className="cell-input"
                      >
                        <option value="">Seleccione</option>
                        {interventionOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="col-action">
                      <button
                        onClick={() => deleteInventarioRow(index)}
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

        <div className="inventory-footer">
          <p className="inventory-count">
            Total de registros: <strong>{inventario.length}</strong>
          </p>
        </div>
      </FormSection>
    </div>
  );
};
