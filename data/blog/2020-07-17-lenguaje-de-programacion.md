---
title: ¿Qué es un lenguaje de programación?
slug: lenguaje-de-programacion
date: '2020-07-17'
date_updated: '2020-07-22'
tags: ['Tech', 'Colaboraciones', 'OpenWebinars']
draft: false
image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'
summary: ¿Quieres saber más sobre los lenguajes de programación? En este artículo te explico qué es y para qué sirve un lenguaje de programación.
---

![lenguaje-de-programacion-banner](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Este es el primero de una serie de artículos que he escrito colaborando en el blog de OpenWebinars sobre lenguajes de programacion, el artículo original lo pueden encontrar en el siguiente enlace:

- [Qué es un lenguaje de programación](https://openwebinars.net/blog/que-es-un-lenguaje-de-programacion/)

## Introducción

Hace mucho tiempo que la programación o desarrollo de software dejó de ser algo que solo los "geeks" y los "hackers" pueden hacer al punto que es considerada una de las profesiones más demandadas, respetadas e incluso mejor pagadas. El conocimiento principal que debe tener alguien que se dedica a ser programador es al menos un lenguaje de programación.

En este artículo, tomaremos un descanso de temas como las comparaciones de programación web front-end vs. back-end para centrarnos en la definición de qué es un lenguaje de programación y sus características principales.

## El lenguaje

El lenguaje es nuestro principal medio de comunicación y es el que permite que interactuemos entre humanos, así ha sido siempre. Por ejemplo, para una sociedad humana, el lenguaje contiene los elementos necesarios que permite a las personas comunicarse. Estos elementos pueden ser palabras, señas o sonidos que en sí mismos son abstractos, sin embargo, para las personas que forman parte de la sociedad, tienen un sentido, expresan un significado y señalan objetos o acciones. Así es como se logra la comunicación entre ellos.

Si hacemos una analogía, imagina que esa sociedad es tu computadora y que las personas son las piezas de hardware y software que la conforman. Igual que la sociedad de humanos, esta sociedad hipotética dentro de tu computadora necesita comunicarse entre sí para que ésta funcione como esperas y puedas hacer cálculos, abrir un navegador o crear un documento. Cuando utilizas el ratón o el teclado, estos dispositivos envían instrucciones a los miembros de ésa sociedad en un lenguaje común que pueden interpretar por que han sido programados para ello. Este lenguaje normalmente es representado por un conjunto de bits, unos (1) y ceros (0), cuya combinación crea el significado de las instrucciones. Este conjunto de 1 y 0 es un sistema de codificación conocido como código binario. La traducción del lenguaje de programación en binario se conoce como "compilación".

# Qué es un lenguaje de programación

Un lenguaje de programación, en palabras simples, es el conjunto de instrucciones a través del cual los humanos interactúan con las computadoras. Un lenguaje de programación nos permite comunicarnos con las computadoras a través de algoritmos e instrucciones escritas en una sintaxis que la computadora entiende e interpreta en lenguaje de máquina.

Los lenguajes de programación permiten a las computadoras procesar de forma rápida y eficientemente grandes y complejas cantidades de información. Por ejemplo, si a una persona se le da una lista de números aleatorios que van de uno a diez mil y se le pide que los coloque en orden ascendente, es probable que tome una cantidad considerable de tiempo e incluya algunos errores, mientras que si le das la misma instrucción a una computadora utilizando un lenguaje de programación, podrás obtener la respuesta en unos cuantos segundos y sin errores.

Existen docenas de lenguajes de programación utilizados en la industria hoy en día. Algunos lenguajes de programación populares incluyen C++, C#, Visual Basic, Go, Ruby, JavaScript, Java y Python, por mencionar algunos. Cuando piensas en un lenguaje de programación, tal como en la analogía que hicimos antes, puedes compararlo con los lenguajes que utilizamos para comunicarnos porque comparten muchas características similares.

## Características del lenguaje de programación

Para utilizar un lenguaje de programación, de manera efectiva, debemos estudiarlo y comprenderlo desde tres perspectivas:

- Sintaxis: el conjunto de símbolos y reglas para formar sentencias.
- Semántica: las reglas para transformar sentencias en instrucciones lógicas.
- Pragmática: utilizando las construcciones particulares del lenguaje.

En español, las letras forman palabras que forman oraciones. En los lenguajes de programación, los caracteres forman sentencias que en conjunto forman instrucciones.

### Sintaxis

La sintaxis es la estructura de una declaración en un lenguaje de programación. Si por ejemplo te preguntas "_¿Es difícil la sintaxis de C#?_" básicamente te estarías preguntando si aprender a programar en C# es difícil. Por lo general, cuando pensamos en la sintaxis queremos decir algo que el compilador puede verificar estáticamente.

Para aclarar esto aún más, observa estos 3 ejemplos de sintaxis en distintos lenguajes de programación, todos intentan describir la misma instrucción, es decir, esperan obtener como salida del programa el mismo resultado:

**C#**

    Console.WriteLine(“Hola Mundo!”);

**Python**

    print “Hola Mundo!”

**Assembly** (_en español, lenguaje ensamblador_)

    ;nasm 2.11.08
    section .data
        hello:     db 'Hola Mundo!',10    ; 'Hello world!' plus a linefeed character
        helloLen:  equ $-hello             ; Length of the 'Hello world!' string
    section .text
    	global _start
    _start:
    	mov eax,4            ; The system call for write (sys_write)
    	mov ebx,1            ; File descriptor 1 - standard output
    	mov ecx,hello        ; Put the offset of hello in ecx
    	mov edx,helloLen     ; helloLen is a constant, so we don't need to say
    	                     ;  mov edx,[helloLen] to get it's actual value
    	int 80h              ; Call the kernel
    	mov eax,1            ; The system call for exit (sys_exit)
    	mov ebx,0            ; Exit with return code of 0 (no error)
    	int 80h;

_Código ejemplo tomado de [compile nasm online](https://rextester.com/l/nasm_online_compiler)._

Podemos ver en los ejemplos, tres tipos diferentes de sintaxis. La sintaxis de Python, tiene la estructura más corta y fácil de las tres, por eso es considerado uno de los mejores lenguajes de programación para aprender a programar, mientras que la sintaxis de Assembly es la más compleja de las tres, ya que requiere de una mayor cantidad de instrucciones para decirle a la computadora que realice la misma función, imprimir "¡Hola Mundo!".

### Semántica

Por otro lado, la semántica trata sobre el significado de la instrucción. Responde a las preguntas: ¿es válida ésta instrucción? Si es así, ¿qué significa la instrucción? ¿Qué queremos lograr con la instrucción? Veamos el siguiente ejemplo,

    x++;                  // incremento
    foo(xyz, --b, &qrs);  // call foo

En el ejemplo, las 2 sentencias o instrucciones son sintácticamente válidas en C#. ¿_Pero, qué quieren decir_? ¿_Es incluso válido intentar transformar estas declaraciones en una secuencia ejecutable de instrucciones_? Estas son el tipo de preguntas que están en el corazón de la semántica.

### Pragmática

La pragmática, en programación, se refiere al modo en que el contexto influye en la forma cómo interpretamos y analizamos los problemas que queremos resolver con un lenguaje de programación. Como vimos en el ejemplo de sintaxis, el mismo problema puede ser resuelto utilizando diferentes lenguajes de programación, incluso existen problemas que pueden ser resueltos aplicando distintas sentencias o instrucciones lógicas usando el mismo lenguaje.

Aplicamos el pragmatismo cuando creamos una solución considerando el contexto y cómo afecta a nuestro problema y a nuestra solución, aunque eso implique utilizar otro lenguaje o herramienta que nos ofrece una mejor oportunidad de resolver el problema. Aprender varios lenguajes y enfoques diferentes, puede ayudarte a ampliar tu pensamiento y te ayuda a evitar que quedes atrapado en una única forma de hacer las cosas. Además, hoy en día ser un programador pragmático y aprender varios lenguajes es mucho más fácil gracias a la gran cantidad de cursos que puedes encontrar en Internet.

## Para qué sirve el lenguaje de programación

Existen una variedad de lenguajes de programación que los programadores pueden usar para comunicarse con una computadora, a través de lo que conocemos como código fuente, y a pesar de que todos comparten las características antes mencionadas, cada lenguaje es diferente y de forma individual puede ser más adecuado utilizarlo para un determinado propósito o propósitos dentro de ciertas industrias.

> El _código fuente_ constituye la estructura básica de programas,
>
> páginas web y aplicaciones en general.

Los lenguajes de programación se utilizan para crear sistemas operativos, programas de escritorio, aplicaciones móviles, para resolver problemas o interpretar datos. Por ejemplo, existen lenguajes de programación que son más adecuados para crear software o aplicaciones de entretenimiento, para crear dispositivos inteligentes hasta crear robots utilizando inteligencia artificial, los límites de lo que se puede lograr a través de los lenguajes de programación, son desconocidos.

A medida que avanza la tecnología y van apareciendo nuevas necesidades de negocio, también aparece una fuerte necesidad de lenguajes de programación únicos y diversos pero es prácticamente imposible que exista un único lenguaje de programación universal que satisfaga todas las necesidades, gigantes como Google son de los principales partícipes en esa búsqueda. Los lenguajes de programación a menudo se revisan, actualizan e incluso se combinan con otros lenguajes a lo largo del tiempo en el intento de evolucionar para satisfacer nuestras necesidades tecnológicas cambiantes.

Una nota curiosa sobre los lenguajes de programación es que, en general, están escritos en inglés. Ya sea que programes en JavaScript, Ruby, C#, Go, Ruby o Python, tienen su sintaxis y palabras clave en inglés, incluso si el lenguaje nativo de sus creadores es inglés o no.

Te dejamos algunas páginas de referencia donde podrás profundizar más sobre este tema:

- [https://es.wikipedia.org/wiki/Lenguaje_de_programación](https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n)
- [https://rockcontent.com/es/blog/que-es-un-lenguaje-de-programacion/](https://rockcontent.com/es/blog/que-es-un-lenguaje-de-programacion/)
- [https://concepto.de/lenguaje-de-programacion/](https://concepto.de/lenguaje-de-programacion/)
- [https://www.ecured.cu/Lenguaje*de_programación*(informática)](<https://www.ecured.cu/Lenguaje_de_programaci%C3%B3n_(inform%C3%A1tica)>)

  i'marv.in
