import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    
    // ===================================
    // DATOS DE SECCIÓN MODELO DE NEGOCIO (Ahora: Modelo de Impacto)
    // ===================================
    businessModel: {
      partners: [
        "Clínicas Veterinarias Aliadas: Para cirugías y atención especializada de rescates.",
        "Refugios y Hogares de Paso: Red de apoyo para albergar temporalmente a los caninos.",
        "Empresas Donantes: Patrocinio de eventos, campañas o insumos fijos.",
        "Voluntarios y Padrinos: Base fundamental para la operación y sostenibilidad."
      ],
      activities: [
        "Rescate y Rehabilitación: Logística médica, conductual y emocional de caninos abandonados.",
        "Gestión de Adopciones: Proceso riguroso de selección de familias y seguimiento post-adopción.",
        "Recaudación de Fondos y Eventos: Campañas para asegurar el sustento médico y alimenticio.",
        "Educación y Sensibilización: Charlas sobre tenencia responsable y bienestar animal."
      ],
      channels: [
        "Instagram y Facebook: Historias de rescate, perros en adopción y campañas de donación.",
        "Página Web (Actual): Centro de información, formularios de adopción/voluntariado y donaciones.",
        "WhatsApp Business: Coordinación rápida con adoptantes y voluntarios.",
        "Eventos de Adopción y Ferias: Participación en la comunidad para encontrar hogares."
      ],
      relationships: [
        "Seguimiento Post-Adopción: Visitas y contacto para garantizar la adaptación del canino.",
        "Comunicaciones Personalizadas: Reportes y agradecimientos a donantes y padrinos.",
        "Historias de Éxito: Módulo de testimonios/adopciones felices integrado en la web.",
        "Fidelización de Padrinos: Reconocimientos y beneficios por su apoyo constante."
      ]
    },

    // ===================================
    // DATOS DE SECCIÓN SOBRE NOSOTROS (Enfoque en Misión)
    // ===================================
    mission: "Nuestra misión es transformar la realidad del abandono canino en Cali, brindando rescate integral, rehabilitación física y emocional, y encontrando hogares responsables y amorosos a través de programas de adopción rigurosos. Nos dedicamos a ser la voz de los que no la tienen.",
    vision: "Ser la fundación líder en el Valle del Cauca, reconocida por la transparencia y efectividad de nuestros programas, logrando un impacto significativo en la reducción del maltrato y abandono animal y promoviendo una cultura de respeto y tenencia responsable en la sociedad.",
    team: [
      {
        name: "Rosa María Cabal",
        role: "Coordinadora de Programas de Rescate y Voluntariado",
        initials: "RMC"
      },
      {
        name: "David Osorio",
        role: "Rehabilitación Canina y Logística de Adopciones",
        initials: "DO"
      },
      {
        name: "Valeria Arias",
        role: "Administración, Finanzas y Transparencia",
        initials: "VA"
      }
    ],

    // ===================================
    // DATOS DE PROGRAMAS DE IMPACTO (Misión social)
    // ===================================
    impactPrograms: [
      { 
        id: 1, 
        title: "Programa de Rescate y Salud", 
        description: "Brindamos atención veterinaria inmediata, medicamentos, esterilización y refugio a caninos en situación de abandono o maltrato. El primer paso para su nueva vida.",
        imageDescription: "dog receiving vet care"
      },
      { 
        id: 2, 
        title: "Programa de Adopción Responsable", 
        description: "Un proceso riguroso que evalúa al canino y a la familia adoptante para asegurar una compatibilidad perfecta. Garantizamos seguimiento para una integración exitosa.",
        imageDescription: "family adopting a dog"
      },
      { 
        id: 3, 
        title: "Programa de Voluntariado y Apadrinamiento", 
        description: "Ofrecemos oportunidades para que la comunidad se involucre, ya sea paseando perros, asistiendo en eventos o contribuyendo económicamente a través de nuestro plan de padrinos.",
        imageDescription: "volunteer walking a dog"
      },
      { 
        id: 4, 
        title: "Educación y Sensibilización Comunitaria", 
        description: "Realizamos charlas en escuelas y comunidades sobre la tenencia responsable de mascotas, la importancia de la esterilización y el impacto del abandono animal.",
        imageDescription: "group of people and dogs learning"
      }
    ],

    // ===================================
    // DATOS DE SERVICIOS COMERCIALES (Reintroducidos como fuente de ingresos)
    // ===================================
    services: [
      { 
        id: 5, 
        title: "Adiestramiento Canino Profesional", 
        description: "Programas personalizados para corregir conductas y fortalecer la obediencia básica y avanzada, creando un perro equilibrado y un vínculo sólido. El 50% de las ganancias se destina al programa de rescate.",
        imageDescription: "dog doing a trick"
      },
      { 
        id: 6, 
        title: "Guardería en Casa (Dog Sitting a Domicilio)", 
        description: "Cuidado personalizado para tu mascota en la comodidad de su propio hogar con personal capacitado por la fundación. Apoya la alimentación de un canino rescatado por día.",
        imageDescription: "dog relaxing on a couch"
      },
      { 
        id: 7, 
        title: "Paseos Caninos Seguros y Educativos", 
        description: "Paseos enfocados en la estimulación física y mental. Rutas seguras y tiempo de calidad. Contratando este servicio financias la esterilización de un perro en la comunidad cada mes.",
        imageDescription: "happy dog on a leash"
      }
    ],

    // ===================================
    // NIVELES DE DONACIÓN 
    // ===================================
    donationLevels: [
      {
        level: "Padrino de Comida",
        cop: "$75.000 COP",
        usd: "~ $19 USD",
        description: "Cubre el alimento de un canino por 15 días. Contribución vital y constante."
      },
      {
        level: "Padrino Médico",
        cop: "$150.000 COP",
        usd: "~ $38 USD",
        description: "Cubre vacunas esenciales y desparasitación de un canino rescatado, preparándolo para la adopción."
      },
      {
        level: "Héroe de Rescate",
        cop: "$300.000 COP",
        usd: "~ $75 USD",
        description: "Cubre los costos iniciales de rescate, transporte y hospitalización básica de un canino en estado crítico."
      },
      {
        level: "Donación Libre",
        cop: "Cualquier Monto",
        usd: "¡Es bienvenida!",
        description: "Permite cubrir gastos operativos, mantenimiento de refugio o terapias especializadas no cubiertas."
      }
    ]
  }),
  getters: {
    // Aquí puedes mantener tus getters o añadir nuevos si son necesarios.
  }
});