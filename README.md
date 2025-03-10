# Marvel Characters App

Esta aplicación ha sido desarrollada utilizando **React**, **Vite**, **TypeScript**, **Zustand**, **React Query** y **Tailwind CSS**. Consume la API de Marvel para mostrar una lista de personajes con sus respectivos cómics y detalles.

## 🗉 **Requisitos Técnicos Cumplidos**
La aplicación cumple con los siguientes requisitos mencionados en el enunciado de la prueba técnica:

✅ Lista de personajes sin paginación.  
✅ Barra de búsqueda para buscar personajes por su nombre (implementada usando `nameStartsWith` en lugar de `contains` debido a limitaciones en la API de Marvel).  
✅ Posibilidad de marcar personajes como favoritos y visualizarlos en una vista separada.  
✅ Se implementó un contexto global con **Zustand** para gestionar el estado global de favoritos.  
✅ Sistema de caché eficiente utilizando **React Query** para almacenar datos de personajes durante 24 horas.  
✅ Implementación de **Skeletons** para mostrar mientras se cargan los datos.  
✅ Diseño visual basado en **Tailwind CSS**.

## 🚀 **Decisiones Técnicas**

### **Uso de `React Query` para la gestión de caché**
- Se utilizó `React Query` para gestionar las peticiones a la API de Marvel y almacenar los resultados en caché durante **24 horas**. Esto mejora el rendimiento evitando realizar múltiples peticiones innecesarias.

### **Ordenación de resultados en el `queryFn`**
- Se decidió ordenar los datos en la función `queryFn` en lugar de utilizar `select` en `React Query`, ya que siempre se quiere mostrar la información ordenada de la misma manera. Esto es más eficiente porque evita realizar la ordenación en cada renderizado.

### **Gestión de favoritos con `Zustand`**
- Se implementó un store con **Zustand** para manejar el estado global de favoritos. Esta decisión fue clave para mantener la aplicación sencilla y eficiente.

### **Uso de `React.memo` en componentes clave**
- Se utilizó `React.memo` en:
    - **`CharacterGrid`**: Para evitar que la cuadrícula completa se re-renderice innecesariamente si la lista de personajes no ha cambiado.
    - **`CharacterCard`**: Se implementó `React.memo` con una comparación personalizada basada en el `character.id` para prevenir que cada tarjeta se re-renderice innecesariamente si solo cambia la referencia del array pero los datos del personaje siguen siendo los mismos.

### **Uso de `Tailwind CSS` para el diseño**
- Se decidió utilizar **Tailwind CSS** por su rapidez y eficiencia en la creación de interfaces modernas y limpias. Se utilizaron las medidas del sistema de spacing de Tailwind, eligiendo las más cercanas al diseño de Figma para mantener consistencia y optimización en los estilos. Por ejemplo, si se solicitaba una altura de 48px, se utilizó el spacing `h-12` definido por Tailwind.

### **Gestión de la TopBar y el Loading entre páginas**
- Se intentó implementar un loading visual en la `TopBar` durante los cambios de página. Sin embargo, esta funcionalidad fue finalmente descartada ya que el hook `useNavigate` no proporcionaba correctamente el estado de carga.

## **Testing**

Se implementaron tests con **Jest** y **React Testing Library** para garantizar la estabilidad del proyecto. Los tests incluyen:

✅ Test para el componente **`CharacterCard`**.  
✅ Test para el componente **`CharacterGrid`**.  
✅ Test para el componente **`CharacterInfo`**.  
✅ Test para el componente **`ComicCarrousel`**.  
✅ Test para el componente **`ErrorMessage`**.  
✅ Test para el componente **`Loading`**.  
✅ Test para el servicio **`characters.ts`**, verificando las funciones `getCharacters`, `getCharactersById`, `getComicsByCharacterId`, y `searchCharacters`.

⚠️ No se ha realizado test a todo por falta de tiempo, pero lo ideal sería que la aplicación tuviera una cobertura superior al **90%**.

## ⚙️ **Instalación y Ejecución**

### **Comandos disponibles**
```json
"scripts": {
  "dev": "vite",
  "preview": "vite preview",
  "build": "vite build",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
  "test": "jest"
}
