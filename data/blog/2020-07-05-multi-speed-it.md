---
title: Agilidad en las organizaciones con el enfoque Multi-speed IT
slug: multi-speed-it
date: '2020-07-05'
date_updated: '2020-07-09'
tags: ['Agile']
draft: false
image: 'https://images.unsplash.com/photo-1452573992436-6d508f200b30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'
summary: Un enfoque de organización del área de IT, específicamente con los equipos involucrados en el desarrollo de aplicaciones, otro nombre rimbombante que describe más de lo mismo que ya conocemos de la agilidad.
---

![multi-speed-it-banner](https://images.unsplash.com/photo-1452573992436-6d508f200b30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

### Introducción

Ésta semana en el trabajo escuché por primera vez el término Multi-speed IT y como siempre me pasa cuando no sé algo, corrí a buscar en google de qué se trataba, porque cuando lo escuché lo mencionaron como una "metodología" ágil de la que no había escuchado (metodología, bendita palabra que no sé porque es tan famosa y que no tiene nada que ver, pero bueno es tema de otro post que escribiré pronto).

Después de leer un poco sobre el tema, creo que se equivocaron en como lo describieron, es por eso que quise crear este post para compartir lo que he entendido sobre el tema, que más que una metodología, es un _enfoque de organización del área de IT, específicamente con los equipos involucrados en el desarrollo de aplicaciones,_ que no hace más que describir más de lo mismo que ya conocemos de la agilidad, con otro nombre rimbombante, imagino que para que las organizaciones sientan que están aplicando algo nuevo y chévere 🤷‍♂️.

## Multi-speed IT

Cuando nos enfrentamos a una transformación ágil en una organización muy grande, es probable que nos encontremos con 2 tipos de equipos de desarrollo.

1. El* Equipo 1*: equipos nuevos (ágiles), que han sido establecidos para innovar y desarrollar aplicaciones lo más rápido posible tomando ventaja de las nuevas tecnologías de desarrollo y del cloud.
2. El _Equipo 2_: equipos legacy (tradicionales), que aún trabaja en el desarrollo y mantenimiento de aplicaciones tradicionales que han existido durante años en la organización, aplicaciones por lo general muy estables que han sido desarrolladas con tecnologías muy antiguas y que la gestión de su desarrollo es muy tradicional también (waterfall).

En ésta transformación y con miras a que la organización sea más competitiva, tanto el _Equipo 1_ como el _Equipo 2_ deben integrarse para poder desarrollar lo que la organización necesita proveer a sus clientes. Considerando sus características y por la naturaleza de las aplicaciones que desarrollan, es probable que ambos equipos trabajen a diferentes velocidades, entregando nuevas funcionalidades en tiempos distintos, esto es lo que conocemos como **Multi-speed IT**.

El _Equipo 1_ se esfuerza por ofrecer nuevas funcionalidades continuamente, por lo que las aplicaciones son rápidamente desplegadas en producción, es decir, se actualizan con nuevas características tan pronto como estén disponibles. Las actualizaciones pueden ser cada hora, diariamente, semanalmente dependiendo  de los objetivos de negocio, la tecnología o incluso del equipo.

El *Equipo 2 *actualiza con menos frecuencia. En algunos casos, los despliegues son mucho menos frecuentes, mensualmente, trimestralmente o hasta anualmente.

Por ejemplo: En un banco, el _Equipo 1_ está trabajando en una aplicación móvil bancaria donde es necesario que ésta se comunique con el core bancario, el cuál es gestionado por el _Equipo 2. El Equipo 2_ debe proporcionar un API para permitir que la aplicación móvil se integre con el core bancario. El objetivo es tener las API en la aplicación tradicional a tiempo para que la aplicación móvil pueda acceder a ellas y se pueda lanzar una nueva funcionalidad, por ejemplo de gestión de préstamos. Para alcanzar ese objetivo, los 2 equipos deben trabajar juntos para garantizar que la conexión entre ambas aplicaciones exista. Los equipos deben encontrar el equilibrio entre agilidad y estabilidad.

> _Los equipos deben encontrar el equilibrio entre agilidad y estabilidad._

Para la mayoría de las organizaciones, la adopción de Multi-speed IT requiere cambios en su modelo operativo. Para respaldar un negocio digital, IT debe aprender a ser más flexible y capaz de innovar rápidamente aumentando las capacidades de velocidad de comercialización de la organización.
![](https://digitalpress.fra1.cdn.digitaloceanspaces.com/cd0euxp/2020/07/image.png)_Multi-speed IT delivery highway_

## Multi-speed IT = Gestión de dependencias, comunicación y calidad

Cuando las organizaciones practican Multi-speed IT, no están obligadas a que todos sus equipos trabajen de forma ágil o que desplieguen nuevas funcionalidades de forma sincronizada. Las claves para el Multi-speed IT es conocer y gestionar las dependencias, garantizar la comunicación entre los equipos y ofrecer aplicaciones de alta calidad que permitan deleitar a sus clientes.

### Conocer y gestionar las dependencias

En una implementación de Multi-speed IT, cada equipo puede planificar y gestionar su desarrollo por separado. Sin embargo, también debe realizarse una planificación en conjunto con el resto de los equipos ágiles y legacy para identificar dependencias y establecer expectativas de plazos. Cada equipo gestiona su backlog priorizado.

Continuando con el ejemplo de la app móvil bancaria, cuando se agrega un nuevo requerimiento al backlog del _Equipo 1_ que requiere una API nueva o modificada en el core bancario, debe comunicarlo al _Equipo 2_. El _Equipo 2_ debe estimar cuándo podría entregar la dependencia para que el _Equipo 1_ pueda posicionar el requerimiento en su backlog y asegurar que inician el desarrollo cuando la dependencia está disponible, evitando retraso y falsas expectativas.

### Garantizar la comunicación entre los equipos

La comunicación es clave para garantizar que dos equipos como el _Equipo 1_ y el _Equipo 2_ puedan integrar su trabajo y agregar el valor que la organización espera de ellos.

Para mantener el tipo de comunicación que se necesita y poder realizar este tipo de integración, el enfoque Multi-speed IT promueve el uso de una práctica similar al daily scrum en conjunto con el Scrum of Scrums, el mismo que expliqué en el artículo [¿Escalado de qué?](/escalado/).

Así, cada equipo lleva a cabo su propia reunión diaria donde gestionan y planifican el trabajo que están haciendo y lo ajustan según el objetivo que tengan trazado, luego de finalizar la reunión del equipo, representantes de cada equipo se reúnen en una reunión similar para discutir sobre avances y sobre todo las dependencias que existen haciendo planes para removerlas. En esta reunión entre equipos se pueden abordar las mismas preguntas que en las reuniones individuales del equipo, agregando una referente a las dependencias:

- ¿Qué ha logrado cada equipo desde la última reunión?
- ¿Qué planean lograr hasta la próxima reunión?
- ¿Hay algo que está bloqueando su progreso?
- _¿Se ha detectado alguna dependencia con el Equipo 1, 2, 3 o N?_

Enfocando siempre la discusión en torno al trabajo relacionado con la integración que se necesita entre las soluciones que están trabajando cada uno de los equipos.

### Aplicaciones de alta calidad

Se gestionan los desarrollos de las aplicaciones híbridas (nuevas + legacy) apoyándose en técnicas y herramientas de integración continua, entrega continua, despliegue continuo y DevOps.

Cuando los equipos _1 y 2_ intentan desplegar una aplicación híbrida en producción, las pruebas automatizadas deben cubrir los puntos de integración entre la aplicación nueva y la aplicación legacy. Además deben asegurarse de probar también aspectos como la seguridad, el rendimiento, la escalabilidad, recuperación ante fallos, por ejemplo cuando las API  no están disponibles, etc.

### Cierre

El enfoque Multi-speed IT lo resumo como un enfoque organizativo que apoya la planificación, comunicación y la calidad de las aplicaciones entre equipos que por sus características pueden tener maneras de entregar y velocidades diferentes, siempre manteniendo una alineación con la estrategia comercial de la organización.

A pesar de que las ideas que presenta son interesantes no encontré nada nuevo en este enfoque más que el que brinda la idea de que IT debe estar siempre enfocado con las estrategias de negocio y no estar separada como una unidad sin relevancia como ocurre en algunas organizaciones donde creen que IT no es el core de su negocio, cosa que es imposible hoy en día que todo se mueve a través de las tecnologías.

Así que si les pasa como a mí y de sorpresa escuchan el término Multi-speed IT, ya sabrán de que se trata.

Un abrazo!

    i'marv.in
