# Info y prueba del prototipo

Este proyecto se basa en el escaneo de imágenes con un dispositivo electrónico (tablet, celular, etc) para acceder a una experiencia de realidad aumentada. Estas imágenes sirven de marcadores para mostrar información en pantalla (videos, texto, audio e imágenes). 

Herramientas utilizadas: 
* Visual Studio Code
* Framework A-Frame
* Librería mindAR.js
* Arduino IDE
* github pages
* validator.w3

Roles del equipo:
* Docente a cargo, supervisión general: Jorge Yunes
* Producción general: Ariel Di Gerolamo y Facundo García Mata
* Diseño gráfico: Emilia Cachia y Camila Cammertoni
* Desarrollo de software: Matías Taborda


Comenzamos a diseñar el código del proyecto en el editor de código Visual Studio Code. Luego los subimos a un repositorio en github que vamos actualizando en función de los cambios que realizamos en el código. Para crear la web estática que servirá como conexión entre el usuario y el programa utilizamos la funcionalidad “github pages”. Accederemos a esta web escaneando un código QR. 
Dentro de github, contamos con los dos archivos principales del código del proyecto, index.html y targets.mind. En index.html creamos la interfaz y diseñamos la interacción con los distintos marcadores, contenidos en el archivo targets.mind. Este último archivo es interpretado gracias a la librería mindAR - que incluimos en index.html - que maneja la implementación de realidad aumentada en el lenguaje de programación html. Mediante las herramientas que incluye la web de la librería mindAR, entrenamos imágenes con IA y las almacenamos en targets.mind, para luego ser reconocidas desde distintos ángulos y distancias, con cierto margen de error. Esta librería trabaja en complemetación con el framework A-Frame, el cual nos permite construir la escena de realidad aumentada y mostrar información en pantalla al detectar un marcador.
A partir de todo esto, creamos un ejemplo de implementación del desarrollo, al cual podemos acceder escaneando el siguiente QR y luego escaneando las imágenes que usamos como prueba:

<img width="825" height="477" alt="image" src="https://github.com/user-attachments/assets/ee512b0d-2770-49ed-aaf3-ab4892630fa6" />

Se trata de un ejemplo utilizando imágenes relacionadas con el tema del proyecto. 
