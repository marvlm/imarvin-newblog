---
title: 'Extreme Programming: ¿Qué es y cómo aplicarlo?'
slug: extreme-programming-que-es-y-como-aplicarlo
date: '2020-09-21'
date_updated: '2020-09-21'
tags: ['Colaboraciones', 'OpenWebinars', 'Agile', 'Tech']
draft: false
image: 'https://images.unsplash.com/photo-1498503603722-8de8df0beb96?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'
summary: XP es un marco de desarrollo que persigue el feedback continuo, la excelencia técnica y la entrega de valor constante.
---

![extreme-programming-que-es-y-como-aplicarlo-banner](https://images.unsplash.com/photo-1498503603722-8de8df0beb96?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

En esta ocasión, este artículo sobre XP lo he escrito para el blog de OpenWebinars, el artículo original lo pueden encontrar en el siguiente enlace:

- [Extreme Programming: Qué es y cómo aplicarlo](https://openwebinars.net/blog/extreme-programming-que-es-y-como-aplicarlo/)

---

Cuando Kent Beck se unió al proyecto C3 en la corporación Chrysler en 1996 para ayudarles a mejorar el rendimiento de su sistema de nómina, sintió la necesidad de refinar la forma en que se organizaba el equipo y las prácticas que utilizaban en su proceso de desarrollo de software. Para ello, tomó las mejores prácticas que habían sido utilizadas históricamente en la industria del desarrollo de software, hasta ese momento, y las unió para utilizarlas a un 'nivel extremo'. _Así nació la metodología de desarrollo de software conocida como **programación extrema, XP o Extreme Programming**._

Veinticuatro años después, la mayoría de prácticas de XP aún son consideradas como el estándar cuando se trata de desarrollar software de calidad de verdad, de una manera ágil y más productiva dado su enfoque en buenas prácticas y la generación de alto valor a los proyectos y a la organización.

# Qué es la metodología XP (Extreme Programming)

El concepto Extreme Programming (XP) fue formalizado en 1999, cuando Kent Beck publicó el libro **Extreme Programming Explained**, conocido como ‘**_The white book_**’. Se considera como una metodología de desarrollo de software ágil, creada específicamente para promover la aplicación de prácticas de ingeniería apropiadas para la creación de software. Tiene como objetivo principal que un equipo de desarrollo pueda producir software de mejor calidad de forma constante y a su vez busca promover una buena calidad de vida para el equipo. _A principios de los años 2000, XP fue la metodología dominante en el mundo ágil, antes de que el framework Scrum se volviera tan popular._

> **_“No soy un gran programador; Solo soy un buen programador con buenos hábitos". - Kent Beck_**

A pesar de que XP promueve principalmente un enfoque de desarrollo de software basado en valores, principios y prácticas de ingeniería, cuando lo analizamos detenidamente (excluyendo las prácticas de ingeniería) podemos ver de es aplicable a cualquier equipo de trabajo, sea o no de software, porque su objetivo principal es promover buenas prácticas y herramientas para que un equipo pueda convertirse en un equipo de excelencia y alto rendimiento.

## Valores, Principios y Prácticas de XP

Para poder aplicar XP en nuestro proceso de desarrollo es necesario entender los valores, principios y prácticas que lo componen. XP presenta 5 valores, 15 principios y 24 prácticas, en donde observamos que:

- _Los valores sin prácticas son difíciles de interiorizar_ y es posible aplicarlos de diversas maneras, resultando difícil saber por dónde empezar.

- _Las prácticas sin valores son actividades de memoria sin un propósito_ y hacerlas de forma individual sin ese propósito puede no brindar el resultado esperado.

Entre los valores y las prácticas, existe una gran distancia de comprensión y aplicación que es reducida por los principios. Los principios de XP tienen una relación directa con los valores, ya que tienen la intención de reflejarlos de maneras más concretas y práctica.

### Valores de XP

- **Comunicación**: XP enfatiza la importancia del tipo apropiado de comunicación: discusión cara a cara con la ayuda de una pizarra blanca u otro mecanismo de dibujo.

- **Simplicidad**: La simplicidad busca responder la pregunta "¿qué es lo más simple que funcionará?" El propósito de esto es evitar el desperdicio y hacer solo cosas absolutamente necesarias, como hacer el trabajo lo más simple posible para que sea más fácil de mantener, respaldar y revisar.

- **Retroalimentación**: La retroalimentación continua permite un diseño simple. El equipo construye algo, recopila comentarios sobre su diseño e implementación, y ajusta el software en el futuro.

- **Coraje**: Kent Beck definió el coraje como "acción efectiva frente al miedo" (Libro [Programación extrema explicada](https://www.amazon.es/Extreme-Programming-Explained-Embrace-Change-ebook/dp/B00N1ZN6C0/ref=pd_sbsd_14_1/262-6949197-5348930?_encoding=UTF8&pd_rd_i=B00N1ZN6C0&pd_rd_r=8187a516-8737-400f-ae57-bd2bc7d2a93b&pd_rd_w=dG7EV&pd_rd_wg=aCBqX&pf_rd_p=c03d6258-1c41-4685-9834-7d362a950091&pf_rd_r=M42T5V8S97NZ2Z8FXHW5&psc=1&refRID=M42T5V8S97NZ2Z8FXHW5), página. 20). Se necesita valor para plantear problemas que reducen la eficacia de su equipo, se necesita valor para dejar de hacer algo que no funciona y probar otra cosa, etc.

- **Respeto**: Los miembros del equipo deben respetarse mutuamente, comunicarse entre sí, proporcionar y aceptar comentarios que beneficien su relación, y trabajar juntos para identificar diseños y soluciones simples.

> \*\*\*"El desarrollo de software es un juego de comprensión, y la
>
> comprensión llega a la mente preparada, descansada y relajada". – Kent Beck\*\*\*

### Principios de XP

De los 15 principios de XP, existen 5 llamados los principios core:

- **Realimentación rápida** (_Rapid feedback_): el equipo pide retroalimentación, la entiende y reacciona de inmediato de acuerdo a lo recibido.
- **Asumir simplicidad** (_Assume simplicity_): el equipo debe centrarse en el trabajo que es importante en el momento, lo que se ha planificado, lo que se ha comprometido como entregable. Tienen presente acrónimos como **YAGNI** = _You Ain’t Gonna Need It_ (No lo vas a necesitar) y **DRY** = _Don’t Repeat Yourself_ (No te repitas a ti mismo).
- **Cambio incremental** (_Incremental change_): aplicar pequeños cambios al software es mejor que aplicar grandes cambios hechos de una sola vez.
- **Abrazar el cambio** (_Embracing change_): Si un cliente piensa que un producto necesita ser cambiado, el equipo debe apoyar esta decisión y planificar cómo implementar los nuevos requisitos.
- **Trabajo de calidad** (_Quality work_): un equipo que trabaja bien hace un producto valioso, con calidad y se siente orgulloso de ello.

_Los principios nos permiten tomar mejores decisiones cuando nos encontramos con distintas alternativas._ Es mejor elegir una alternativa que cumpla con los principios de forma directa que una que no lo haga de la misma forma. Cada principio encarna uno o más valores. Un valor puede ser vago y difícil de aplicar, por ejemplo, algo que es “Simple” para una persona, para otra puede ser complejo “Complejo”. Un principio es más concreto, u obtienes feedback rápidamente o no.

**Los otros principios son:**

- Enseñar a aprender
- Pequeña inversión inicial
- Juega a ganar
- Trabajar con los instintos de las personas, no en contra de ellos
- Responsabilidad aceptada
- Experimentos concretos
- Comunicación abierta y honesta
- Adaptación local
- Viaja con poco equipaje
- Medición honesta

En resumen, **los valores en conjunto con los principios promueven que la excelencia es un hábito, y que es algo que debemos llevar en nuestro ADN y cultura de equipo**.

### Prácticas de XP

La programación extrema, además de los valores y principios, propone buenas prácticas de planificación, organización, comunicación y de ingeniería de software que sumado a los valores y principios, permiten crear una cultura de equipo de excelencia. _Las prácticas de Extreme Programming (XP) más populares son:_

- **El Juego de Planificación** (_The Planning Game_): La idea principal de esta práctica es compartir las responsabilidades de planificación entre el equipo y el cliente, es decir que requiere una fuerte participación del cliente en el proceso de planificación. Se basa en un principio simple: los clientes generalmente tienen toda la información sobre el valor de los proyectos, y los equipos saben todo sobre su costo.
- **Pequeños Releases** (_Small Releases_): El equipo de desarrollo debe ser capaz de liberar versiones iterativas del sistema a los clientes con frecuencia.
- **Metáforas** (_Metaphor_): Debemos tener la capacidad de explicar el diseño del sistema a personas nuevas a través de metáforas en vez de pedirles que lean una gran cantidad de documentos.
- **Diseño Simple** (_Simple Design_): La regla es mantener las cosas, como su nombre indica, simples.
- **Desarrollo guiado por pruebas** (_TDD, Test Driven Development_): Es un enfoque evolutivo en la ingeniería de software que combina 2 prácticas que permiten crear código de calidad, pensar en la arquitectura del software que queremos desarrollar, escribiendo la prueba primero y luego mejorarla a través de la refactorización.
- **Refactorización** (_Refactoring_): Mejorar el diseño del código existente sin cambiar su comportamiento.
- **Programación en parejas** (_Pair Programming_): Dos programadores trabajando en pareja en una sola máquina, resolviendo el mismo problema.
- **Propiedad Colectiva del código** (_Collective Code Ownership_): Ningún miembro de todo el equipo posee una parte específica del código fuente, el código es de todos.
- **Integración Continua** (_Continuous Integration_): Práctica especialmente diseñada para construir o integrar todas las etapas de desarrollo, identificar errores y eliminarlos durante el proceso de desarrollo, reduciendo así el tiempo de respuesta y mejorando la calidad del software que se lanza como resultado.
- **Historias de Usuario** (_User Stories_): La historia es un pequeño documento de texto que escribe el cliente donde especifica en palabras simples lo que necesita que haga el software.
- **Estándares de Codificación** (_Coding Standard_): Su propósito es producir software que tenga un estilo consistente, independientemente del autor, lo que da como resultado un software que es más fácil de entender y mantener.

## Roles de XP

Actualmente, los roles de XP no son tan populares como las prácticas, sin embargo vale la pena conocerlos y entenderlos para comprender la metodología de programación extrema (XP) en su contexto general.

Un equipo de XP incluye seis roles:

- **El cliente** (_Customer_) es la persona responsable de escribir historias de usuarios, establecer prioridades y formular la cartera de productos.
- **El programador** (_Developer_) es un desarrollador normal, que escribe el código y realiza la totalidad de las tareas del proyecto.
- **El entrenador** (_Coach_) es la persona que vigila el trabajo del equipo, lo controla y enseña a sus miembros a implementar las prácticas más efectivas.
- **El rastreador** (_Tracker_) es la persona cuya tarea principal es monitorear el progreso del desarrollo del software y detectar todos los problemas en él.
- **El probador** (_Tester_) es el miembro del equipo responsable de la prueba del producto. La calidad del producto final depende en gran medida de su trabajo.
- **El pronosticador** (_Doomsayer_) es la persona que rastrea los riesgos del proyecto y advierte al equipo sobre ellos.

## Aplicaciones de XP en la actualidad

Actualmente, XP es visto como un marco de trabajo, en vez de como una metodología cerrada, en la que hay que aplicar todo lo que se explica en el libro blanco. Hoy se reconocen sus valores, principios, prácticas y roles como un compendio de buenas prácticas de las que podemos utilizar solamente las que más ayudarán a nuestro equipo durante un proyecto específico.

Algunas prácticas de XP siguen evolucionando y son promovidas por las comunidades IT para la creación de productos de software exitosos, ya que consideran que son prácticas creadas por desarrolladores para mejorar la profesión y el arte del desarrollo de software.

Por ejemplo, es muy común ver que el equipo se organice basado en el marco de trabajo Scrum, siguiendo las reglas y valores que promueve este marco de trabajo y que a su vez apliquen prácticas de Ingeniería de Software que promueve XP en su proceso de desarrollo, como programación en parejas, integración continua, el uso de historias de usuario, etc.

Además, prácticas como la Integración continua y la entrega continua, han sido precursoras de movimientos como el de **DevOps** y el **desarrollo basado en arquitectura de Microservicios** que son tendencia en la actualidad y que en sus procesos integran diversas prácticas de XP como parte de ellas.

Es muy común que se hagan comparativas entre XP y otros marcos de trabajo ágiles, pero principalmente encontrarás “_extreme programming vs scrum_” o “_extreme programming vs kanban_”, aunque en la realidad no son competencia el uno del otro, más bien se complementan muy bien cuando sabemos aplicar lo mejor de ambos mundos en nuestro proceso.

Aquí en **OpenWebinars** puedes aprender como trabajar en un equipo Scrum aplicando prácticas de XP en los siguientes cursos:

- [Curso de Scrum: Fundamentos y buenas prácticas](https://openwebinars.net/cursos/scrum-fundamentos/)

- [Curso de Scrum técnico](https://openwebinars.net/cursos/scrum/)

- [Curso de Scrum avanzado](https://openwebinars.net/cursos/scrum-avanzado/)

## Conclusión

XP es un marco de desarrollo que persigue el feedback continuo, la excelencia técnica y la entrega de valor constante promovido a través de:

- _Valores que representan la mentalidad del equipo, incentivan el trabajo en equipo y el enfoque hacia un objetivo común._

- _Principios que reflejan los valores de maneras más concretas._

- _Prácticas que nos ayudan a conseguir una cultura de equipo y una buena organización a través de la excelencia técnica y la creación de software de valor._

Cuando creamos una cultura de equipo basándonos en los principios y valores de XP podremos crear un entorno competitivo pero a la vez motivacional, donde cada miembro aprecia el trabajo de cada uno de sus compañeros, entregan trabajo valioso de forma constante y rápidamente porque pueden distinguir las tareas relevantes de las que no son necesarias. Reaccionan rápidamente al feedback dándose cuenta de que es una crítica razonable que tiene el objetivo de hacer un mejor producto, trabajo y equipo, lo que promueve el espíritu kaizen, la mejora continua.

    i'marv.in
