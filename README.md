# ocho-memorias-ar

Este proyecto se basa en el escaneo de imágenes con un dispositivo electrónico (tablet, celular, etc) para acceder a una experiencia de realidad aumentada. Estas imágenes sirven de marcadores para mostrar información en pantalla (videos, texto, audio e imágenes). 

Herramientas utilizadas: 
* Visual Studio Code
* Librería mindAR.js
* Arduino IDE
* github pages
* validator.w3

Comenzamos a diseñar el código del proyecto en los entornos de programación Visual Studio Code y Arduino IDE. Luego los subimos a un repositorio en github que vamos actualizando en función de los cambios que realizamos en el código. Para crear la web estática que servirá como conexión entre el usuario y el programa utilizamos la funcionalidad “github pages”. Accederemos a esta web escaneando un código QR. 
Dentro de github, contamos con los dos archivos principales del código del proyecto, index.html y targets.mind. En index.html creamos la interfaz y diseñamos la interacción con los distintos marcadores, contenidos en el archivo targets.mind. Este último archivo es interpretado gracias a la librería mindAR - que incluimos en index.html - que maneja la implementación de realidad aumentada en el lenguaje de programación html. Mediante las herramientas que incluye la web de la librería mindAR, entrenamos imágenes con IA y las almacenamos en targets.mind, para luego ser reconocidas desde distintos ángulos y distancias, con cierto margen de error.
A partir de todo esto, creamos un ejemplo de implementación del desarrollo, al cual podemos acceder escaneando el siguiente QR y luego escaneando las imágenes que usamos como prueba:

<img width="651" height="404" alt="image" src="https://github.com/user-attachments/assets/68fedb11-50b9-4c70-a2d2-4728b2c4d3ec" />

Si bien se trata de un ejemplo utilizando imágenes inconexas con el tema del que trata el proyecto, aún estamos explorando las herramientas que vamos a utilizar para el desarrollo de esta experiencia de realidad aumentada como es mostrar texto en pantalla, videos e imágenes, así como el uso de un contador de imágenes escaneadas que conduce a un mensaje final.
Entre otras ideas que podríamos implementar a futuro, contemplamos la conexión a un circuito físico que responda a comandos enviados por el usuario desde la web del proyecto.
