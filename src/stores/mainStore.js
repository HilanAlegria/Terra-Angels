import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    
    // ===================================
    // DATOS DE SECCIÓN MODELO DE NEGOCIO
    // ===================================
    businessModel: {
      partners: [
        "Veterinarias y Clínicas en Cali: Para referencias y atención de emergencia.",
        "Tiendas de Suministros (Pet Shops): Para productos de calidad y descuentos a clientes.",
        "Entrenadores Certificados: Red de apoyo para casos especializados de comportamiento.",
        "Organizaciones de Rescate Animal: Colaboración en charlas y adopciones."
      ],
      activities: [
        "Adiestramiento y Guardería: Ejecución de los servicios principales con excelencia.",
        "Gestión de Rutas y Logística: Optimización de paseos y dog sitting a domicilio.",
        "Creación de Contenido Educativo: Desarrollo de material para charlas y redes sociales.",
        "Mantenimiento de Redes: Interacción constante y profesional en plataformas digitales."
      ],
      channels: [
        "Instagram y Facebook: Contenido visual diario de actividades y logros.",
        "Página Web (Actual): Centro de información, reservas y contacto.",
        "WhatsApp Business: Comunicación rápida y gestión de citas.",
        "Grupos Comunitarios Locales: Participación activa en la zona de Cali."
      ],
      relationships: [
        "Seguimiento Post-Servicio: Encuestas de satisfacción y ajuste de programas.",
        "Comunicaciones Personalizadas: Reportes diarios (fotos/videos) de la guardería o paseos.",
        "Opiniones de Clientes: Módulo de testimonios integrado en la web.",
        "Fidelización: Descuentos o beneficios por referidos y antigüedad."
      ]
    },

    // ===================================
    // DATOS DE SECCIÓN SOBRE NOSOTROS
    // ===================================
    mission: "Nuestra misión es enriquecer la vida de los perros y la de sus familias, ofreciendo servicios profesionales y personalizados de paseo, guardería en casa, y adiestramiento. Nos dedicamos a fomentar el bienestar físico y mental de cada canino, fortaleciendo el vínculo entre ellos y sus dueños a través de experiencias positivas y educativas, y promoviendo una convivencia armónica y respetuosa entre humanos y animales.",
    vision: "Aspiramos a ser la empresa líder y de mayor confianza en el cuidado y entrenamiento canino, reconocida por nuestra excelencia, innovación y el profundo amor que tenemos por los animales. Buscamos crear una comunidad de dueños de mascotas informados y comprometidos, donde cada perro tenga la oportunidad de crecer feliz, saludable y bien adaptado a su entorno, contribuyendo así a una sociedad más empática y consciente del bienestar animal.",
    team: [
        {
          name: "Rosa María Cabal",
          role: "Charlas educativas y terapias asistidas con caninos educativas",
          initials: "RMC"
        },
        {
          name: "David Osorio",
          role: "Paseador y entrenador canino",
          initials: "DO"
        },
        {
          name: "Valeria Arias",
          role: "Contabilidad y administración",
          initials: "VA"
        }
    ],

    // ===================================
    // DATOS DE SERVICIOS (ServicesList.vue usa esta data)
    // ===================================
    services: [
        { 
          id: 1, 
          title: "Adiestramiento Canino Profesional", 
          description: "Programas personalizados para corregir conductas y fortalecer la obediencia básica y avanzada, creando un perro equilibrado y un vínculo sólido.",
          imageDescription: "dog doing a trick"
        },
        { 
          id: 2, 
          title: "Guardería en Casa (Dog Sitting a Domicilio)", 
          description: "Cuidado personalizado para tu mascota en la comodidad de su propio hogar. Ideal para perros que prefieren su entorno o necesitan atención especial, ¡como si estuvieras ahí!",
          imageDescription: "dog relaxing on a couch"
        },
        { 
          id: 3, 
          title: "Paseos Caninos Seguros y Educativos", 
          description: "Paseos enfocados en la estimulación física y mental. Rutas seguras y tiempo de calidad para asegurar que tu perro regrese feliz y relajado a casa.",
          imageDescription: "happy dog on a leash"
        },
        { 
          id: 4, 
          title: "Charlas Educativas para Dueños", 
          description: "Sesiones formativas sobre comportamiento canino, nutrición, primeros auxilios y manejo de estrés. Conviértete en un dueño más informado y seguro.",
          imageDescription: "group of people and dogs learning"
        },
        { 
          id: 5, 
          title: "Terapias Asistidas Educativas (TAE)", 
          description: "Programas especializados donde nuestros caninos certificados asisten en terapias para fines educativos y emocionales, promoviendo el bienestar humano-animal.",
          imageDescription: "child interacting with a therapy dog"
        }
    ],

    // ===================================
    // DATOS DE PRECIOS (PricingTable.vue usa esta data)
    // ===================================
    prices: [
        {
          service: "Paseos Caninos",
          cop: "$150.000 COP",
          usd: "~ $38 USD",
          frequency: "Mensuales (Paquetes)"
        },
        {
          service: "Guardería en Casa",
          cop: "$80.000 COP",
          usd: "~ $20 USD",
          frequency: "Por día (Dog Sitting)"
        },
        {
          service: "Terapias Asistidas",
          cop: "$80.000 COP",
          usd: "~ $20 USD",
          frequency: "Por hora / Terapia"
        },
        {
          service: "Adiestramiento de Perros",
          cop: "$200.000 - $500.000 COP",
          usd: "~ $50 - $125 USD",
          frequency: "Mensuales (Programas)"
        }
    ]
  }),
  getters: {}
});