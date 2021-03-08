---
title: Una introducción sobre Jamstack
slug: intro-jamstack
date: '2020-06-28'
date_updated: '2020-08-06'
tags: ['#30díasdeblog', 'Tech']
draft: false
image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'
summary: Jamstack combina filosofías de desarrollo modernas inspiradas en devops con páginas HTML estáticas de la vieja escuela para permitir a los desarrolladores crear sitios web rápidos más rápido.
---

![intro-jamstack-banner](https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Día 28 del reto [#30díasdeblog](/tag/30diasdeblog/) y hoy es el ultimo domingo de [#Tech](/tag/tech/) del reto.

Hoy compartiré sobre Jamstack, un nuevo enfoque de arquitectura en el desarrollo de sitios web.

## ¿Qué es Jamstack?

[Jamstack](https://jamstack.org/), es una filosofía de desarrollo web (algo revolucionaria) que es cada vez más popular y que tiene como objetivo acelerar el proceso de desarrollo web así como el rendimiento y seguridad de la página web. En resumen es un enfoque para crear sitios web más rápidos y seguros. Basa su enfoque en DevOps y técnicas de integración y entrega continua (CI / CD), está principalmente diseñado para integrar en el desarrollo web las nuevas herramientas y flujos de trabajo utilizados en el desarrollo de software moderno.

En las palabras de [Mathias Biilmann](http://mathias-biilmann.net/about), CEO y cofundador de [Netlify](https://www.netlify.com/), Jamstack es:

> _"Una arquitectura de desarrollo web moderna basada en JavaScript del lado del cliente, API reutilizables y marcado preconstruido" _

Jamstack revierte las técnicas para construir páginas web interactivas, eliminando la ejecución y el tiempo de carga del código de los servidores web, hacia el navegador a través de Javascript, servicios externos a los que se accede a través de las API (interfaces de programación de aplicaciones) y marcado pre-configurado. Convirtiendo aplicaciones pesadas y complejas alojadas en servidores complejos, en sitios web livianos, rápidos y seguros que pueden ejecutar en arquitecturas igualmente livianas.
![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/cd0euxp/2020/06/image-33.png)_Jamstack = JavaScript, API & Markup_
Un sitio web es en realidad un programa que ejecuta en un servidor web en todo momento. Ejecutar sitios de de manera tradicional ralentiza innecesariamente las cosas, brinda demasiadas oportunidades de ataque y es costoso de escalar.

## Sitios web dinámicos

Para entender por qué la filosofía Jamstack es revolucionaria, hay que entender cómo se crean los sitios web dinámicos más tradicionales y la tecnología actual detrás de _los sitios web estáticos._

Los sitios web dinámicos creados de la forma tradicional, es decir, la forma en que la mayoría de los sitios web han sido desarrollados en los últimos años, utilizan LAMP.

LAMP significa:

- **L**inux (el sistema operativo que alimenta la mayoría de los servidores web),
- **\*A**pache\* (el software del servidor que se ejecuta en esas máquinas Linux),
- **\*M**ySQL\* (la base de datos donde se almacena la información que necesita la aplicación web) y
- **\*P**HP / Perl / Python\* (el lenguaje que el código del lado del servidor está escrito).

Cuando desde tu navegador buscas un sitio web que está desarrollado con LAMP:

1. Tu navegador hace una petición al servidor web.
2. El servidor web ejecuta el código de la página (del lado del servidor) generando así lo que tú vez desde el navegador (la página web) sobre la marcha.
3. Cada vez que haces click o una búsqueda, el servidor busca y extrae los datos de una base de datos MySQL para luego, generar el código y enviarlo a tu navegador de modo que este lo muestre en tu pantalla según sea necesario.

La arquitectura LAMP permite la creación de sitios web dinámicos e interactivos, pero también requiere un servidor web potente. Cuanto más tráfico recibe un sitio web, más potencia computacional necesita en el servidor para atender las peticiones. Incluso en un servidor con las mejores características técnicas, las páginas web dinámicas pueden tardar mucho tiempo en crearse y cargarse. Hoy que las personas en su gran mayoría navegan la web utilizando sus teléfonos, la demora de carga de los sitios web se ha vuelto algo inaceptable y una de las razones por la que dejan de visitar un sitio web.

Jamstack nació como parte del movimiento que promovía los "sitios web estáticos", que surgió a mediados de la década de 2010 cuando se popularizaron generar¡dores de sitios web estáticos como Jekyll. Todo esto como una reacción contra el modelo tradicional de desarrollo de sitios web.

> Un dato curioso es que inicialmente el nombre era JAMstack con las primeras tres letras en mayúsculas y hace poco fue cambiado a Jamstack como una palabra capitalizada para desvincularlo de cualquier tecnología ya que se trata más de una filosofía de desarrollo web.

## Sitios web estáticos

Si quisiera explicar cómo funciona la web, diría que en algún lugar del sistema de archivos de un servidor web hay archivos HTML que son accesibles por direcciones HTTP, un navegador web los solicita y descarga a través de una url, luego interpreta esos archivos para crear una página web. A parte de explicar como funciona la web, esta es también una descripción de cómo funciona un _sitio web estático,_ es decir, se supone que los archivos HTML ya existen cuando el navegador web los busca, no los genera un código desde el servidor como sucede con los sitios web creados con LAMP.

Como ya hemos visto, gran parte de la web en la última década ha estado dominada por sitios dinámicos, que en su lugar generan archivos HTML sobre la marcha en respuesta a las solicitudes web, solicitudes que a menudo están basadas en parámetros enviados ​​al servidor web a través de formularios o en como parte del URL.

## Generadores de sitios web estáticos

En los primeros días de la web, las páginas web eran estáticas, muchos desarrolladores web escribían el código HTML a mano. A medida que las páginas web se volvieron más complejas, llegaron herramientas WYSIWYG (What You See Is What You Get) como Dreamweaver de Macromedia, que permitían generar esas páginas HTML estáticas sin necesidad de escribir código. Cuando el desarrollo de sitios web estáticos se popularizó nuevamente a mediados de la década de 2010, surgió una nueva ola de herramientas llamadas _generadores de sitios web estáticos,_ cómo [Jekyll](https://jekyllrb.com/), [Gatsby](https://www.gatsbyjs.org/), [Hugo](https://gohugo.io/), [Eleventy](https://www.11ty.dev/), [Next.Js](https://nextjs.org/), etc. A diferencia de las herramientas como Dreamweaver, los generadores de sitios web estáticos están controlados por código y están diseñados para integrarse con los procesos de CI / CD. Los generadores de sitios web estáticos generan archivos HTML, a menudo basados ​​en contenido escrito en [Markdown ](https://markdown.es/)o de datos que provienen del API de algún CMS, y se cargan automáticamente en un repositorio de control de versiones como [GitHub](https://github.com/).

Una cosa importante a tener en cuenta es que la _estática_ en este contexto no significa que se trata de páginas web 1.0 simples, es decir que no son interactivas. Como las páginas web estáticas pueden incluir JavaScript, a través de él pueden realizar llamadas a APIs, bases de datos, funcionalidades del lado del servidor o funciones serverless. Como ninguna de esas ejecuciones ocurren directamente en el servidor del sitio web, un sitio web estático no necesita un servidor web con tantas capacidades técnicas ni con una base de datos. Muchos sitios web estáticos se implementan en una CDN (**Content Delivery Network** o Red de Distribución de Contenido en español) donde el contenido se refleja en múltiples servidores (mirrored) en todo el mundo para ser provistos rápidamente a los usuarios en cualquier lugar y de manera más eficiente.

## Netlify y el término Jamstack

Netlify es una empresa de cloud computing y alojamiento web. Mathias Biilmann, uno de los fundadores de Netlify, acuñó el término Jamstack. Los servicios de Netlify están diseñados principalmente para clientes que desean construir sitios basados ​​en la filosofía de Jamstack.
![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/cd0euxp/2020/06/image-34.png)_Jamstack workflow_

## Jamstack CMS

Si eres alguien que tiene que lidiar con un sitio web en el día a día, sabes que construir y alojar el sitio web es solo el comienzo. También necesita una forma de crear contenido nuevo y agregarlo a su sitio. Debido a que las personas que lo harán normalmente no serán programadores, necesitarán una herramienta fácil de usar, a saber, un _sistema de administración de contenido_ o CMS. Los CMS tradicionales, como WordPress, ofrecen una interfaz de usuario de fondo donde puede ingresar el contenido del sitio web, administrar una base de datos donde se almacena ese contenido y crear páginas web dinámicas que presenten ese contenido en respuesta a las solicitudes del navegador.

Los CMS para sitios Jamstack funcionan de manera diferente, y generalmente se los conoce como *Headless CMS. *Un *Headless *CMS ofrece una interfaz de usuario para ingresar y administrar contenido y una base de datos u otros medios para almacenarlo, pero no genera código HTML para que un navegador lo analice. En cambio, las páginas HTML estáticas del sitio web usan JavaScript para realizar llamadas a las API del CMS, y el CMS devuelve el contenido en un formato que JavaScript puede convertir en una página web, regularmente JSON.

Un Headless CMS separa completamente el contenido de la presentación (front-end). Debido a que el CMS tiene una API accesible, distintos sistemas pueden acceder fácilmente a sus datos. Por ejemplo, si ha creado versiones separadas para dispositivos móviles, computadoras de escritorio y relojes inteligentes de su sitio web, todas estas versiones pueden acceder al mismo contenido almacenado en el CMS utilizando la API.

Netlify, como es de esperar, tiene su propia oferta en este espacio, llamada [NetlifyCMS](https://www.netlifycms.org/), pero hay muchas otras opciones disponibles como Ghost CMS, mi preferido. Ya les conté antes que [imarv.in usa Ghost CMS - Día 7](/ghost-cms/).

## ¿Te gustaría aprender más sobre Jamstack?

Existe mucha información y tutoriales de Jamstack en Internet ya que su comunidad de programadores es enorme. Aquí te dejo unos cuantos sitios web muy buenos para empezar:
[

WTF is JAMstack?

A simple guide to help you get on the JAMstack

![](https://jamstack.wtf/favicon.png)

![](https://jamstack.wtf/postcard.png)
](https://jamstack.wtf)[

Secure and Scalable: An Introduction to JAMstack

Build a JAMStack Application. Add authentication in easy steps to your JAMStack app.

![](https://scotch.io/apple-touch-icon.png)David NealScotch

![](https://scotch-res.cloudinary.com/image/upload/w_auto,q_auto:good,f_auto/v1566356887/mm0t7mvfxn3xhbjzms2e.png)
](http://scotch.io/tutorials/secure-and-scalable-an-introduction-to-jamstack)[

Learn JAMstack in Free 3.5 Hour Video Course - Demos & Examples

Free JAMstack video course developed by Phil Hawksworth. Check out the explanations and examples in this extended video from freeCodeCamp to learn about the JAMstack. Full of links and resources.

![](https://www.netlify.com/img/global/favicon/apple-touch-icon.png)Phil HawksworthNetlify

![](https://www.netlify.com/img/blog/jamstack-freecodecamp-video-poster.png)
](https://www.netlify.com/blog/2020/03/12/learn-jamstack-with-a-free-3.5-hour-video-of-demos-and-examples/)
Y así, completo el **día 28** del reto [#30díasdeblog](/tag/30diasdeblog/)👨‍💻.

Un abrazo!

    i'marv.in

_P. D.: Este artículo tiene 1608 palabras._
