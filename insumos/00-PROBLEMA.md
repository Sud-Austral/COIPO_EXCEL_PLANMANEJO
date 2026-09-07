# 00-PROBLEMA

Reconstruido hacia atras desde lo que se construyo. La cadena de inferencia es
debil y va escrita como tal.

## El problema, deducido de lo que se construyo

El sistema es un formulario largo, partido en secciones, que recoge los
antecedentes de un predio, el analisis de un rodal, un inventario de arboles
en una tabla editable, un diagnostico y la informacion cuantitativa asociada
[frontend/src/components/Solicitud.jsx]
[frontend/src/components/Antecedentes.jsx]
[frontend/src/components/AnalisisRodal.jsx]
[frontend/src/components/InventarioForestal.jsx]
[frontend/src/components/Diagnostico.jsx]
[frontend/src/components/InformacionCuantitativa.jsx]
[frontend/src/components/Cartografia.jsx]. Luego, probablemente, habia un
problema para llenar y ordenar ese conjunto de antecedentes [INFERIDO].

Hay una segunda cadena, y es la mas fuerte que hay aca: el repositorio
conserva la planilla de la que viene todo esto
[INSUMO/2016_PM_Nativo Liberado.xlsm], junto con las indicaciones para usarla
[INSUMO/indicaciones excel liberado.docx] y un documento de consideraciones
para la formulacion [INSUMO/Consideraciones formulacion PMFBN.pdf]. Luego, el
metodo anterior era una planilla de calculo con macros y un instructivo aparte
[INFERIDO]. El nombre del repositorio apunta a lo mismo, pero un nombre no es
evidencia y por eso la cita es el archivo.

Una tercera: el repositorio lleva un documento propio de campos que faltan
[CAMPOS_FALTANTES.md]. Luego, probablemente, el traspaso de la planilla al
formulario todavia no esta completo [INFERIDO].

El README afirma que la herramienta sirve para construir planes de manejo
forestal conforme a una ley que cita por numero [README.md]. Esa afirmacion es
normativa: [VERIFICAR], y lo sigue siendo aunque este escrita en el propio
repositorio.

## Quien sufre el problema

Aca no hay nada que inferir con respaldo: el analizador no detecto ningun
guard, ningun decorador de autorizacion, ninguna tabla de permisos ni ningun
rol declarado en este repositorio. No hay roles que nombrar [PENDIENTE].

El formulario distingue al solicitante de su representante legal segun el
propio README [README.md] [frontend/src/components/Solicitud.jsx], lo que
sugiere que quien llena el formulario puede no ser el titular [INFERIDO]. Eso
no es un rol del sistema: es un campo del formulario.

QUIEN usa la herramienta: [PENDIENTE].
CUANTAS PERSONAS: [PENDIENTE].
QUIEN recibe despues el plan: [PENDIENTE].

## Como lo resolvian antes

Con una planilla de calculo. La planilla esta en el repositorio y es el
archivo mas pesado que hay [INSUMO/2016_PM_Nativo Liberado.xlsm], acompanada
de sus indicaciones [INSUMO/indicaciones excel liberado.docx] [INFERIDO].

QUIEN mantenia esa planilla: [PENDIENTE].
CUANTO tardaba llenarla: [PENDIENTE].
QUE se hacia despues con ella: [PENDIENTE].

## Que pasa si no se hace nada

[PENDIENTE], sin excepcion.

## Volumen

Casi no hay indicios. No hay base de datos, ni indices, ni paginacion, ni
tipos de columna que leer: el analizador no detecto ninguna tabla ni ninguna
variable de entorno en este repositorio. Lo unico que asoma es que el
inventario se llena fila por fila y admite agregar y eliminar
[frontend/src/components/EditableTable.jsx]
[frontend/src/components/InventarioForestal.jsx], lo que sugiere un volumen
por plan del orden de las filas de una tabla y no de un sistema transaccional
[INFERIDO].

Cuantos planes al ano y de que tamano: [PENDIENTE].

## Quien decide que esta terminado

[PENDIENTE], sin excepcion.

## Restricciones que asoman y hay que confirmar

- El README declara que no hay base de datos y que todo ocurre en el navegador
  [README.md] [INFERIDO]. Si el formulario recoge datos de personas, donde
  quedan esos datos y por cuanto tiempo es [VERIFICAR].
- El repositorio esta declarado como publico en la evidencia de origen y
  contiene los documentos de insumo [INSUMO/Consideraciones formulacion PMFBN.pdf].
  Si eso es intencional: [VERIFICAR].
- El propio repositorio deja constancia de que faltan campos
  [CAMPOS_FALTANTES.md]. Cuales son criticos: [PENDIENTE].
