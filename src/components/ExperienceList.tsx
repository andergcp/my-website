import ExperienceCard from './ExperienceCard'

const experienceList = [
	{
		title: 'Mid-Software Developer',
		description:
			'Como desarrollador de Software Fullstack trabajé en la construcción del e-commerce y el backoffice de la empresa, usando React, NextJs, NestJs, Typescript, Styled components, Storybook, Mongo, Firestore, GCP, entre otras tecnologías.',
		achievements: [
			'Desarrollé la integración desde cero con el proveedor de facturación electrónica (Siigo), automatizando el proceso de facturación, ahorrando más de 5 días de trabajo al mes al equipo de finanzas',
			'Desarrollé la integración para la sincronización de la actividad de los usuarios entre Pandas y Clevertap, lo que ayudó al equipo de Growth a crear mejores campañas basadas en el comportamiento de cada usuario',
			'Implementé soluciones usando patrones de diseño en un arquitectura orientada a eventos, usando servicios de GCP como Cloud Functions, Cloud Tasks, y Pubsub'
		],
		functions: [
			'Construir nuevas funcionalidades para el back-office, tanto en el back-end como en el front-end, usando NestJs, Typescript, NextJs y React',
			'Construir y mejorar las características del e-commerce de la empresa, con buenas prácticas y creciendo de forma eficiente, usando herramientas como Storybook y Styled components',
			'Desarrollar soluciones usando bases de datos NoSQL como Firestores y Mongo',
			'Desarrollar características para aplicaciones basadas en la nube usando los servicios de GCP',
			'Aplicar patrones de diseño y tácticas de arquitectura en arquitecturas dirigidas a eventos y basadas en micro-servicios'
		],
		company: 'Pandas',
		startDate: '2022',
		endDate: '2023'
	},
	{
		title: 'Software Engineer',
		description:
			'Como ingeniero de software en Blackboard, trabajé en el equipo de Learn, la plataforma de e-learning más usada en el mundo, con más de 20 millones de usuarios activos.',
		achievements: [
			'Resolví 30+ tickets, como Ingeniero de Software de nivel 3, en las instancias de EC2 de AWS, usando NewRelic, Snowflake, Postgresql, Línea de comandos de Bash y analizando los Logs',
			'Desarrollé 5+ soluciones a los defectos y los llevé a lo largo de todo el ciclo incluyendo debugging, revisión de código, pruebas, requerimientos del DoD y lanzamiento a producción',
			'Desarrollé y documenté RCA (Root cause analysis) para 5+ casos usando NewRelic, análisis del desempeño de las bases de datos y herramientas de debugging'
		],
		functions: [
			'Solucionar bugs de la plataforma. Lenguajes: Java, React, Postgresql y Snowflake, desplegado en servidores de los clientes o en AWS',
			'Escribir código y tests de alta calidad para mejorar la plataforma Learn en el back-end de Java y en el front- end de React y Angular',
			'Participar y promover buenas prácticas de desarrollo incluyendo revisiones de diseño, revisiones de código y participando activamente en la reuniones de Scrum',
			'Desempeñar mi rol usando herramientas como Git, Jira, Bitbucket y Confluence'
		],
		company: 'Blackboard',
		startDate: '2020',
		endDate: '2022'
	},
	{
		title: 'Full-Stack Software Engineer',
		description:
			'En el programa de Full-stack developer en Holberton School, aprendí a programar en C, Python, Javascript, React, NodeJs, entre otros lenguajes y tecnologías.',
		achievements: [
			'Construí, junto con mi equipo, un MPV de un salón de clases interactivo y una plataforma que permita que las personas puedan conectar para ofrecer y tomar clases desde cualquier lugar',
			'Construido usando React, MySql, Nodejs y desplegado en AWS',
			'Demo: https://www.youtube.com/watch?v=T4x-qxesZYI&feature=youtu.be',
			'Código: https://github.com/jamasellipsis',
			'Desarrollé un clon full-stack de la aplicación web de AirBnb',
			'Construido usando MySQL, Python, Flask, Nginx, CSS, HTML, Linux, jQuery',
			'Despliegue: Amazon EC2, usando Nginx como servidor web y Gunicorn como servidor de la aplicación',
			'Recreé un programa simple de la shell en un ambiente de Linux, usando el lenguaje de programación C'
		],
		functions: [
			'Ser parte de proyectos retadores a diario con plazos de entrega cortos. Auto-aprendizaje requerido para desarrollar los proyectos. Mejores prácticas y altos estándares de calidad. Equipos Scrum',
			'Aprender Programación de alto nivel: Python y JavaScript',
			'Aprender Programación de bajo nivel: Lenguaje de programación C, administración de memoria',
			'Aprender Desarrollo web: React, Bootstrap, Flask, MySQL, Flasgger',
			'Aprender DevOps: Bash scripting, Puppeteer, Nginx, configuración de servidores'
		],
		company: 'Holberton School',
		startDate: '2020',
		endDate: '2020'
	},
	{
		title: 'Monitor - Teaching Assistant',
		description:
			'Al ser monitor en Holberton School, ayudé a los estudiantes a resolver sus dudas y a entender los conceptos de programación a través de workshops, pair programming y code reviews.',
		achievements: ['Dirigí 10+ talleres sobre temas relacionados a desarrollo web'],
		functions: [
			'Liderar un grupo de 30+ estudiantes nuevos a lo largo del ciclo de aprendizaje',
			'Realizar 20+ entrevistas simuladas con los estudiantes'
		],
		company: 'Holberton School',
		startDate: '2020',
		endDate: '2020'
	},
	{
		title: 'Administrador - emprendedor',
		description:
			'Como emprendedor, construí un negocio de distribución de helados en la ciudad de Bogotá, aumentando las ventas un 300% en 3 años.',
		achievements: [
			'Incrementé las ventas un 300% y el margen de 12% a 22% en 3 años, creando nuevos canales de venta y distribución'
		],
		functions: [
			'Automatizar la operación del negocio usando herramientas de terceros, Excel y Marcos',
			'Establecer y ejecutar la estrategia de ventas',
			'Establecer y hacer seguimiento a los KPIs',
			'Crear la presencia digital del distribuidor mayorista, obteniendo mayores tasas de atracción y retención'
		],
		company: 'Mayorista de Helados Caspri',
		startDate: '2017',
		endDate: '2020'
	},
	{
		title: 'Analista de producto - Crédito de vehículo personal',
		description:
			'Como analista de producto, participé en la definición y ejecuté la estrategia de promoción y precio para el crédito de vehículo personal.',
		achievements: [
			'Cumplí la meta de rentabilidad y ventas del trimestre',
			'Coordiné y ejecuté exitosamente 25+ campañas para ferias y eventos de crédito de vehículo, tanto físicas como virtuales'
		],
		functions: [
			'Definir y ejecutar la estrategia de promoción y precio',
			'Establecer y hacer seguimiento de los KPIs'
		],
		company: 'Banco Davivienda',
		startDate: '2017',
		endDate: '2017'
	},
	{
		title: 'Profesional Comercial Daviplata',
		description:
			'Al ser Profesional Comercial, lideré estrategias de vinculación a Daviplata para clientes empresariales en Colombia',
		achievements: [
			'Coordiné y ejecuté +100 campañas virtuales y en persona para la inclusión financiera y vinculación a Daviplata, obteniendo +5000 nuevos clientes',
			'Lancé un estrategia exitosa de prospección y atracción de +50 nuevos clientes empresariales'
		],
		functions: [
			'Liderar sesiones virtuales y presenciales de capacitación en venta consultiva de ventas B2B para la fuerza de ventas en 8 ciudades del país',
			'Trabajar con los dueños del producto y clientes en la mejora continua de nuestra propuesta de valor',
			'Coordinar y ejecutar campañas virtuales de vinculación a Daviplata, usando SMSs, correo electrónico y llamadas'
		],
		company: 'Banco Davivienda',
		startDate: '2015',
		endDate: '2017'
	},
	{
		title: 'Practicante Universitario - Captación Banca Personal',
		description:
			'Como practicante universitario, apoyé la estrategia de captación de clientes de Banca Personal',
		achievements: [],
		functions: [
			'Diseñar y ejecutar estrategias para el incremento de los saldos en los product de ahorro del banco',
			'Proponer y liderar iniciativas para mejorar la estrategia de pago de nómina',
			'Generar reportes de alta calidad y presentaciones efectivas para la toma de decisiones que impacten los KPIs de la unidad de negocio'
		],
		company: 'Banco Davivienda',
		startDate: '2015',
		endDate: '2015'
	}
]

const ExperienceList = () => {
	return (
		<ul className='flex flex-col space-y-4 pt-6 md:space-y-8'>
			{experienceList.map((experience, idx) => (
				<ExperienceCard key='idx' {...experience} />
			))}
		</ul>
	)
}

export default ExperienceList
