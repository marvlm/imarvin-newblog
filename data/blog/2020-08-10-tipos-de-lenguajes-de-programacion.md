---
title: Tipos de lenguajes de programación
slug: tipos-de-lenguajes-de-programacion
date: '2020-08-10'
date_updated: '2020-08-11'
tags: ['Tech', 'Colaboraciones', 'OpenWebinars']
draft: false
image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'
summary: 'Te explico los tipos de lenguajes de programación que existen, su evolución y las diferentes generaciones que han ido surgiendo a lo largo de los años.'
---

![tipos-de-lenguajes-de-programacion-banner](https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Este es el segundo de la serie de artículos que he escrito colaborando en el blog de OpenWebinars sobre lenguajes de programación.

En el primero introduje la idea de, [¿Qué es un lenguaje de programación?](/lenguaje-de-programacion/) y hoy corresponde conocer los distintos tipos de lenguaje de programación. El artículo original en OpenWebinars lo pueden encontrar en el siguiente enlace:

- [Tipos de lenguajes de programación](https://openwebinars.net/blog/tipos-de-lenguajes-de-programacion/)

---

# Tipos de lenguajes de programación

Si queremos tener una visión general de los tipos de lenguajes de programación debemos empezar viajando al pasado, hasta 1843 cuando **Ada Lovelace, la primera programadora de la historia**, escribió el primer algoritmo para la máquina analítica inventada por Charles Babbage. Aunque la máquina analítica de Babbage y el algoritmo Ada nunca se pusieron en funcionamiento, aquel esfuerzo ha tomado un lugar en la historia de la informática como el inicio de la programación.

    --GNAT 8.3.0

    with Ada.Text_IO; use Ada.Text_IO;
    procedure Hello is
    begin
        Put_Line ("Hola Mundo!");
    end Hello;

_Hola Mundo! escrito en lenguaje Ada, lenguaje creado en honor a Ada Lovelace._

A partir de allí, hemos visto como a través de la historia han evolucionado las computadoras y la tecnología. Hoy en el 2020, más que nunca, vemos que existe una alta demanda y mayor necesidad de computadoras y dispositivos móviles potentes que nos permitan cumplir el propósito de ejecutar programas para aumentar nuestra productividad, impulsar el desarrollo comercial, la investigación científica, las operaciones en casi todos los rubros de negocios que existen e incluso la gestión de los gobiernos.

Con esta variedad de aplicaciones y computadoras vemos como en la actualidad ha surgido la necesidad de distintos tipos de lenguajes de programación que nos permitan programarlas y poder realizar el trabajo para el que fueron creadas. Así mismo, la demanda de programadores va en aumento y no parece que vaya a detenerse, especialmente para el desarrollo de aplicaciones web y móviles.

# Clasificación de los lenguajes de programación

Los lenguajes de programación los podemos clasificar de forma general en dos tipos, lenguajes de bajo nivel y lenguajes de alto nivel.

## Lenguajes de bajo nivel

Los lenguajes de bajo nivel son el tipo de lenguajes que utilizan las computadoras para realizar operaciones del sistema. Un código escrito en un lenguaje de bajo nivel interactúa directamente con el procesador de la computadora o CPU y es capaz de ejecutar comandos muy básicos que son generalmente difíciles de leer por una persona.

Como un ejemplo de lenguaje de bajo nivel podemos mencionar el Assembly (lenguaje ensamblador), que utiliza palabras clave para ejecutar comandos básicos como leer, mover y almacenar datos.

    ; hello-DOS.asm - single-segment, 16-bit "Hola Mundo!" program
    ;
    ; assemble with "nasm -f bin -o hi.com hello-DOS.asm"

        org  0x100        ; .com files always start 256 bytes into the segment

        ; int 21h is going to want...

        mov  dx, msg      ; the address of or message in dx
        mov  ah, 9        ; ah=9 - "print string" sub-function
        int  0x21         ; call dos services

        mov  ah, 0x4c     ; "terminate program" sub-function
        int  0x21         ; call dos services

        msg  db 'Hola Mundo!', 0x0d, 0x0a, '$'   ; $-terminated message

_Una versión mínima de Hola Mundo! escrito en assembly._

## Lenguajes de alto nivel

Por otro lado, los lenguajes de alto nivel son utilizados para ejecutar operaciones de usuario mediante un lenguaje natural más fácil de leer y escribir para las personas. Cuando escribimos código en un lenguaje de alto nivel, como C++, Pascal, Python o Ruby, un intérprete o compilador traduce este lenguaje de alto nivel en un código de bajo nivel que una computadora puede entender.

Los lenguajes orientados a objetos (POO por sus siglas en español ó OOP por sus siglas en inglés) también son lenguajes de alto nivel. Un ejemplo de este tipo de lenguajes es Visual Basic .NET (VB.NET).

     Module HolaMundo
       ' every console app starts with Main
          Sub Main( )
             System.Console.WriteLine("Hola Mundo!")
          End Sub
       End Module

_Un simple programa que imprime "Hola Mundo!" en pantalla, escrito en VB.NET_

Los lenguajes de programación de alto nivel deben convertirse a lenguajes de programación de bajo nivel utilizando un **intérprete** o **compilador**, según lo necesite el lenguaje.

### Comparación entre lenguaje compilado y lenguaje interpretado

- Un lenguaje interpretado se considera más portable que un lenguaje compilado.
- Un lenguaje compilado por lo general se ejecuta más rápido que un lenguaje interpretado, sin embargo, la ventaja de la velocidad que tienen los lenguajes compilados pierde cada vez más importancia, ya que la mejora de las velocidades de los procesadores de los dispositivos hace que las diferencias de rendimiento entre los lenguajes interpretados y compilados sean casi imperceptibles.
- Se interpretan lenguajes de programación de alto nivel como JavaScript, Python y Ruby. Para estos lenguajes, el intérprete ejecuta el programa directamente, traduciendo las instrucciones línea por línea en código máquina.
- Se compilan lenguajes de programación de alto nivel como FORTRAN, C++, COBOL y Visual Basic. Para estos lenguajes, después de escribir el código, un compilador traduce todo el código a código de máquina creando un archivo ejecutable, como por ejemplo el software que puedes instalar en tu ordenador.

## Generaciones de los lenguajes de programación

Los lenguajes de programación han sido clasificados también en diferentes generaciones que históricamente han indicado el poder de estilo de programación.

Existen 5 generaciones de lenguajes de programación:

1. **Los lenguajes de primera generación - 1GL**, son lenguajes de bajo nivel conocidos como lenguaje de máquina. Se utilizan para programar las computadoras a un nivel muy bajo de abstracción.
2. **Los lenguajes de segunda generación - 2GL**, también son lenguajes ensambladores de bajo nivel. Se usan en kernels y unidades de hardware, además de ser usados comúnmente para edición de video, gráficos y videojuegos.
3. **Los lenguajes de tercera generación - 3GL**, son lenguajes de alto nivel, como C, C++, C#, Java, BASIC, JavaScript y Visual Basic.
4. **Los lenguajes de cuarta generación - 4GL**, son lenguajes que consisten en declaraciones similares a las declaraciones hechas en un lenguaje humano. Los lenguajes de cuarta generación se usan comúnmente en la programación de bases de datos y los ejemplos de scripts incluyen Unix Shell, Perl, PHP, Python, Ruby y SQL.
5. **Los lenguajes de quinta generación - 5GL**, son lenguajes de programación que contienen herramientas visuales para ayudar a desarrollar un programa. Ejemplos de lenguajes de quinta generación incluyen Mercury, OPS5 y Prolog.

En resumen, los lenguajes de las generaciones 1GL y 2GL son también de bajo nivel y los de las generaciones 3GL, 4GL y 5GL son de alto nivel.

## Evolución de los lenguajes de programación

Los lenguajes de programación continúan evolucionando tanto en la industria como en la investigación a medida que cambian los sistemas y las aplicaciones. Hoy en día, existe una amplia variedad de lenguajes de programación con diferentes sintaxis y funciones. Hacer un examen exhaustivo de todos ellos o incluso una lista completa es tema de un libro en lugar de un artículo como este, sin embargo, intentaremos presentar una visión general de la evolución de los lenguajes y tener una idea general de como han evolucionado.

Existe tanta variedad de lenguajes de programación en la actualidad que los desarrolladores pueden decidir si usar un lenguaje o no basado en la preferencia del cliente o en la suya. Los lenguajes de programación se desarrollaron formalmente desde 1957, dando origen a algunos de los lenguajes de programación más populares. El rápido crecimiento de Internet a mediados de la década de 1990 fue un gran impulso para la evolución de los lenguajes de programación.

- Ya mencionamos al principio del artículo que la programación empezó con Ada Lovelace y su algoritmo para la máquina analítica de Charles Baggage en **1843**.
- Autocode, fue desarrollado por Alick Glennie para la computadora Mark 1 en la Universidad de Manchester en el Reino Unido en **1952**. Autocode se considera el primer lenguaje de programación compilado.
- En **1957**, John Backus creó el lenguaje de programación **FORTRAN** (Formula Translation), que significa traducción de fórmulas, para trabajar a través de trabajos científicos, matemáticos y estadísticos complejos. Fue el primer lenguaje de programación de alto nivel del mundo.
- En **1958**, un comité creó **ALGOL** (Algorithmic Language), que significa lenguaje algorítmico. Si bien el lenguaje no nos es familiar hoy, se considera una base para los que sí lo son, como C, Java y Pascal.
- En **1959** Amazing Grace Hopper, diseñó **COBOL** (common business-oriented language), que significa lenguaje común orientado a los negocios, fue creado como parte de un esfuerzo del Departamento de Defensa de los Estados Unidos para crear un lenguaje de programación portátil para el procesamiento de datos.
- En **1964**, **BASIC** (Beginner’s All-purpose Symbolic Instruction Code), que significa el Código de Instrucción Simbólica para Principiantes, fue desarrollado por John G. Kemeny y Thomas E. Kurtz en Dartmouth College.
- En **1972**, Dennis Ritchie en Bell Lab desarrolló el lenguaje llamado **C**, que se considera el primer lenguaje de alto nivel. Algunos consideran C como el lenguaje de programación más importante de la historia.
- En **1983** se crea C++ como una extensión del lenguaje C, fue desarrollado por Bjarne Stroustrup.
- En **1991** Guido Van Rossum desarrolló **Python** y lo nombró en honor al grupo de comedia británico Monty Python.
- También en **1991**, un pequeño grupo de ingenieros de Sun llamado el "Equipo Verde" creía que la próxima ola en computación era la unión de dispositivos y computadoras digitales de consumo. Dirigido por James Gosling, el equipo creó el lenguaje de programación que revolucionaría nuestro mundo: **Java**.
- En **1995** y sólo en 10 días, Brendan Eich creó **JavaScript**. Es el lenguaje de elección para programación web y se encuentra en la mayoría de los navegadores y sitios en Internet.
- A finales de **1995** fue lanzada la primera versión de **Ruby**, con la intención de ser un lenguaje de secuencias de comandos orientado a objetos mejor de lo que ya estaba disponible en el momento.
- En noviembre de **2009**, Google lanza **Go** como un proyecto de código abierto. Estaba destinado a mejorar el entorno de trabajo de los programadores para que pudieran escribir, leer y mantener grandes sistemas de software de manera más eficiente.
- En **2014**, Apple inventó **Swift**, que lo convierte en una adición bastante reciente a la lista de lenguajes de programación. Según Apple: “Swift es un lenguaje de programación potente e intuitivo para macOS, iOS, watchOS, tvOS y más. Escribir código Swift es interactivo y divertido, la sintaxis es concisa pero expresiva e incluye características modernas que los desarrolladores adoran”.

Existen muchos otros lenguajes que han sido creados durante esta evolución, sin embargo aquí he mencionado los más relevantes.

Te dejo algunas páginas de referencia donde podrás encontrar más información acerca de este tema:

- [https://www.marketingandweb.es/marketing/lenguajes-de-programacion-mas-usados/](https://www.marketingandweb.es/marketing/lenguajes-de-programacion-mas-usados/)
- [https://rockcontent.com/es/blog/tipos-de-lenguaje-de-programacion/](https://rockcontent.com/es/blog/tipos-de-lenguaje-de-programacion/)
- [https://es.wikipedia.org/wiki/Lenguaje_de_programación](https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n)
- [https://www.chakray.com/es/lenguajes-programacion-tipos-caracteristicas/](https://www.chakray.com/es/lenguajes-programacion-tipos-caracteristicas/)
