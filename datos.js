// Índice estático generado desde los ejercicios fuente. No requiere peticiones de red.
const DATOS_EJERCICIOS = [
  {
    "bloque": "BOM y almacenamiento",
    "temas": [
      "Fundamentos",
      "DOM",
      "Eventos",
      "Formularios",
      "BOM"
    ],
    "titulo": "Ejercicio 1 · Anexo P4 - Ejercicio 1: Cancelación de Envío",
    "ruta": "Castanos_Carlos_anexoprac4/Ejercicio_1",
    "ejecucion": "./Castanos_Carlos_anexoprac4/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castanos_Carlos_anexoprac4/Ejercicio_1/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function () {\n    let formulario = document.getElementById(\"miFormulario\");\n\n    // Asignamos el manejador del evento submit\n    formulario.onsubmit = validarYCancelarEnvio;\n};\n\nfunction validarYCancelarEnvio(evento) {\n\n    let c1 = document.getElementById(\"campo1\").value.trim();\n    let c2 = document.getElementById(\"campo2\").value.trim();\n    let c3 = document.getElementById(\"campo3\").value.trim();\n\n    if (c1 === \"\" || c2 === \"\" || c3 === \"\") {\n        alert(\"Envío cancelado: Hay campos vacíos en el formulario.\");\n        evento.preventDefault();\n    }\n    else {\n        alert(\"Formulario enviado con éxito.\");\n    }\n\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castanos_Carlos_anexoprac4/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Anexo P4 - Ejercicio 1: Cancelación de Envío</title>\n</head>\n<body>\n    <h2>Formulario de Registro</h2>\n\n    <form id=\"miFormulario\" method =\"get\">\n        <label for=\"campo1\">Campo 1:</label><br>\n        <input type=\"text\" id=\"campo1\" name=\"campo1\"><br><br>\n\n        <label for=\"campo2\">Campo 2:</label><br>\n        <input type=\"text\" id=\"campo2\" name=\"campo2\"><br><br>\n\n        <label for=\"campo3\">Campo 3:</label><br>\n        <input type=\"text\" id=\"campo3\" name=\"campo3\"><br><br>\n\n        <input type=\"submit\" value=\"Enviar\">\n    </form>\n\n    <!-- <script src=\"App.js\"></script> -->\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "BOM y almacenamiento",
    "temas": [
      "Fundamentos",
      "DOM",
      "Eventos",
      "BOM"
    ],
    "titulo": "Ejercicio 2 · Anexo P4 - Ejercicio 2: Prevenir Enlace",
    "ruta": "Castanos_Carlos_anexoprac4/Ejercicio_2",
    "ejecucion": "./Castanos_Carlos_anexoprac4/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castanos_Carlos_anexoprac4/Ejercicio_2/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function () {\n    let enlace = document.getElementById(\"miEnlace\");\n    enlace.onclick = evitarNavegacion;\n};\n\nfunction evitarNavegacion(evento) {\n    evento.preventDefault();\n    alert(\"Se ha cancelado la navegación. El enlace no te redirigirá.\");\n    /*if (evento.preventDefault) {\n        evento.preventDefault();\n        alert(\"Se ha cancelado la navegación. El enlace no te redirigirá.\");\n    } else {\n        evento.returnValue = false;\n    }\n    return false;*/\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castanos_Carlos_anexoprac4/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Anexo P4 - Ejercicio 2: Prevenir Enlace</title>\n</head>\n<body>\n    <h2>Cancelación de Enlace</h2>\n\n    <p>\n        Haz clic en el siguiente enlace: \n        <a href=\"https://www.google.com\" id=\"miEnlace\">Ir a Google</a>\n    </p>\n\n    <!-- <script src=\"App.js\"></script> -->\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "BOM y almacenamiento",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 3 · Anexo P4 - Ejercicio 3: Stop Propagation",
    "ruta": "Castanos_Carlos_anexoprac4/Ejercicio_3",
    "ejecucion": "./Castanos_Carlos_anexoprac4/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castanos_Carlos_anexoprac4/Ejercicio_3/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function () {\n    let enlace = document.getElementById(\"miEnlace\");\n    let contenedor = document.getElementById(\"contenedor\");\n\n    enlace.onclick = detenerPropagacion;\n    contenedor.onclick = function () {\n        alert(\"El clic llegó al contenedor.\");\n    };\n};\n\nfunction detenerPropagacion(evento) {\n    if (evento.stopPropagation) {\n        evento.stopPropagation();\n    } else {\n        evento.cancelBubble = true;\n    }\n\n    alert(\"Se detuvo la propagación del evento.\");\n}\n"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castanos_Carlos_anexoprac4/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Anexo P4 - Ejercicio 3: Stop Propagation</title>\n    <script src=\"App.js\" defer></script>\n</head>\n<body>\n    <h2>Propagación de eventos</h2>\n    <p>Haz clic en el enlace. El evento no se propagará a los elementos superiores.</p>\n    <div id=\"contenedor\">\n        Contenedor\n        <p><a href=\"https://www.google.com\" id=\"miEnlace\">Ir a Google</a></p>\n    </div>\n</body>\n</html>\n"
      }
    ]
  },
  {
    "bloque": "DOM",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 1 · Ejercicio 1 - DOM Párrafos",
    "ruta": "Castaños_Carlos_bloq1prac3/Ejercicio_1",
    "ejecucion": "./Castaños_Carlos_bloq1prac3/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_1/App.js",
        "tipo": "javascript",
        "contenido": "var divActivo = null;\n\n// Añade un párrafo detrás del último párrafo creado\nfunction anyadirParrafo() {\n    var divi = divActivo || document.getElementById(\"divisor\");\n    var nuevoP = document.createElement(\"p\");\n    var texto = document.createTextNode(\"Párrafo añadido\");\n    nuevoP.appendChild(texto);\n    divi.appendChild(nuevoP);\n}\n\n// Inserta un párrafo detrás del primer párrafo inicial\nfunction insertarParrafo() {\n    var divi = divActivo || document.getElementById(\"divisor\");\n    var parrafos = divi.getElementsByTagName(\"p\");\n    if (parrafos.length >= 1) {\n        var nuevoP = document.createElement(\"p\");\n        var texto = document.createTextNode(\"Párrafo insertado\");\n        nuevoP.appendChild(texto);\n        // Si existe un segundo párrafo, se inserta antes de él (quedando detrás del primero)\n        if (parrafos.length > 1) {\n            divi.insertBefore(nuevoP, parrafos[1]);\n        } else {\n            divi.appendChild(nuevoP);\n        }\n    }\n}\n\n// Reemplaza el segundo párrafo por \"Párrafo reemplazado\"\nfunction reemplazarParrafo() {\n    var divi = divActivo || document.getElementById(\"divisor\");\n    var parrafos = divi.getElementsByTagName(\"p\");\n    if (parrafos.length > 1) {\n        var nuevoP = document.createElement(\"p\");\n        var texto = document.createTextNode(\"Párrafo reemplazado\");\n        nuevoP.appendChild(texto);\n        // Reemplaza el nodo en la posición 1 del segundo párrafo\n        divi.replaceChild(nuevoP, parrafos[1]);\n    } else {\n        alert(\"No existe un segundo párrafo para reemplazar.\");\n    }\n}\n\n// Elimina el párrafo que haya inmediatamente detrás del primero\nfunction borrarParrafo() {\n    var divi = divActivo || document.getElementById(\"divisor\");\n    var parrafos = divi.getElementsByTagName(\"p\");\n    if (parrafos.length > 1) {\n        divi.removeChild(parrafos[1]);\n    } else {\n        alert(\"No hay ningún párrafo detrás del primero para borrar.\");\n    }\n}\n\n// Clona toda la estructura del div con sus hijos (deep clone: true) y la añade al body\n\n/*function clonarDiv() {\n    var divi = document.getElementById(\"divisor\");\n    var divClonado = divi.cloneNode(true);\n    document.body.appendChild(divClonado);\n}*/\n\nfunction clonarDiv() {\n    var divi = divActivo || document.getElementById(\"divisor\");\n    var divClonado = divi.cloneNode(true);\n    divClonado.removeAttribute(\"id\");\n    document.body.insertBefore(divClonado, document.querySelector(\"button\"));\n    divActivo = divClonado;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 1 - DOM Párrafos</title>\n</head>\n<body>\n    <div id=\"divisor\">\n        <p>Este es mi primer parrafo</p>\n    </div>\n    <br>\n    <button onclick=\"anyadirParrafo()\">Añadir párrafo</button>\n    <button onclick=\"insertarParrafo()\">Insertar párrafo</button>\n    <button onclick=\"reemplazarParrafo()\">Reemplazar párrafo</button>\n    <button onclick=\"borrarParrafo()\">Borrar párrafo</button>\n    <button onclick=\"clonarDiv()\">Clonar div</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 2 · Ejercicio 2 - DOM Lista Animales",
    "ruta": "Castaños_Carlos_bloq1prac3/Ejercicio_2",
    "ejecucion": "./Castaños_Carlos_bloq1prac3/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_2/App.js",
        "tipo": "javascript",
        "contenido": "function anyadirElemento() {\n    var lista = document.getElementById(\"listaelemen\");\n    var nuevoLi = document.createElement(\"li\");\n    var texto = document.createTextNode(\"tigre\");\n    nuevoLi.appendChild(texto);\n    lista.appendChild(nuevoLi);\n}\n\nfunction insertarElemento() {\n    var lista = document.getElementById(\"listaelemen\");\n    var items = lista.getElementsByTagName(\"li\");\n\n    if (items.length >= 1) {\n        var nuevoLi = document.createElement(\"li\");\n        var texto = document.createTextNode(\"elefante\");\n        nuevoLi.appendChild(texto);\n\n        if (items.length > 1) {\n            lista.insertBefore(nuevoLi, items[1]);\n        } else {\n            lista.appendChild(nuevoLi);\n        }\n    }\n}\n\nfunction reemplazarElemento() {\n    var lista = document.getElementById(\"listaelemen\");\n    var items = lista.children; // Solo hijos de primer nivel\n\n    if (items.length > 1) {\n        var nuevoLi = document.createElement(\"li\");\n        var texto = document.createTextNode(\"guepardo\");\n        nuevoLi.appendChild(texto);\n\n        lista.replaceChild(nuevoLi, items[1]);\n    } else {\n        alert(\"No hay suficiente elementos para reemplazar.\");\n    }\n}\n\nfunction borrarElemento() {\n    var lista = document.getElementById(\"listaelemen\");\n    var items = lista.children;\n\n    if (items.length > 1) {\n        lista.removeChild(items[1]);\n    } else {\n        alert(\"No hay elementos suficientes para borrar.\");\n    }\n}\n\nfunction clonarLista() {\n    var lista = document.getElementById(\"listaelemen\");\n    var listaClonada = lista.cloneNode(true);\n    document.body.appendChild(listaClonada);\n}\n\n// Crear sublista dentro del primer <li> (\"leon\") usando métodos DOM\nfunction crearSublistaDOM() {\n    var lista = document.getElementById(\"listaelemen\");\n    var primerLi = lista.getElementsByTagName(\"li\")[0];\n\n    var subUl = document.createElement(\"ul\");\n    var subLi = document.createElement(\"li\");\n    var texto = document.createTextNode(\"Salvaje\");\n\n    subLi.appendChild(texto);\n    subUl.appendChild(subLi);\n    primerLi.appendChild(subUl);\n}\n\n// Crear sublista dentro del primer <li> (\"leon\") usando innerHTML\nfunction crearSublistaInnerHTML() {\n    var lista = document.getElementById(\"listaelemen\");\n    var primerLi = lista.getElementsByTagName(\"li\")[0];\n\n    primerLi.innerHTML += \"<ul><li>Salvaje</li></ul>\";\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 2 - DOM Lista Animales</title>\n</head>\n<body>\n    <h1>ANIMALES</h1>\n    <ul id=\"listaelemen\">\n        <li>leon</li>\n        <li>pantera</li>\n        <li>jirafa</li>\n    </ul>\n    <button onclick=\"anyadirElemento()\">Añadir nuevo elemento</button>\n    <button onclick=\"insertarElemento()\">Insertar nuevo elemento</button>\n    <button onclick=\"reemplazarElemento()\">Reemplazar elemento</button>\n    <button onclick=\"borrarElemento()\">Borrar elemento</button>\n    <button onclick=\"clonarLista()\">Clonar la lista completa</button>\n    <br><br>\n    <button onclick=\"crearSublistaDOM()\">Crear Sublista dentro de leon con funciones DOM</button>\n    <button onclick=\"crearSublistaInnerHTML()\">Crear Sublista dentro de leon con innerHTML</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 3 · Ejercicio 3 - Colores DOM",
    "ruta": "Castaños_Carlos_bloq1prac3/Ejercicio_3",
    "ejecucion": "./Castaños_Carlos_bloq1prac3/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_3/App.js",
        "tipo": "javascript",
        "contenido": "function cambiarAzul() {\n    var caja = document.getElementById(\"cajaMensaje\");\n    caja.style.backgroundColor = \"blue\";\n    caja.style.color = \"white\"; // Para legibilidad sobre azul\n}\n\nfunction cambiarVerde() {\n    var caja = document.getElementById(\"cajaMensaje\");\n    caja.style.backgroundColor = \"green\";\n    caja.style.color = \"white\";\n}\n\nfunction restaurarColor() {\n    var caja = document.getElementById(\"cajaMensaje\");\n    caja.style.backgroundColor = \"white\";\n    caja.style.color = \"black\";\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 3 - Colores DOM</title>\n</head>\n<body>\n    <div id=\"cajaMensaje\" style=\"background-color: white; padding: 20px; border: 1px solid #ccc;\">\n        Bienvenido a esta página de prueba de colores\n    </div>\n    <br>\n    <button onclick=\"cambiarAzul()\">Azul</button>\n    <button onclick=\"cambiarVerde()\">Verde</button>\n    <button onclick=\"restaurarColor()\">Restablecer color inicial</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 4 · Ejercicio 4 - Conteo de Elementos DOM",
    "ruta": "Castaños_Carlos_bloq1prac3/Ejercicio_4",
    "ejecucion": "./Castaños_Carlos_bloq1prac3/Ejercicio_4/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_4/App.js",
        "tipo": "javascript",
        "contenido": "function contarImagenes() {\n    // getElementsByTagName devuelve una colección HTML con todas las etiquetas <img>\n    var imagenes = document.getElementsByTagName(\"img\");\n    alert(\"Número total de imágenes: \" + imagenes.length);\n}\n\nfunction contarEnlaces() {\n    // Colección con todas las etiquetas <a>\n    var enlaces = document.getElementsByTagName(\"a\");\n    alert(\"Número total de enlaces: \" + enlaces.length);\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_4/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 4 - Conteo de Elementos DOM</title>\n</head>\n<body>\n    <h2>Imágenes y Enlaces</h2>\n\n    <!-- Elementos de prueba -->\n    <a href=\"#\">Enlace 1</a> | \n    <a href=\"#\">Enlace 2</a> | \n    <a href=\"#\">Enlace 3</a>\n    <br><br>\n\n    <img src=\"https://via.placeholder.com/60\" alt=\"img1\">\n    <img src=\"https://via.placeholder.com/60\" alt=\"img2\">\n    <br><br>\n\n    <button onclick=\"contarImagenes()\">Número de Imágenes</button>\n    <button onclick=\"contarEnlaces()\">Número de enlaces</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 5 · Ejercicio 5 - Creación con Atributos",
    "ruta": "Castaños_Carlos_bloq1prac3/Ejercicio_5",
    "ejecucion": "./Castaños_Carlos_bloq1prac3/Ejercicio_5/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_5/App.js",
        "tipo": "javascript",
        "contenido": "function crearCampoTexto() {\n    var contenedor = document.getElementById(\"contenedorElemento\");\n\n    // 1. Crear el nodo de elemento\n    var cajaTexto = document.createElement(\"input\");\n\n    // 2. Asignar atributos usando setAttribute() o propiedades del DOM\n    cajaTexto.setAttribute(\"type\", \"text\");\n    cajaTexto.setAttribute(\"id\", \"miInputDinamico\");\n    cajaTexto.setAttribute(\"name\", \"usuario\");\n    cajaTexto.setAttribute(\"placeholder\", \"Escribe tu nombre aquí...\");\n    cajaTexto.setAttribute(\"maxlength\", \"30\");\n\n    // También se pueden aplicar atributos de estilo directamente\n    cajaTexto.style.padding = \"8px\";\n    cajaTexto.style.border = \"2px solid #0055aa\";\n\n    // 3. Insertar el elemento en el árbol DOM\n    contenedor.appendChild(cajaTexto);\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac3/Ejercicio_5/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 5 - Creación con Atributos</title>\n</head>\n<body>\n    <h2>Crear elemento y asignarle atributos</h2>\n    <button onclick=\"crearCampoTexto()\">Crear Caja de Texto</button>\n    <div id=\"contenedorElemento\" style=\"margin-top: 15px;\"></div>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM y eventos",
    "temas": [
      "Fundamentos"
    ],
    "titulo": "Ejercicio 1 · Ejercicio 1 - Eventos con this",
    "ruta": "Castaños_Carlos_bloq1prac4/Ejercicio_1",
    "ejecucion": "./Castaños_Carlos_bloq1prac4/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_1/App.js",
        "tipo": "javascript",
        "contenido": "function agrandarTexto(elemento) {\n    elemento.style.fontSize = \"16pt\";\n}\n\nfunction restaurarTexto(elemento) {\n    elemento.style.fontSize = \"12pt\";\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!doctype html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\" />\n    <title>Ejercicio 1 - Eventos con this</title>\n</head>\n\n<body>\n    <div id=\"miDiv\" style=\"font-size: 12pt\" onmouseover=\"agrandarTexto(this)\" onmouseout=\"restaurarTexto(this)\">\n        Al pasar por encima de este texto cambiará de tamaño\n    </div>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM y eventos",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 2 · Ejercicio 2 - Eventos Semánticos",
    "ruta": "Castaños_Carlos_bloq1prac4/Ejercicio_2",
    "ejecucion": "./Castaños_Carlos_bloq1prac4/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_2/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\n    var div = document.getElementById(\"miDiv\");\n\n    div.onmouseover = function() {\n        this.style.fontSize = \"16pt\";\n    };\n\n    div.onmouseout = function() {\n        this.style.fontSize = \"12pt\";\n    };\n};"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!doctype html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\" />\n    <title>Ejercicio 2 - Eventos Semánticos</title>\n</head>\n\n<body>\n    <div id=\"miDiv\" style=\"font-size: 12pt\">\n        Al pasar por encima de este texto cambiará de tamaño\n    </div>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM y eventos",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 3 · Ejercicio 3 - Objeto Event",
    "ruta": "Castaños_Carlos_bloq1prac4/Ejercicio_3",
    "ejecucion": "./Castaños_Carlos_bloq1prac4/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_3/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\n    var div = document.getElementById(\"miDiv\");\n\n    div.onmouseover = cambiarTamano;\n    div.onmouseout = cambiarTamano;\n};\n\nfunction cambiarTamano(evento) {\n    // Garantiza compatibilidad con versiones antiguas de IE\n    if (evento.type === \"mouseover\") {\n        this.style.fontSize = \"16pt\";\n    } else if (evento.type === \"mouseout\") {\n        this.style.fontSize = \"12pt\";\n    }\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 3 - Objeto Event</title>\n</head>\n\n<body>\n    <div id=\"miDiv\" style=\"font-size: 12pt;\">\n        Al pasar por encima de este texto cambiará de tamaño\n    </div>\n</body>\n\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM y eventos",
    "temas": [
      "Fundamentos",
      "DOM",
      "Eventos",
      "BOM"
    ],
    "titulo": "Ejercicio 4 · Ejercicio 4 - Listeners Compatibles",
    "ruta": "Castaños_Carlos_bloq1prac4/Ejercicio_4",
    "ejecucion": "./Castaños_Carlos_bloq1prac4/Ejercicio_4/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_4/App.js",
        "tipo": "javascript",
        "contenido": "\nfunction cambiarTamano(evento) {\n    if (evento.type === \"mouseover\") {\n        this.style.fontSize = \"16pt\";\n    } else if (evento.type === \"mouseout\") {\n        this.style.fontSize = \"12pt\";\n    }\n}\n\nwindow.onload = function() {\n    let div = document.getElementById(\"miDiv\");\n    div.addEventListener(\"mouseover\", cambiarTamano);\n    div.addEventListener(\"mouseout\", cambiarTamano);\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_4/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 4 - Listeners Compatibles</title>\n</head>\n\n<body>\n    <div id=\"miDiv\" style=\"font-size: 12pt;\">\n        Al pasar por encima de este texto cambiará de tamaño\n    </div>\n</body>\n\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM y eventos",
    "temas": [
      "Fundamentos",
      "DOM",
      "Eventos",
      "BOM"
    ],
    "titulo": "Ejercicio 5 · Ejercicio 5 - Solo Números",
    "ruta": "Castaños_Carlos_bloq1prac4/Ejercicio_5",
    "ejecucion": "./Castaños_Carlos_bloq1prac4/Ejercicio_5/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_5/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function () {\n    var campo = document.getElementById(\"soloNumeros\");\n    campo.onkeypress = soloNumeros;\n};\n\nfunction soloNumeros(evento) {\n    // charCode para navegadores estándar W3C, keyCode para IE\n    var codigo = evento.keyCode;\n    // Rango ASCII para números '0' a '9' es de 48 a 57.\n    if (codigo < 48 || codigo > 57) {\n        evento.preventDefault(); // Cancela la pulsación de la tecla.\n    }\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_5/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 5 - Solo Números</title>\n</head>\n\n<body>\n    <h2>Campo Numérico</h2>\n    <label for=\"soloNumeros\">Introduce únicamente números:</label>\n    <input type=\"text\" id=\"soloNumeros\">\n</body>\n\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM y eventos",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 6 · Ejercicio 6 - Botones Dinámicos",
    "ruta": "Castaños_Carlos_bloq1prac4/Ejercicio_6",
    "ejecucion": "./Castaños_Carlos_bloq1prac4/Ejercicio_6/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_6/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\n    // Obtenemos todos los botones de la página de forma dinámica\n    var botones = document.getElementsByTagName(\"button\");\n\n    // Asignamos el manejador de eventos a cada botón\n    for (var i = 0; i < botones.length; i++) {\n        botones[i].onclick = mostrarMensaje;\n    }\n};\n\nfunction mostrarMensaje() {\n    alert(\"Has pulsado sobre un botón\");\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_6/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 6 - Botones Dinámicos</title>\n</head>\n\n<body>\n    <h2>Prueba de Botones</h2>\n    <button>Botón 1</button>\n    <button>Botón 2</button>\n    <button>Botón 3</button>\n    <button>Botón 4</button>\n</body>\n\n</html>"
      }
    ]
  },
  {
    "bloque": "DOM y eventos",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 7 · Ejercicio 7 - Reloj Digital",
    "ruta": "Castaños_Carlos_bloq1prac4/Ejercicio_7",
    "ejecucion": "./Castaños_Carlos_bloq1prac4/Ejercicio_7/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_7/App.js",
        "tipo": "javascript",
        "contenido": "// Evento al cargar la página\nwindow.onload = function() {\n    alert(\"Página que contiene un reloj digital\");\n    iniciarReloj();\n};\n\n// Evento al abandonar la página\nwindow.onbeforeunload = function() {\n    alert(\"Página cancelada\");\n};\n\nfunction iniciarReloj() {\n    actualizarHora();\n    // Actualiza la hora cada segundo (1000 ms)\n    setInterval(actualizarHora, 1000);\n}\n\nfunction actualizarHora() {\n    var ahora = new Date();\n    var h = ahora.getHours();\n    var m = ahora.getMinutes();\n    var s = ahora.getSeconds();\n\n    // Formatear a dos dígitos\n    if (h < 10) h = \"0\" + h;\n    if (m < 10) m = \"0\" + m;\n    if (s < 10) s = \"0\" + s;\n\n    var cadenaHora = h + \":\" + m + \":\" + s;\n    document.getElementById(\"reloj\").textContent = cadenaHora;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac4/Ejercicio_7/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 7 - Reloj Digital</title>\n</head>\n\n<body>\n    <h2>Reloj Digital</h2>\n    <div id=\"reloj\" style=\"font-size: 24pt; font-family: monospace; font-weight: bold;\"></div>\n    <br>\n    <a href=\"https://www.google.com\">Salir de la página</a>\n</body>\n\n</html>"
      }
    ]
  },
  {
    "bloque": "Eventos y formularios",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 1 · Ejercicio 1",
    "ruta": "Castaños_Carlos_anexoprac2/Ejercicio_1",
    "ejecucion": "./Castaños_Carlos_anexoprac2/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_1/App.js",
        "tipo": "javascript",
        "contenido": "function avisarEnlace(){\n    alert(\"Estas encima de un hipervínculo\");\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 1</title>\n</head>\n<body>\n    <a href=\"#\" onmouseover=\"avisarEnlace()\">Pasa el ratón por aquí</a>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Eventos y formularios",
    "temas": [
      "Fundamentos",
      "DOM",
      "Formularios",
      "BOM"
    ],
    "titulo": "Ejercicio 2 · Ejercicio 2",
    "ruta": "Castaños_Carlos_anexoprac2/Ejercicio_2",
    "ejecucion": "./Castaños_Carlos_anexoprac2/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_2/App.js",
        "tipo": "javascript",
        "contenido": "function validarDni() {\n    var campoDni = document.getElementById(\"dni\").value.trim();\n    if (campoDni === \"\") {\n        alert(\"El campo no tiene datos\");\n        return false;\n    }\n    return true;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 2</title>\n</head>\n<body>\n    <form onsubmit=\"return validarDni()\">\n        <label for=\"dni\">DNI:</label>\n        <input type=\"text\" id=\"dni\" name=\"dni\">\n        <input type=\"submit\" value=\"Enviar\">\n    </form>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Eventos y formularios",
    "temas": [
      "Fundamentos",
      "DOM",
      "Formularios"
    ],
    "titulo": "Ejercicio 3 · Ejercicio 3",
    "ruta": "Castaños_Carlos_anexoprac2/Ejercicio_3",
    "ejecucion": "./Castaños_Carlos_anexoprac2/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_3/App.js",
        "tipo": "javascript",
        "contenido": "function sumarDiez() {\n    var campo = document.getElementById(\"contador\");\n    var valorActual = parseInt(campo.value, 10);\n    campo.value = valorActual + 10;\n}\n\nfunction inicializar() {\n    document.getElementById(\"contador\").value = 0;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 3</title>\n</head>\n<body>\n    <input type=\"text\" id=\"contador\" value=\"0\" readonly>\n    <br>\n    <button onclick=\"sumarDiez()\">Sumar</button>\n    <button onclick=\"inicializar()\">Inicializar</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Eventos y formularios",
    "temas": [
      "Fundamentos",
      "DOM",
      "Formularios",
      "BOM"
    ],
    "titulo": "Ejercicio 4 · Ejercicio 4",
    "ruta": "Castaños_Carlos_anexoprac2/Ejercicio_4",
    "ejecucion": "./Castaños_Carlos_anexoprac2/Ejercicio_4/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_4/App.js",
        "tipo": "javascript",
        "contenido": "function comprobarAcierto() {\n    var numIntroducido = parseInt(document.getElementById(\"numeroUsuario\").value, 10);\n\n    if (isNaN(numIntroducido) || numIntroducido < 1 || numIntroducido > 10) {\n        alert(\"Introduce un número válido entre 1 y 10.\");\n        return;\n    }\n\n    var numGenerado = Math.floor(Math.random() * 10) + 1;\n\n    numIntroducido === numGenerado \n        ? alert(\"¡Felicidades! Has acertado. El número era \" + numGenerado)\n        : alert(\"Has fallado. El número generado era \" + numGenerado);\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_4/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 4</title>\n</head>\n<body>\n    <label for=\"numeroUsuario\">Número:</label>\n    <input type=\"number\" id=\"numeroUsuario\" min=\"1\" max=\"10\">\n    <button onclick=\"comprobarAcierto()\">Comprobar</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Eventos y formularios",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 5 · Ejercicio 5",
    "ruta": "Castaños_Carlos_anexoprac2/Ejercicio_5",
    "ejecucion": "./Castaños_Carlos_anexoprac2/Ejercicio_5/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_5/App.js",
        "tipo": "javascript",
        "contenido": "function iniciarTemporizador() {\n    alert(\"¡Bienvenido al sitio web!\");\n    setTimeout(abrirDocumento, 20000);\n}\n\nfunction abrirDocumento() {\n    window.open(\"https://www.google.com\", \"_blank\");\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_5/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 5</title>\n</head>\n<body onload=\"iniciarTemporizador()\">\n    <h2>Página con temporizador</h2>\n    <p>En 20 segundos se abrirá automáticamente un nuevo documento...</p>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Eventos y formularios",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 6 · Ejercicio 6",
    "ruta": "Castaños_Carlos_anexoprac2/Ejercicio_6",
    "ejecucion": "./Castaños_Carlos_anexoprac2/Ejercicio_6/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_6/App.js",
        "tipo": "javascript",
        "contenido": "function calcularCadena() {\n    var cadena = \"2+2\";\n\n    var resultado = eval(cadena);\n\n    document.getElementById(\"resultadoEval\").textContent = \n        \"Cadena evaluada: '\" + cadena + \"' => Resultado: \" + resultado;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac2/Ejercicio_6/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 6</title>\n</head>\n<body>\n    <h2>Función eval()</h2>\n    <button onclick=\"calcularCadena()\">Ejecutar eval(\"2+2\")</button>\n    <p id=\"resultadoEval\"></p>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Formularios y DOM",
    "temas": [
      "Fundamentos",
      "DOM",
      "Formularios",
      "BOM"
    ],
    "titulo": "Ejercicio 1 · Anexo P3 - Ejercicio 1",
    "ruta": "Castaños_Carlos_anexoprac3/Ejercicio_1",
    "ejecucion": "./Castaños_Carlos_anexoprac3/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "app.js",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_1/app.js",
        "tipo": "javascript",
        "contenido": "function validarFormulario() {\n    let inputDni = document.getElementById(\"campoDni\");\n    let valorDni = inputDni.value.trim();\n\n    if (valorDni === \"\") {\n        alert(\"El campo no tiene datos\");\n        return false;\n    }\n\n    return true;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Anexo P3 - Ejercicio 1</title>\n    <script src=\"app.js\"></script>\n</head>\n<body>\n    <h2>Formulario DNI</h2>\n    \n    <form id=\"formDni\" onsubmit=\"return validarFormulario()\">\n        <label for=\"campoDni\">DNI:</label>\n        <input type=\"text\" id=\"campoDni\" name=\"dni\">\n        <input type=\"submit\" value=\"Enviar\">\n    </form>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Formularios y DOM",
    "temas": [
      "Fundamentos",
      "DOM",
      "Formularios"
    ],
    "titulo": "Ejercicio 2 · Anexo P3 - Ejercicio 2",
    "ruta": "Castaños_Carlos_anexoprac3/Ejercicio_2",
    "ejecucion": "./Castaños_Carlos_anexoprac3/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "app.js",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_2/app.js",
        "tipo": "javascript",
        "contenido": "function sumarDiez() {\n    let campo = document.getElementById(\"cajaContador\");\n    let valorActual = parseInt(campo.value, 10);\n    campo.value = valorActual + 10;\n}\n\nfunction inicializar() {\n    document.getElementById(\"cajaContador\").value = 0;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Anexo P3 - Ejercicio 2</title>\n    <script src=\"app.js\"></script>\n</head>\n<body>\n    <h2>Contador (Acceso por DOM)</h2>\n\n    <input type=\"text\" id=\"cajaContador\" value=\"0\" readonly>\n    <br><br>\n    <button onclick=\"sumarDiez()\">Sumar</button>\n    <button onclick=\"inicializar()\">Inicializar</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Formularios y DOM",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 3 · Anexo P3 - Ejercicio 3",
    "ruta": "Castaños_Carlos_anexoprac3/Ejercicio_3",
    "ejecucion": "./Castaños_Carlos_anexoprac3/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "app.js",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_3/app.js",
        "tipo": "javascript",
        "contenido": "    // Muestra el número total de enlaces en el documento\nfunction mostrarNumEnlaces() {\n    let todosLosEnlaces = document.getElementsByTagName(\"a\");\n    let num = todosLosEnlaces.length;\n    \n    document.getElementById(\"resultado\").innerHTML = \n        \"<p><strong>Número total de enlaces:</strong> \" + num + \"</p>\";\n}\n\n// Muestra las URLs de todos los enlaces del documento\nfunction mostrarRefEnlaces() {\n    let todosLosEnlaces = document.getElementsByTagName(\"a\");\n    let html = \"<p><strong>Referencias de todos los enlaces:</strong></p><ul>\";\n\n    for (let i = 0; i < todosLosEnlaces.length; i++) {\n        // Obtenemos el atributo href mediante getAttribute o la propiedad href del nodo.\n        let url = todosLosEnlaces[i].getAttribute(\"href\");\n        html += \"<li>\" + url + \"</li>\";\n    }\n    html += \"</ul>\";\n    document.getElementById(\"resultado\").innerHTML = html;\n}\n\n// Muestra las URLs de los enlaces desglosadas párrafo por párrafo.\nfunction mostrarRefEnlacesPorParrafo() {\n    let parrafos = document.getElementById(\"parrafos\").getElementsByTagName(\"p\");\n    let html = \"<p><strong>Referencias de enlaces por párrafo:</strong></p>\";\n    \n    for (let i = 0; i < parrafos.length; i++) {\n        let enlacesEnParrafo = parrafos[i].getElementsByTagName(\"a\");\n        html += \"<p><strong>Párrafo \" + (i + 1) + \":</strong> (\" + enlacesEnParrafo.length + \" enlaces)</p><ul>\";\n        for (let j = 0; j < enlacesEnParrafo.length; j++) {\n            html += \"<li>\" + enlacesEnParrafo[j].getAttribute(\"href\") + \"</li>\";\n        }\n        html += \"</ul>\";\n    }\n    document.getElementById(\"resultado\").innerHTML = html;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Anexo P3 - Ejercicio 3</title>\n    <script src=\"app.js\"></script>\n</head>\n<body>\n    <h2>Documento con Enlaces</h2>\n    <div id=\"parrafos\">\n    <p id=\"p1\">\n        Primer párrafo con un enlace: \n        <a href=\"https://www.google.com\">Google</a>\n    </p>\n\n    <p id=\"p2\">\n        Segundo párrafo con dos enlaces: \n        <a href=\"https://www.wikipedia.org\">Wikipedia</a> y \n        <a href=\"https://www.w3schools.com\">W3Schools</a>\n    </p>\n\n    <p id=\"p3\">\n        Tercer párrafo con tres enlaces: \n        <a href=\"https://github.com\">GitHub</a>, \n        <a href=\"https://moodle.org\">Moodle</a> y \n        <a href=\"https://developer.mozilla.org\">MDN</a>\n    </p>\n    </div>\n\n    <button onclick=\"mostrarNumEnlaces()\">Número de enlaces</button>\n    <button onclick=\"mostrarRefEnlaces()\">Referencia enlaces</button>\n    <button onclick=\"mostrarRefEnlacesPorParrafo()\">Referencia enlaces por párrafo</button>\n\n    <div id=\"resultado\" style=\"margin-top:20px; padding:10px; border:1px solid #ccc;\"></div>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Formularios y DOM",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 4 · Anexo P3 - Ejercicio 4",
    "ruta": "Castaños_Carlos_anexoprac3/Ejercicio_4",
    "ejecucion": "./Castaños_Carlos_anexoprac3/Ejercicio_4/index.html",
    "archivos": [
      {
        "nombre": "app.js",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_4/app.js",
        "tipo": "javascript",
        "contenido": "function mostrarNumEnlaces() {\n    let todosLosEnlaces = document.getElementsByTagName(\"a\");\n    document.getElementById(\"resultado\").innerHTML = \n        \"<p><strong>Número total de enlaces:</strong> \" + todosLosEnlaces.length + \"</p>\";\n}\n\nfunction mostrarRefEnlaces() {\n    let todosLosEnlaces = document.getElementsByTagName(\"a\");\n    let html = \"<p><strong>Referencias de todos los enlaces:</strong></p><ul>\";\n\n    for (let i = 0; i < todosLosEnlaces.length; i++) {\n        html += \"<li>\" + todosLosEnlaces[i].getAttribute(\"href\") + \"</li>\";\n    }\n\n    html += \"</ul>\";\n    document.getElementById(\"resultado\").innerHTML = html;\n}\n\nfunction mostrarRefEnlacesPorParrafo() {\n    let parrafos = document.getElementsByTagName(\"p\");\n    let html = \"<p><strong>Referencias de enlaces por párrafo:</strong></p>\";\n\n    for (let i = 0; i < parrafos.length; i++) {\n        let enlacesEnParrafo = parrafos[i].getElementsByTagName(\"a\");\n        html += \"<p><strong>Párrafo \" + (i + 1) + \":</strong> (\" + enlacesEnParrafo.length + \" enlaces)</p><ul>\";\n\n        for (let j = 0; j < enlacesEnParrafo.length; j++) {\n            html += \"<li>\" + enlacesEnParrafo[j].getAttribute(\"href\") + \"</li>\";\n        }\n\n        html += \"</ul>\";\n    }\n\n    document.getElementById(\"resultado\").innerHTML = html;\n}\n\n// Nuevas funciones del Ejercicio 4. Cambio de atributos de color mediante DOM.\nfunction parrafosVerdes() {\n    let parrafos = document.getElementsByTagName(\"p\");\n\n    // Recorremos la colección de nodos <p> para modificar su atributo de estilo.\n    for (let i = 0; i < parrafos.length; i++) {\n        parrafos[i].style.color = \"green\";\n    }\n}\n\nfunction desactivarColor() {\n    let parrafos = document.getElementsByTagName(\"p\");\n\n    // Restablecemos la propiedad color a su valor por defecto inicial.\n    for (let i = 0; i < parrafos.length; i++) {\n        parrafos[i].style.color = \"\";\n    }\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_anexoprac3/Ejercicio_4/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Anexo P3 - Ejercicio 4</title>\n    <script src=\"app.js\"></script>\n</head>\n<body>\n    <h2>Documento con Enlaces y Cambio de Color</h2>\n\n    <p id=\"p1\">\n        Primer párrafo con un enlace: \n        <a href=\"https://www.google.com\">Google</a>\n    </p>\n\n    <p id=\"p2\">\n        Segundo párrafo con dos enlaces: \n        <a href=\"https://www.wikipedia.org\">Wikipedia</a> y \n        <a href=\"https://www.w3schools.com\">W3Schools</a>\n    </p>\n\n    <p id=\"p3\">\n        Tercer párrafo con tres enlaces: \n        <a href=\"https://github.com\">GitHub</a>, \n        <a href=\"https://moodle.org\">Moodle</a> y \n        <a href=\"https://developer.mozilla.org\">MDN</a>\n    </p>\n\n    <!-- Botones del ejercicio 3 -->\n    <button onclick=\"mostrarNumEnlaces()\">Número de enlaces</button>\n    <button onclick=\"mostrarRefEnlaces()\">Referencia enlaces</button>\n    <button onclick=\"mostrarRefEnlacesPorParrafo()\">Referencia enlaces por párrafo</button>\n\n    <br><br>\n\n    <!-- Nuevos botones del ejercicio 4 -->\n    <button onclick=\"parrafosVerdes()\">Párrafos verdes</button>\n    <button onclick=\"desactivarColor()\">Desactivar color</button>\n\n    <div id=\"resultado\" style=\"margin-top:20px; padding:10px; border:1px solid #ccc;\"></div>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos de JavaScript",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 1 · Ejercicio 1",
    "ruta": "Castaños_Carlos_bloq1prac1/Ejercicio_1",
    "ejecucion": "./Castaños_Carlos_bloq1prac1/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_1/App.js",
        "tipo": "javascript",
        "contenido": "let suma = 0;\nlet mayores100 = 0;\n\nfor (let i = 1; i <= 5; i++) {\n    let num = parseInt(prompt(`Introduce el número ${i}:`));\n    suma += num;\n    if (num >= 100) {\n    mayores100++;\n    }\n}\n\nalert(`Suma total: ${suma} \\n Mayores de 100: ${mayores100}`);\nconsole.log(`Suma total: ${suma}`);\nconsole.log(`Mayores de 100: ${mayores100}`);"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 1</title>\n</head>\n<body>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos de JavaScript",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 2 · Ejercicio 2",
    "ruta": "Castaños_Carlos_bloq1prac1/Ejercicio_2",
    "ejecucion": "./Castaños_Carlos_bloq1prac1/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_2/App.js",
        "tipo": "javascript",
        "contenido": "let numeros = [7, 8, 2, 9, 10];\nlet sumaMayores8 = 0;\n\nfor (let n of numeros) {\n    if (n > 8) {\n    sumaMayores8 += n;\n    }\n}\n\nalert(`Suma de los mayores de 8: ${sumaMayores8}`);\nconsole.log(`Suma de los mayores de 8: ${sumaMayores8}`);"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 2</title>\n</head>\n<body>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos de JavaScript",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 3 · Ejercicio 3",
    "ruta": "Castaños_Carlos_bloq1prac1/Ejercicio_3",
    "ejecucion": "./Castaños_Carlos_bloq1prac1/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_3/App.js",
        "tipo": "javascript",
        "contenido": "let mes = prompt(\"Dime un mes:\").toLowerCase();\n\nswitch (mes) {\n    case \"diciembre\":\n    case \"enero\":\n    case \"febrero\":\n        alert(\"Estamos en Invierno\");\n        break;\n    case \"marzo\":\n    case \"abril\":\n    case \"mayo\":\n        alert(\"Estamos en Primavera\");\n        break;\n    case \"junio\":\n    case \"julio\":\n    case \"agosto\":\n        alert(\"Estamos en Verano\");\n        break;\n    case \"septiembre\":\n    case \"octubre\":\n    case \"noviembre\":\n        alert(\"Estamos en Otoño\");\n        break;\n    default:\n        alert(\"Mes no reconocido\");\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 3</title>\n</head>\n<body>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos de JavaScript",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 4 · Ejercicio 4",
    "ruta": "Castaños_Carlos_bloq1prac1/Ejercicio_4",
    "ejecucion": "./Castaños_Carlos_bloq1prac1/Ejercicio_4/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_4/App.js",
        "tipo": "javascript",
        "contenido": "const num = parseInt(prompt(\"Introduce un número:\"), 10);\n\nif (num % 2 === 0) {\n    alert(`El número ${num} es par.`);\n} else {\n    alert(`El número ${num} es impar.`);\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_4/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 4</title>\n</head>\n<body>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos de JavaScript",
    "temas": [
      "BOM"
    ],
    "titulo": "Ejercicio 5 · Ejercicio 5",
    "ruta": "Castaños_Carlos_bloq1prac1/Ejercicio_5",
    "ejecucion": "./Castaños_Carlos_bloq1prac1/Ejercicio_5/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_5/App.js",
        "tipo": "javascript",
        "contenido": "let precio = parseFloat(prompt(\"Introduce el precio del artículo:\"));\nlet tipoIva = 0.21;\n\nlet iva = precio * tipoIva;\nlet total = precio + iva;\n\nalert(`Precio base: ${precio.toFixed(2)} € \\n IVA 21%: ${iva.toFixed(2)} € \\n Total: ${total.toFixed(2)} €`);\nconsole.log(`IVA: ${iva.toFixed(2)} €`);\nconsole.log(`Total con IVA: ${total.toFixed(2)} €`);"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_5/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 5</title>\n</head>\n<body>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos de JavaScript",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 6 · Ejercicio 6",
    "ruta": "Castaños_Carlos_bloq1prac1/Ejercicio_6",
    "ejecucion": "./Castaños_Carlos_bloq1prac1/Ejercicio_6/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_6/App.js",
        "tipo": "javascript",
        "contenido": "let cadena = prompt('Introduce una cadena: ');\nlet palabras = cadena.split(' ');\n\ndocument.write(`La longitud de la cadena es ${cadena.length}<br>\nLa cadena en mayusculas es ${cadena.toUpperCase()}<br>\nLa cadena en minusculas es ${cadena.toLowerCase()}<br>\n`);\n\ndocument.write('CADENA NORMAL<br>');\nfor (let i = 0; i < palabras.length; i++) {\ndocument.write(`${palabras[i]}<br>`);\n}\n\ndocument.write('CADENA AL REVÉS<br>');\nfor (let i = palabras.length - 1; i >= 0; i--) {\ndocument.write(`${palabras[i]}<br>`);\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac1/Ejercicio_6/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 6</title>\n</head>\n<body>\n    <noscript>Necesitas habilitar JavaScript para poder ver este contenido.</noscript>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 1 · Ejercicio 1",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_1",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_1/App.js",
        "tipo": "javascript",
        "contenido": "let precio = parseFloat(prompt('Introduce el precio del producto:'));\n\nfunction calcularIVA(precio) {\n    const IVA = 0.21;\n    return precio * IVA;\n}\n\nconst ivaCalculado = calcularIVA(precio);\nconst precioFinal = precio + ivaCalculado;\n\nalert(`El precio final con IVA es: ${precioFinal.toFixed(2)}`);\nconsole.log(`El precio final con IVA es: ${precioFinal.toFixed(2)}`);"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 1</title>\n</head>\n<body>\n    \n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 2 · Ejercicio 2",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_2",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_2/App.js",
        "tipo": "javascript",
        "contenido": "const mes = prompt(\"Dime un mes:\").trim().toLowerCase();\n\nswitch (mes) {\n    case \"diciembre\":\n    case \"enero\":\n    case \"febrero\":\n        alert(\"Estamos en Invierno\");\n        break;\n    case \"marzo\":\n    case \"abril\":\n    case \"mayo\":\n        alert(\"Estamos en Primavera\");\n        break;\n    case \"junio\":\n    case \"julio\":\n    case \"agosto\":\n        alert(\"Estamos en Verano\");\n        break;\n    case \"septiembre\":\n    case \"octubre\":\n    case \"noviembre\":\n        alert(\"Estamos en Otoño\");\n        break;\n    default:\n        alert(\"Mes no reconocido\");\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 2</title>\n</head>\n<body>\n    \n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 3 · Ejercicio 3",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_3",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_3/App.js",
        "tipo": "javascript",
        "contenido": "document.write(\"<h1>Bienvenido a mi página</h1>\");\ndocument.write(\"<p>Plataforma: \" + navigator.platform + \"</p>\");\n\nif (confirm(\"Quieres continuar?\")){\n    document.write(\"<p>continuamos...</p>\");\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 3</title>\n</head>\n<body>\n    <div class=\"contenedor\"></div>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "BOM"
    ],
    "titulo": "Ejercicio 4 · Ejercicio 4",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_4",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_4/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_4/App.js",
        "tipo": "javascript",
        "contenido": "/*function redimensionar() {\n    alert(\"¡Bienvenido al sitio web!\");\nif (navigator.userAgent.includes(\"MSIE\")) {\nwindow.resizeTo(500, 500);\n} else {\n        alert(\"No permitido con este navegador\");\n    }\n}*/\n/*window.onload = function() {\n    alert(\"¡Bienvenido al sitio web!\");\n}*/\nfunction redimensionarPantalla() {\n    var navegador = navigator.userAgent.toLowerCase();\n    if (navegador.indexOf(\"msie\") !== -1 || navegador.indexOf(\"trident\") !== -1) {\n    window.resizeTo(500, 500);\n    }else {\n        alert(\"Operación no permitida con este navegador\");\n    }\n}\nredimensionarPantalla();"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_4/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 4</title>\n</head>\n<body> \n    \n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 5 · Ejercicio 5",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_5",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_5/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_5/App.js",
        "tipo": "javascript",
        "contenido": "function mostrarFechaActual(){\n    let fecha = new Date();\n\n    let diasSemana = [\n        \"Domingo\", \"Lunes\", \"Martes\", \"Miercoles\", \n        \"Jueves\", \"Viernes\", \"Sabado\"\n    ];\n\n    let meses = [\n        \"Enero\", \"Febrero\", \"Marzo\", \"Abril\", \"Mayo\", \"Junio\",\n        \"Julio\", \"Agosto\", \"Septiembre\", \"Octubre\", \"Noviembre\", \"Diciembre\"\n    ];\n\n    let diaTexto = diasSemana[fecha.getDay()];\n    let diaNumero = fecha.getDate();\n    let mesTexto = meses[fecha.getMonth()];\n    let anio = fecha.getFullYear();\n\n    let textoFecha = `${diaTexto}, ${diaNumero} de ${mesTexto} de ${anio}`;\n    document.getElementById(\"parrafoFecha\").innerHTML = textoFecha;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_5/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 5</title>\n</head>\n<body>\n    <h1>Fecha Actual</h1>\n    <button type=\"button\" onclick=\"mostrarFechaActual()\">Fecha Actual</button>\n    <p id=\"parrafoFecha\"></p>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 6 · Ejercicio 6",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_6",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_6/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_6/App.js",
        "tipo": "javascript",
        "contenido": "function mostrarHoraYSaludo() {\n    let ahora = new Date();\n    let hora = ahora.getHours();\n    let minutos = ahora.getMinutes().toString().padStart(2, '0');\n\n    let saludo = \" \";\n\n    if (hora >= 0 && hora < 14) {\n        saludo = \"Buenos días\";\n    }\n    else if (hora >= 14 && hora < 20) {\n        saludo = \"Buenas tardes\";\n    }\n    else {\n        saludo = \"Buenas noches\";\n    }\n\n    let mensaje = saludo + \", son las \" + hora + \":\" + minutos + \" horas\";\n    document.getElementById(\"salidaHora\").textContent = mensaje;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_6/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 6</title>\n</head>\n<body>\n    <h1>Hora y Saludo</h1>\n    <button type=\"button\" onclick=\"mostrarHoraYSaludo()\">Hora Actual</button>\n    <p id=\"salidaHora\"></p>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "DOM"
    ],
    "titulo": "Ejercicio 7 · Ejercicio 7",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_7",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_7/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_7/App.js",
        "tipo": "javascript",
        "contenido": "function cambiarFondo(color) {\n    document.body.style.backgroundColor = color;\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_7/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 7</title>\n</head>\n<body>\n    <h1>Cambiar de Color el Fondo</h1>\n    <button onclick=\"cambiarFondo('blue')\">Azul</button>\n    <button onclick=\"cambiarFondo('green')\">Verde</button>\n    <button onclick=\"cambiarFondo('red')\">Rojo</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 8 · Ejercicio 8",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_8",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_8/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_8/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\nlet infoContenedor = document.getElementById(\"infoLocation\");\n\nlet urlActual = window.location.href;\n//alert(\"URL del documento: \" + urlActual);\ninfoContenedor.innerHTML = \"<p><strong>URL del documento:</strong> \" + urlActual + \"</p>\";\nlet pathName = window.location.pathname;\nlet protocolo = window.location.protocol;\n\ninfoContenedor.innerHTML = \n    \"<p><strong>URL del documento:</strong> \" + urlActual + \"</p>\" +\n    \"<p><strong>Pathname:</strong> \" + pathName + \"</p>\" +\n    \"<p><strong>Protocolo:</strong> \" + protocolo + \"</p>\";\n\nfunction irAGoogle() {\n    window.location.href = \"https://www.google.com\";\n}\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_8/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 8</title>\n</head>\n<body>\n    <h1>Información de Location</h1>\n    <div id=\"infoLocation\"></div>\n    <br>\n    <button onclick=\"irAGoogle()\">Ir a Google</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "Fundamentos y lógica",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 9 · Ejercicio 9",
    "ruta": "Castaños_Carlos_bloq1prac2/Ejercicio_9",
    "ejecucion": "./Castaños_Carlos_bloq1prac2/Ejercicio_9/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_9/App.js",
        "tipo": "javascript",
        "contenido": "let ventanaSecundaria = null;\n\nfunction abrirVentana() {\n    ventanaSecundaria = window.open(\"\", \"VentanaHija\", \"width=350,height=200,top=200,left=200\");\n    if (ventanaSecundaria) {\n        ventanaSecundaria.document.open();\n        ventanaSecundaria.document.write(`\n            <!DOCTYPE html>\n            <html lang=\"es\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <title>Ventana Secundaria</title>\n            </head>\n            <body>\n                <h3>Ventana Secundaria</h3>\n                <p>Pincha abajo para volver a la página principal:</p>\n                <!-- window.close() cierra la propia ventana hija -->\n                <button onclick=\"window.close()\">Cerrar</button>\n            </body>\n            </html>\n        `);\n        ventanaSecundaria.document.close();\n    }\n}"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castaños_Carlos_bloq1prac2/Ejercicio_9/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ejercicio 9</title>\n</head>\n<body>\n    <h1>Ventana Principal</h1>\n    <button onclick=\"abrirVentana()\">Abrir Nueva Ventana</button>\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "JavaScript aplicado",
    "temas": [
      "Fundamentos",
      "DOM",
      "Eventos",
      "Formularios",
      "BOM"
    ],
    "titulo": "Ejercicio 1 · Ejercicio 1 - Formulario",
    "ruta": "Castanos_Carlos_bloq1prac5/Ejercicio_1",
    "ejecucion": "./Castanos_Carlos_bloq1prac5/Ejercicio_1/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_1/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\n    let form = document.getElementById(\"miFormulario\");\n    let inputNombre = document.getElementById(\"nombre\");\n    let selectAficion = document.getElementById(\"aficion\");\n    let textareaObs = document.getElementById(\"observaciones\");\n\n    // Establecer el foco en el campo nombre al cargar la página\n    inputNombre.focus();\n\n    // Evento onchange en la lista desplegable de aficiones\n    selectAficion.onchange = function() {\n        let longitud = this.options.length;\n        let indice = this.selectedIndex;\n        let valor = this.options[indice].value;\n        alert(\n            \"La longitud de la lista es \" + longitud + \"\\n\" +\n            \"El índice seleccionado es el \" + indice + \"\\n\" +\n            \"El valor del índice seleccionado es \" + valor\n        );\n    };\n\n    // Limitar el textarea a 150 caracteres\n    textareaObs.onkeypress = function(event) {        \n        if (this.value.length >= 150) {\n            event.preventDefault();\n        }\n    };\n/*\n    // También se valida al pegar texto\n    textareaObs.oninput = function() {\n        if (this.value.length > 150) {\n            this.value = this.value.substring(0, 150);\n        }\n    };\n*/\n    // Validaciones al enviar el formulario (onsubmit)\n    form.onsubmit = function(event) {\n        let campoDni = document.getElementById(\"dni\").value.trim();\n        let campoTelefono = document.getElementById(\"telefono\").value.trim();\n\n        // Validar DNI obligatorio\n        if (campoDni === \"\") {\n            alert(\"Error: El campo DNI es obligatorio.\");\n            document.getElementById(\"dni\").focus();\n            event.preventDefault();\n        }\n\n        // Validar Teléfono: 9 dígitos consecutivos sin espacios ni guiones\n        else if (!/^\\d{9}$/.test(campoTelefono)) {\n            alert(\"Error: El teléfono debe estar formado por 9 dígitos consecutivos.\");\n            document.getElementById(\"telefono\").focus();\n            event.preventDefault();\n        }\n        else {\n        alert(\"Formulario validado correctamente. Guardando cambios...\");\n        }\n    };\n};"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_1/index.html",
        "tipo": "html",
        "contenido": "<!doctype html>\n<html lang=\"es\">\n\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\" />\n    <title>Ejercicio 1 - Formulario</title>\n</head>\n\n<body>\n    <h2>FORMULARIO</h2>\n\n    <form id=\"miFormulario\">\n        <p>\n            <label for=\"nombre\">Nombre:</label><br />\n            <input type=\"text\" id=\"nombre\" name=\"nombre\" />\n        </p>\n\n        <p>\n            <label for=\"apellidos\">Apellidos:</label><br />\n            <input type=\"text\" id=\"apellidos\" name=\"apellidos\" />\n        </p>\n\n        <p>\n            <label for=\"telefono\">Teléfono:</label><br />\n            <input type=\"text\" id=\"telefono\" name=\"telefono\" />\n        </p>\n\n        <p>\n            <label for=\"dni\">DNI:</label><br />\n            <input type=\"text\" id=\"dni\" name=\"dni\" />\n        </p>\n\n        <p>\n            <label for=\"edad\">Edad:</label><br />\n            <input type=\"number\" id=\"edad\" name=\"edad\" />\n        </p>\n\n        <p>\n            Sexo:<br />\n            <input type=\"radio\" id=\"hombre\" name=\"sexo\" value=\"Hombre\" checked />\n            <label for=\"hombre\">Hombre</label><br />\n            <input type=\"radio\" id=\"mujer\" name=\"sexo\" value=\"Mujer\" />\n            <label for=\"mujer\">Mujer</label>\n        </p>\n\n        <p>\n            <label for=\"foto\">Incluir mi foto:</label><br />\n            <input type=\"file\" id=\"foto\" name=\"foto\" />\n        </p>\n\n        <p>\n            <input type=\"checkbox\" id=\"publicidad\" name=\"publicidad\" checked />\n            <label for=\"publicidad\">Enviar publicidad</label>\n        </p>\n\n        <p>\n            <label for=\"aficion\">Elige tu afición favorita:</label>\n            <select id=\"aficion\" name=\"aficion\">\n                <option value=\"musica\">musica</option>\n                <option value=\"lectura\">lectura</option>\n                <option value=\"deporte\">deporte</option>\n            </select>\n        </p>\n\n        <p>\n            <label for=\"observaciones\">Observaciones:</label><br />\n            <textarea id=\"observaciones\" name=\"observaciones\" rows=\"4\" cols=\"40\"></textarea>\n        </p>\n\n        <p>\n            <input type=\"submit\" value=\"Guardar cambios\" />\n            <input type=\"reset\" value=\"Borrar los datos introducidos\" />\n        </p>\n    </form>\n\n    <!-- <script src=\"App.js\"></script> -->\n</body>\n\n</html>"
      }
    ]
  },
  {
    "bloque": "JavaScript aplicado",
    "temas": [
      "Fundamentos",
      "DOM",
      "Formularios",
      "BOM"
    ],
    "titulo": "Ejercicio 2 · Ejercicio 2 - Color Lista",
    "ruta": "Castanos_Carlos_bloq1prac5/Ejercicio_2",
    "ejecucion": "./Castanos_Carlos_bloq1prac5/Ejercicio_2/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_2/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\n    var select = document.getElementById(\"colorSelect\");\n    var parrafo = document.getElementById(\"parrafoTexto\");\n\n    select.onchange = function() {\n        parrafo.style.color = this.value;\n    };\n};"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_2/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 2 - Color Lista</title>\n</head>\n<body>\n    <p id=\"parrafoTexto\">Este párrafo cambiará de color con la opción seleccionada del cuadro de lista</p>\n\n    <label for=\"colorSelect\">Selecciona un color:</label>\n    <select id=\"colorSelect\">\n        <option value=\"black\">Normal</option>\n        <option value=\"green\">Verde</option>\n        <option value=\"blue\">Azul</option>\n        <option value=\"red\">Rojo</option>\n    </select>\n\n    <!-- <script src=\"App.js\"></script> -->\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "JavaScript aplicado",
    "temas": [
      "Fundamentos",
      "DOM",
      "Formularios",
      "BOM"
    ],
    "titulo": "Ejercicio 3 · Ejercicio 3 - Color Radio",
    "ruta": "Castanos_Carlos_bloq1prac5/Ejercicio_3",
    "ejecucion": "./Castanos_Carlos_bloq1prac5/Ejercicio_3/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_3/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\n    var radios = document.getElementsByName(\"colorRadio\");\n    var parrafo = document.getElementById(\"parrafoTexto\");\n\n    for (var i = 0; i < radios.length; i++) {\n        radios[i].onclick = function() {\n            parrafo.style.color = this.value;\n        };\n    }\n};"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_3/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 3 - Color Radio</title>\n</head>\n<body>\n    <p id=\"parrafoTexto\">Este párrafo cambiará de color con la opción seleccionada del cuadro de lista</p>\n\n    <p>\n        <input type=\"radio\" id=\"verde\" name=\"colorRadio\" value=\"green\">\n        <label for=\"verde\">Verde</label><br>\n\n        <input type=\"radio\" id=\"azul\" name=\"colorRadio\" value=\"blue\">\n        <label for=\"azul\">Azul</label><br>\n\n        <input type=\"radio\" id=\"rojo\" name=\"colorRadio\" value=\"red\">\n        <label for=\"rojo\">Rojo</label>\n    </p>\n\n    <!-- <script src=\"App.js\"></script> -->\n</body>\n</html>"
      }
    ]
  },
  {
    "bloque": "JavaScript aplicado",
    "temas": [
      "Fundamentos",
      "DOM",
      "BOM"
    ],
    "titulo": "Ejercicio 4 · Ejercicio 4 - Estilos Checkbox",
    "ruta": "Castanos_Carlos_bloq1prac5/Ejercicio_4",
    "ejecucion": "./Castanos_Carlos_bloq1prac5/Ejercicio_4/index.html",
    "archivos": [
      {
        "nombre": "App.js",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_4/App.js",
        "tipo": "javascript",
        "contenido": "window.onload = function() {\n    var checkNegrita = document.getElementById(\"checkNegrita\");\n    var checkCursiva = document.getElementById(\"checkCursiva\");\n    var parrafo = document.getElementById(\"parrafoTexto\");\n\n    checkNegrita.onclick = function() {\n        if (this.checked) {\n            parrafo.style.fontWeight = \"bold\";\n        } else {\n            parrafo.style.fontWeight = \"normal\";\n        }\n    };\n\n    checkCursiva.onclick = function() {\n        if (this.checked) {\n            parrafo.style.fontStyle = \"italic\";\n        } else {\n            parrafo.style.fontStyle = \"normal\";\n        }\n    };\n};"
      },
      {
        "nombre": "index.html",
        "ruta": "./Castanos_Carlos_bloq1prac5/Ejercicio_4/index.html",
        "tipo": "html",
        "contenido": "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <script src=\"App.js\"></script>\n    <meta charset=\"UTF-8\">\n    <title>Ejercicio 4 - Estilos Checkbox</title>\n</head>\n<body>\n    <p id=\"parrafoTexto\">Párrafo de ejemplo para aplicar formato de negrita y cursiva.</p>\n\n    <p>\n        <input type=\"checkbox\" id=\"checkNegrita\">\n        <label for=\"checkNegrita\">Negrita</label>\n        <br>\n        <input type=\"checkbox\" id=\"checkCursiva\">\n        <label for=\"checkCursiva\">Cursiva</label>\n    </p>\n\n    <!-- <script src=\"App.js\"></script> -->\n</body>\n</html>"
      }
    ]
  }
];
