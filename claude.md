# Memory: Mujeres en la Ciencia - Documentación del Proyecto

## Descripción General

Juego de memoria interactivo creado para celebrar el **Día Internacional de la Mujer y la Niña en la Ciencia** (11 de febrero). El juego presenta a 10 científicas destacadas de diferentes épocas y campos, educando a los jugadores sobre sus contribuciones mientras juegan.

## Estado Actual del Proyecto

### Funcionalidades Implementadas

- **Juego de memoria completo**: 20 cartas (10 pares) con mecánica de volteo y emparejamiento
- **Información educativa**: Al encontrar una pareja, se muestra un modal con:
  - Imagen de la científica
  - Nombre y fechas
  - Campo de estudio
  - Biografía
  - Logro destacado
- **Estadísticas en tiempo real**: Contador de movimientos y parejas encontradas
- **Modal de victoria**: Se muestra al completar el juego
- **Modal de instrucciones**: Explica cómo jugar
- **Diseño responsive**: Adaptado para móviles, tablets y escritorio
- **Soporte táctil**: Optimizado para dispositivos táctiles con prevención de zoom
- **Animaciones**: Efectos visuales al voltear cartas y encontrar parejas
- **Vercel Analytics**: Integración para métricas de uso

### Científicas Incluidas

1. **Ada Lovelace** - Matemáticas e Informática (primera programadora)
2. **Rosalind Franklin** - Química y Cristalografía (Fotografía 51 del ADN)
3. **Hedy Lamarr** - Ingeniería e Invención (base del WiFi/Bluetooth)
4. **Jane Goodall** - Primatología y Conservación
5. **Katherine Johnson** - Matemáticas y Aeronáutica (NASA)
6. **Margarita Salas** - Bioquímica y Biología Molecular
7. **Elena García Armada** - Ingeniería Robótica (exoesqueleto pediátrico)
8. **Felisa Reyes** - Química Orgánica (primera gitana doctora en ciencias)
9. **Felisa Martín Bravo** - Física y Meteorología
10. **Sara García Alonso** - Biotecnología (astronauta de reserva ESA)

## Estructura del Proyecto

```
MemoryDiaCiencia/
├── index.html              # Página principal (HTML semántico)
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos CSS organizados por secciones
│   └── js/
│       └── main.js         # Lógica del juego con JSDoc
├── images/                 # Imágenes de las científicas
│   ├── Ada_Lovelace.png
│   ├── ElenaGarcia.png
│   ├── FelisaMartinBravo.png
│   ├── FelisaReyes.png
│   ├── HedyLamar.png
│   ├── JaneGodall.png
│   ├── KatherineJohnson.png
│   ├── Margarita_Salas.png
│   ├── Rosalind.png
│   └── SaraGarciaAlonso.png
├── README.md               # Readme original del proyecto
└── claude.md               # Este archivo de documentación
```

## Cambios Realizados (Refactorización)

### Sesión: 3 de febrero de 2026

**Objetivo**: Separar CSS y JS del HTML para seguir buenas prácticas de desarrollo.

**Cambios realizados**:

1. **Creación de estructura de carpetas**:
   - `assets/css/` para archivos de estilos
   - `assets/js/` para archivos JavaScript

2. **Extracción de CSS** (`assets/css/styles.css`):
   - Organizado en secciones claramente comentadas
   - Variables CSS (custom properties) para colores y sombras
   - Reset y estilos base
   - Componentes: header, stats, game board, cards, buttons, modals
   - Animaciones al final del archivo

3. **Extracción de JavaScript** (`assets/js/main.js`):
   - Documentación JSDoc en funciones principales
   - Datos de científicas separados como constante
   - Estado del juego agrupado
   - Referencias al DOM organizadas
   - Funciones del juego documentadas
   - Event listeners al final

4. **Actualización de index.html**:
   - HTML limpio sin estilos ni scripts inline
   - Enlaces a archivos externos de CSS y JS
   - Preservación de Vercel Analytics

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**:
  - Variables CSS (Custom Properties)
  - Flexbox y CSS Grid
  - Animaciones y transiciones
  - Backdrop filter
  - Media queries responsive
- **JavaScript Vanilla**: Sin dependencias externas
- **Google Fonts**: Fredoka y Nunito
- **Vercel**: Hosting y analytics

## Notas de Diseño

### Paleta de Colores

```css
--primary: #7C3AED      /* Violeta principal */
--primary-light: #A78BFA /* Violeta claro */
--secondary: #EC4899    /* Rosa */
--accent: #06B6D4       /* Cian/Turquesa */
--success: #10B981      /* Verde éxito */
```

### Responsive Breakpoints

- **< 400px**: Grid de 3 columnas
- **< 600px**: Grid de 4 columnas con espaciado reducido
- **>= 768px**: Gradiente en título

## Posibles Mejoras Futuras

- [ ] Añadir más científicas
- [ ] Implementar niveles de dificultad
- [ ] Guardar puntuación en localStorage
- [ ] Añadir sonidos
- [ ] Modo oscuro
- [ ] Compartir puntuación en redes sociales
- [ ] Versión en otros idiomas

## Comandos Útiles

```bash
# Servir localmente (necesita un servidor HTTP)
npx serve .

# O con Python
python -m http.server 8000
```

## Autor

**Manu Quiroga** - [manuelquiroga.com](http://manuelquiroga.com)

Creado para la **Fundación Secretariado Gitano - Sede Pontevedra**
