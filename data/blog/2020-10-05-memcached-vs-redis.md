---
title: Memcached vs Redis
slug: memcached-vs-redis
date: '2020-10-05'
date_updated: '2020-10-13'
tags: ['OpenWebinars', 'Colaboraciones', 'Tech']
draft: false
image: 'https://images.unsplash.com/photo-1580432522609-d073f3f4b4f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ'
summary: 'Cuando es necesario mejorar el rendimiento en una aplicación web, el almacenamiento en caché (Caching) suele ser lo primero que pensamos que nos puede ayudar y Memcached o Redis las primeras opciones a evaluar.'
---

![memcached-vs-redis-banner](https://images.unsplash.com/photo-1580432522609-d073f3f4b4f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Este artículo sobre Memcached vs Redis lo he escrito para el blog de OpenWebinars, el artículo original lo pueden encontrar en el siguiente enlace:

- [Memcached vs Redis](https://openwebinars.net/blog/memcached-vs-redis/)

---

**¿Memcached o Redis?** Una pregunta que comúnmente surge en discusiones asociadas a mejorar el rendimiento del software que utiliza bases de datos.

No es la primera comparación que hacemos contra Redis, ya os contamos en un artículo anterior, sobre la comparación entre [MongoDB vs Redis](https://openwebinars.net/blog/mongodb-vs-redis/).

Cuando es necesario mejorar el rendimiento en una aplicación web, el almacenamiento en caché (Caching) suele ser lo primero que pensamos que nos puede ayudar y Memcached o Redis las primeras opciones a evaluar.

Pero antes de explicar qué es Memcache y Redis, debemos entender a qué nos referimos cuando hablamos de almacenamiento en caché.

## ¿Qué es Caching o almacenamiento en caché?

El Caching es el proceso de almacenar parte de los datos de nuestra aplicación en caché. La caché es un área de almacenamiento temporal donde se guardan los datos para que, en el futuro, estos mismos datos se puedan servir más rápido (desde el almacenamiento local y no del servidor).

Por ejemplo, cuando visitas una página web, el navegador solicita automáticamente los archivos del código HTML de la página web y los almacena en tu disco duro, en un subdirectorio de caché bajo el directorio del navegador.

Digamos que cierras el navegador, pero por alguna razón necesitas visitar nuevamente la misma página web, en ese caso, cuando la buscas de nuevo, en vez de hacer una nueva solicitud de los archivos de la página al servidor original, el navegador puede obtener esos archivos del caché, ahorrando tiempo en la carga además de evitar la carga de tráfico adicional.

# Memcached vs Redis

Memcached y Redis son ambos sistemas populares para gestionar el caching. A pesar de que los dos son de fácil implementación y ofrecen un alto rendimiento, existen diferencias importantes entre ellos que vale la pena considerar cuando decidimos utilizarlas en nuestros proyectos.

Memcached fue creada con la intención de ofrecer simplicidad mientras que Redis ofrece una gran cantidad de funcionalidades que lo hace más efectivo en una gran cantidad de casos de uso.

Si estás en el proceso de evaluar cuál de estas dos herramientas utilizar, lo primero que debes entender son tus requerimientos y tener objetivos claros. Lo segundo, saber qué ofrece cada una, sus ventajas y desventajas a fin de determinar la mejor solución para ti.

En este artículo te ayudaremos a entender lo segundo.

## Qué es Memcached

Memcached es un almacén distribuido de datos en caché de alto rendimiento, diseñado para reducir la carga y acelerar las aplicaciones web aliviando la carga de la base de datos.

Memcached cuenta con un diseño simple pero poderoso, lo que le permite que su implementación sea rápida, además de que sea de fácil desarrollo. De esta forma resuelve muchos problemas que enfrentan los grandes cachés de datos.

Memcached fue desarrollado en 2003, por Brad Fitzpatrick quien trabajaba para Danga Interactive desarrollando el sitio web LiveJournal. Desde entonces, Memcached se ha reescrito en C (la implementación original estaba en Perl) y se ha puesto en el dominio público, donde se ha convertido en una piedra angular de las aplicaciones web modernas. Actualmente, no se están creando nuevas funcionalidades de Memcached, el desarrollo de la plataforma está más que nada centrado en hacerlo cada vez más estable.

## Qué es Redis

La definición según la página oficial web de Redis ([https://redis.io/](https://redis.io/)), Redis es un almacén de estructura de datos en memoria de código abierto (con licencia BSD), que se utiliza como caché, base de datos y agente de mensajes (message broker).

Redis, cuyo nombre proviene de Remote Dictionary Server (en español, servidor de diccionarios remoto), fue creado en 2009 por Salvatore Sanfilippo, quien actualmente sigue siendo el desarrollador principal del proyecto. A veces, Redis se describe como "Memcached con esteroides", lo que no sorprende cuando consideramos que algunas funcionalidades de Redis fueron creadas en respuesta a lecciones aprendidas obtenidas al usar Memcached. Redis tiene más funciones que Memcached y es, por tanto, más potente y flexible.

Actualmente, Redis lo utilizan gigantes de la tecnología GitHub, Pinterest, Snapchat, Craigslist, Digg, StackOverflow, Flickr, entre otros.

## Similitudes entre Memcached y Redis

Entre las similitudes que podemos encontrar entre Memcached y Redis están:

- **Open-source**

Son proyectos de código abierto, maduros y muy populares.

- **NoSQL**

Pueden considerarse dentro de la familia de bases de datos NoSQL además de que ambos se basan en un modelo de datos clave-valor.

Puedes apuntarte a nuestro [Curso de MongoDB: Creación y gestión de bases de datos NoSQL de MongoDB](https://openwebinars.net/cursos/mongodb/) donde aprenderás a crear y gestionar bases de datos NoSQL.

- **Almacenamiento en la RAM**

Mantienen todos los datos en la RAM, lo que los hace sumamente útiles como capa de caching.

- **Latencia por debajo de los milisegundos**

Admiten tiempos de respuesta de menos de milisegundos. Cuando se almacenan los datos en la caché, la lectura de datos es más rápida que en las bases de datos basadas en disco.

- **Facilidad de uso para desarrolladores**

Cuentan con una sintaxis que es muy fácil de aprender por los programadores además de que requieren una cantidad muy pequeña de código para integrarse en cualquier aplicación. Implementar Memcached o Redis en un proyecto web se considera un trabajo fácil para cualquier desarrollador.

_Bloque de código que representa una solicitud a Memcached básica:_

    def get_data():

    userdata = memcache.get('key')

    if userdata is not None:
    	return userdata
    else:
    	userdata = query_for_data()

    memcache.add('key', userdata, 60)

    return userdata

_Bloque de código que representa una conexión y solicitud a Redis básica:_

    def redis_connect() -> redis.client.Redis:

    Try:
    redis = redis.Redis(
    . . .
    )

    def get_routes_from_cache(key: str) -> str:
    """Obtain data from redis"""
    userdata = redis.get(key)
    return userdata

- **Partición de datos**

Permiten distribuir sus datos entre múltiples nodos, es decir, escalan horizontalmente para manejar de forma más eficiente una gran cantidad de datos cuando aumenta la demanda. La única diferencia en este aspecto es que Memcached para escalar horizontalmente del lado del cliente, requiere de la implementación de un algoritmo distribuido, mientras que Redis lo tiene por defecto.

- **Soporte para un amplio conjunto de lenguajes de programación**

Existen diversos clientes de código abierto disponibles para el uso de los desarrolladores. Los lenguajes soportados incluyen Java, Python, PHP, C, C ++, C#, JavaScript, Ruby, Go, se puede decir que soportan todos los lenguajes de programación más utilizados en la actualidad.

## Ventajas de Memcached sobre Redis

No son muchas las ventajas que tiene Memcached sobre Redis, sin embargo vale la pena destacar que Memcached tiene un mejor rendimiento para big data. Como Memcached es multiproceso, escala fácilmente cuando se le da más recursos a nivel de infraestructura, aunque con esto, es posible que pierda parte de o todos los datos que tenga en caché (dependiendo de si usa hash consistente).

Redis, que por lo general consta de un solo subproceso, puede escalar horizontalmente a través de una agrupación en clústeres sin pérdida de datos. La agrupación en clústeres es una solución de escalamiento eficaz, pero es más compleja de configurar y operar.

## Ventajas de Redis sobre Memcached

Por el contrario, Redis posee múltiples ventajas sobre Memcached:

- **Tipos y tamaño de los datos**

Redis admite casi todos los tipos de datos que son útiles en diferentes escenarios y necesidades, incluidos los tipos string, set, list, hash, sortedset, geo, mapa de bits por mencionar algunos. Por el contrario, Memcached solo soporta datos de tipo string.

En Memcached el límite de tamaño de datos permitido es de 1 MB, mientras que Redis nos da un límite máximo de 512 MB.

- **Mecanismo de persistencia**

Para gestionar la persistencia, Redis es compatible con AOF (Append Only File) y persistencia RDB (Redis Database Backup). Esto es muy importante para las aplicaciones hoy en día. Podríamos usar Redis como una base de datos NoSQL. En el caso de Memcached, no tiene un mecanismo de persistencia.

- **Modo Distribuído**

Redis, a través de su herramienta redis-sentinel, proporciona soporte integrado para la agrupación en clústeres. Memcached en sí no admite el modo distribuido, es necesario adaptar algoritmos distribuidos como Consistent Hash para el almacenamiento distribuido de Memcached.

## Redis vs Memcached ¿Cuál elegir?

Memcached algunas veces puede ser más eficiente, pero en general Redis es la mejor opción. A pesar de que estos dos reconocidos motores de caché comparten unas cuantas similitudes, son más sus diferencias y es gracias a ellas que Redis, a pesar de ser el más nuevo y versátil de los dos, es casi siempre la mejor opción debido al soporte que tiene para distintos tipos de estructuras de datos.

### Cuando usar Memcached

Memcached podría ser preferible para caching de datos relativamente pequeños y estáticos, como fragmentos de código HTML. La administración de memoria interna de Memcached, aunque no es tan sofisticada como la de Redis, es más eficiente en los casos de uso más simples porque consume comparativamente menos recursos de memoria para metadatos. Los tipos de datos strings son ideales para almacenar datos que solo se leen, porque las cadenas no requieren más procesamiento.

### Cuando usar Redis

Con Redis como caché, obtienes mucha potencia (como la capacidad de ajustar el contenido y la durabilidad de la caché) y una mayor eficiencia en general. Una vez que se utilizan las estructuras de datos, el aumento de la eficiencia se vuelve tremendo para escenarios de aplicación específicos.

La superioridad de Redis es evidente en casi todos los aspectos de la administración de caché. El caché emplea un mecanismo llamado desalojo de datos que permite hacer espacio para nuevos datos al eliminar los datos antiguos de la memoria.

Redis, permite controlar de forma detallada el desalojo de los datos a través de sus seis políticas de desalojo diferentes con las que cuenta. Además, emplea enfoques más potentes para la gestión de la memoria y la selección de candidatos para el desalojo de datos. Redis admite tanto el desalojo activo (active) como el perezoso (lazy), esto quiere decir que los datos son desalojados solamente cuando es necesario contar con más espacio o proactivamente.

Redis le brinda una flexibilidad mucho mayor con respecto a los objetos que puede almacenar en caché. Además, al permitir el uso de diferentes estructuras de datos, le permite a los desarrolladores más posibilidades para gestionar el almacenamiento en caché inteligente y la manipulación de los datos almacenados en caché en el desarrollo de sus aplicaciones.

Espero que una vez tengas tus objetivos claros, y con la información que has encontrado en este artículo, puedas decidir cuál sistema de caching es el más adecuado para tu aplicación.

**_!Feliz Caching!_**

    i'marv.in
