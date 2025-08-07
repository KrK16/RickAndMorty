# Pruebas Funcionales

## 1. Carga y filtrado de Personajes

### Prueba: Carga de personajes
- **Acción**: Cargar los personajes
- **Resultado Esperado**: Al cargar se deben mostrar personajes en grid
- **Estado**: Funciona correctamente

### Prueba: Filtro por Nombre
- **Acción**: Ingresar "Rick" en el campo de búsqueda
- **Resultado Esperado**: Solo se muestran personajes que contienen "Rick" en su nombre
- **Estado**: Funciona correctamente

### Prueba: Filtro por Estado
- **Acción**: Seleccionar "Alive" en el dropdown de estado
- **Resultado Esperado**: Solo se muestran personajes con estado "Alive"
- **Estado**: Funciona correctamente

### Prueba: Filtro por Especie
- **Acción**: Seleccionar "Human" en el dropdown de especie
- **Resultado Esperado**: Solo se muestran personajes de especie "Human"
- **Estado**: Funciona correctamente

## 2. Sistema de Votación

### Prueba: Dar Like
- **Acción**: Hacer clic en el botón de like de un personaje
- **Resultado Esperado**: 
  - El contador de likes del personaje aumenta
  - El contador global de likes se actualiza
- **Estado**: Funciona correctamente

### Prueba: Dar Dislike
- **Acción**: Hacer clic en el botón de dislike de un personaje
- **Resultado Esperado**:
  - El contador de dislikes del personaje aumenta
  - El contador global de dislikes se actualiza
- **Estado**: Funciona correctamente

## 3. Persistencia de Datos

### Prueba: Almacenamiento Local
- **Acción**: Recargar la página después de dar likes/dislikes
- **Resultado Esperado**: 
  - Los contadores de like y dislike mantienen sus valores
  - Los votos persisten después de recargar
- **Estado**: Funciona correctamente

## 4. Responsividad

### Prueba: Vista Móvil
- **Acción**: Visualizar en diferentes tamaños de pantalla
- **Resultado Esperado**:
  - Layout se adapta correctamente
  - Cards mantienen legibilidad
  - Filtros se reorganizan apropiadamente
- **Estado**: Funciona correctamente

## 5. Performance

### Prueba: Carga Inicial
- **Acción**: Cargar la página por primera vez
- **Resultado Esperado**:
  - Personajes se cargan sin demoras significativas
  - Imágenes se cargan correctamente
- **Estado**: Funciona correctamente
