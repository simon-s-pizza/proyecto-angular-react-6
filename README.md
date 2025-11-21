✅ README.md para EV06 – React + Renderizado Dinámico

# 📘 CV Dinámico en React – Renderizado Condicional y Renderizado de Listas

**Actividad:** GA1-220501096-03-AA1-EV06  
**Aprendiz:** _Simón_  
**Tecnología:** React + Vite

Este proyecto es parte del proceso de formación en desarrollo web, donde el objetivo es construir componentes dinámicos utilizando **renderizado condicional**, **renderizado de listas**, **map()**, y estilos personalizados.

La interfaz final muestra un fragmento de un CV construido con componentes modulares y datos dinámicos.

---

## 🚀 Objetivo de la Actividad

Implementar una interfaz React que represente:

- Un componente **Experiencia.jsx** con _10 experiencias laborales o proyectos_ usando un arreglo y `.map()`.
- Un componente **Educacion.jsx** con un _listado dinámico de cursos y estudios_.
- Un componente **StackTecnologias.jsx** que aplica **estilos condicionales** dependiendo de la tecnología.
- Uso correcto de:
  - Importación y exportación de componentes.
  - Renderizado dinámico desde arreglos.
  - Operadores ternarios.
  - Estilos condicionales.
  - Control de versiones con Git y GitHub.

---

## 📂 Estructura del Proyecto

src/
┣ components/
┃ ┣ Experiencia.jsx
┃ ┣ Educacion.jsx
┃ ┗ StackTecnologias.jsx
┣ App.jsx
┗ main.jsx

---

## 🧩 Componentes Desarrollados

### 🔹 **1. Experiencia.jsx**

- Contiene un array de 10 objetos con:
  - Cargo
  - Empresa
  - Año
  - Descripción
- Se renderiza usando `.map()`

**Commit relacionado:**  
`feat: componente Experiencia dinamico con 10 cargos definidos`

---

### 🔹 **2. Educacion.jsx**

- Lista de cursos, talleres, técnicos, tecnologías, etc.
- Datos cargados desde un array de objetos.

**Commit relacionado:**  
`feat: componente Educacion dinamico con formación complementaria`

---

### 🔹 **3. StackTecnologias.jsx**

- Lista visual de tecnologías dominadas.
- Cada tecnología cambia de color según su tipo:

  - Amarillo → JavaScript
  - Azul → React
  - Verde → Node.js
  - Gris → Otras

- Utiliza:
  - `.map()`
  - Operador ternario
  - Condiciones dentro del estilo

**Commit relacionado:**  
`feat: componente StackTecnologias dinamico y con renderizado condicional`

---

## 🖥️ Vista previa del proyecto

> _(Inserta aquí una captura de pantalla cuando la tengas)_  
> Ejemplo:

![Vista del proyecto](./screenshot.png)

---

## 🛠️ Cómo ejecutar el proyecto en local

1. **Clona el repositorio**

```bash
git clone https://github.com/simon-s-pizza/proyecto-angular-react-6.git


Entra en el proyecto

cd proyecto-angular-react-6


Instala las dependencias

npm install


Ejecuta el servidor de desarrollo

npm run dev


Abre en navegador:
👉 http://localhost:5173

📝 Tecnologías utilizadas

React.js

Vite

JSX

JavaScript moderno (ESModules)



Git / GitHub

📌 Autor

Simón Toro
Aprendiz – Desarrollo Web
```

![alt text](src/image.png)
