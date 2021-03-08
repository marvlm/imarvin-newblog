---
title: Prácticas ágiles de desarrollo de software
slug: practicas-agiles-desarrollo-software
date: '2020-06-14'
date_updated: '2020-08-06'
tags: ['#30díasdeblog', 'Tech', 'Agile']
draft: false
image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'
summary: 'Con el uso de herramientas open source, prácticas de desarrollo de software ágil y un poco de automatización puedes experimentar productividad y velocidad en el desarrollo.'
---

![practicas-agiles-desarrollo-software-banner](https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Día 14 del reto [#30díasdeblog](/tag/30diasdeblog/) y como me corresponde escribir acerca de [#Tech](/tag/tech/), he decidido continuar con la serie de artículos con los que contribuí en el blog de mi proyecto de fin de Máster [#T-share](/tag/t-share/).

### Introducción

En el artículo \***\*[De 0 a MVP con Design Sprint](/design-sprint/)\*\***, expliqué el proceso de diseño de nuestro MVP a través de un proceso de Design Sprint.

Además, en el artículo [Gestión del cambio - Día 3](/gestion-del-cambio/) les conté un poco sobre el contexto del proyecto tipo start-up y parte de sus objetivos y desafíos.

Hoy, en el tercer artículo de la serie, les contaré el proceso que seguimos para crear el prototipo funcional (website), las herramientas que utilizamos, las prácticas de desarrollo de software ágil que utilizamos y como lo publicamos en Internet de forma rápida, haciendo cambios y mejoras de forma incremental, todo en un fin de semana a un coste de €0.
![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/cd0euxp/2020/06/image-4.png)[https://marvlm.github.io/concurso-t-share/](https://marvlm.github.io/concurso-t-share/)

### ¿Cómo aplicamos prácticas ágiles de desarrollo de software en T-share?

El uso de herramientas [open source](https://es.wikipedia.org/wiki/C%C3%B3digo_abierto), prácticas de desarrollo de software ágil y un poco de automatización en nuestro flujo de trabajo nos ayudó enormemente en el proceso de convertir nuestro MVP en un sitio web en un fin de semana, con esto pudimos experimentar productividad y velocidad de desarrollo.
![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/2k17bwm/2020/04/T-share-mvp-to-site.png)Del MVP a un sitio web

### Herramientas

No puede haber desarrollo de software (sí, nuestro sitio web también es software) sin herramientas que apoyen el proceso creativo que permite crear un sitio web. Existen muchas opciones entre las que escoger a la hora de decidir qué herramientas de desarrollo de software vas a utilizar en tus tareas de desarrollo. Lo que sí es cierto es que como cualquier arte o trabajo de creación manual, para construir software de forma fácil, que funcione con eficiencia, necesitas herramientas de software que se adopten a tus necesidades, te hagan la vida mucho más fácil cuando estés desarrollando y te permitan automatizar las actividades recurrentes, permitiéndote enfocarte en el trabajo que más importa, el creativo.

Existen miles de herramientas de desarrollo de software y elegir las mejores puede ser difícil, pero considerando el conocimiento, experiencia y necesidades de nuestro equipo, seleccionamos las siguientes herramientas:

- [\***\*Visual studio code\*\***](https://code.visualstudio.com/): Editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.
- [\***\*Jekyll\*\***](https://jekyllrb.com/): Es un generador de sitios web estáticos, escrito en [Ruby](https://www.ruby-lang.org/es/). Desde el primer momento, puede generar rápidamente sitios web utilizando archivos en formato [markdown](https://markdown.es/) que luego se fusionan con plantillas HTML preformateadas.
- [\***\*Git - GitHub\*\***](https://github.com/): \***\*La plataforma de desarrollo de software líder en el mundo.\*\*** GitHub es un servicio que permite almacenar repositorios Git en la nube. En otras palabras, es como un Google Drive para proyectos de software donde puedes encontrar código.
- [\***\*GitHub Pages\*\***](https://pages.github.com/): GitHub Pages es una opción de hosting dentro de GitHub que permite alojar libremente páginas web públicas para usuarios, organizaciones y repositorios en el dominio `github.io` dominio de GitHub. GitHub Pages funciona con Jekyll detrás de escena, por lo que son una excelente manera de alojar su sitio web con Jekyll de forma gratuita.

![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/2k17bwm/2020/04/T-share-tools.png)Herramientas de desarrollo que usamos en T-share

### Entorno de Desarrollo

No explicaremos todo el proceso de instalación y configuración del entorno de desarrollo pero la verdad es con unos simples clics se instalan las herramientas y con otros cuantos comandos en una [terminal de windows](https://devblogs.microsoft.com/commandline/introducing-windows-terminal/) se crea el proyecto con Jekyll (las instrucciones se pueden consultar en los sitios web de cada herramienta).
![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/2k17bwm/2020/04/vs-code-entorno-proyecto.png)Nuestra configuración del proyecto en VSCode

### Integración continua y despliegue continuo

Cuando ya configuramos el entorno de desarrollo y empezamos a desarrollar el sitio web, al mismo tiempo empezamos a utilizar integración continua.

La \***\*integración continua\*\*** (CI - **continuous integration** en inglés) es un modelo propuesto inicialmente por [Martin Fowler](https://es.wikipedia.org/wiki/Martin_Fowler) que consiste en hacer **integraciones automáticas** de un proyecto de software lo más a menudo posible para así poder detectar fallos cuanto antes. Entendemos por integración la compilación y ejecución de pruebas de todo un proyecto.

En nuestro caso y al ser un proyecto nuevo sólo aplicamos la integración del código nuevo, a través de \***\*Git\*\*** y la compilación o en nuestro caso publicación del sitio web para detectar que no hemos introducido errores con los nuevos cambios.

Una vez desarrollada nuestra primera versión del sitio web que queríamos publicar en la web, es cuando empezamos a utilizar despliegue continuo.

El \***\*despliegue continuo\*\*** (CD - **continuous deployment **en inglés) es un enfoque de la ingeniería del software en que los equipos de desarrollo producen software en ciclos cortos, asegurando que el software puede ser liberado en cualquier momento, de forma confiable. Apunta a la construcción, prueba, y liberación del software de forma más rápida y más frecuente.

Para esto \***\*GitHub Pages\*\***, nos ofrece un proceso automático en dónde sólo nos pide indicar dónde está nuestro código fuente y que nombre de dominio deseamos usar. Una vez configurado, toma el código fuente que hemos creado con \***\*Jekyll\*\***, lo valida (prueba) y lo aloja en el dominio que le hemos indicado. No hay que hacer nada más. Este es todo el poder de la automatización. Si existiera un error en el código que impidiera la publicación, GitHub pages nos enviaría un correo con el problema detectado para que pudiéramos revisarlo y corregirlo.
![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/2k17bwm/2020/04/git-error-email.png)Email recibido al ocurrir un error
A partir de ahí, cada cambio que realizamos en nuestro código fuente es publicado en la web siguiendo el siguiente proceso:

1. Creamos el código con VSCode.
2. Guardamos  el código en Git (repositorio local).
3. Subimos el código en GitHub (repositorio en la web).
4. GitHub Pages toma el código, y lo procesa.
5. El sitio web es publicado en la web (automáticamente).

![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/2k17bwm/2020/04/T-share-dev-process.png)Proceso de Desarrollo en T-share
Esto es sólo una primera aproximación de cómo nuestro equipo abraza las prácticas ágiles tanto en nuestra organización como en nuestros procesos creativos. CI y CD ofrecen muchos más beneficios que seguramente iremos aplicando en la medida que avancemos en nuestro desarrollo, en base a nuestras necesidades. Integrar solo un poco de automatización en nuestro flujo de trabajo nos permitió enfocarnos en nuestros objetivos, nuestra productividad y velocidad de desarrollo.

Y así, completo el **día 14** del reto [#30díasdeblog](/tag/30diasdeblog/)**[👨‍💻](https://emojipedia.org/man-technologist/)**.

Un abrazo!

    i'marv.in

_P. D.: Este artículo tiene 1060 palabras._
