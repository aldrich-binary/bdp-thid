"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ContentSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="content">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nuestras Áreas de Práctica
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

interface DummyContentProps {
  title: string;
  content: string;
}

const DummyContent = ({ content }: DummyContentProps) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {content}
        </p>
        {/* <img
          src={image}
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        /> */}
      </div>
    </>
  );
};

const data = [
  {
    category: "Derecho Público",
    title: "Litigio en Derecho Público",
    src: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631",
    content: (
      <DummyContent
        content="BDP cuenta con una trayectoria profunda y probada en la representación de sus clientes en los procedimientos judiciales más complejos que involucran al Estado. Nuestro enfoque trasciende la simple representación; se trata de litigio estratégico, una práctica especializada en buscar soluciones que definan precedentes o que resuelvan el problema de fondo del cliente, ya sea que representemos a particulares, empresas o a los propios poderes públicos.
  Poseemos una vasta experiencia en la conducción de recursos fundamentales ante el Poder Judicial de la Federación, incluyendo los Juicios de Amparo, y los medios de control constitucional de más alto nivel como las Controversias Constitucionales y las Acciones de Inconstitucionalidad. Esto nos permite desafiar leyes, actos de gobierno y decisiones de la administración en todas sus ramas, garantizando la protección de los derechos y el respeto al marco legal."
        title=""
      />
    ),
  },
  {
    category: "Derecho Regulatorio",
    title: "Derecho Regulatorio y de Cumplimiento",
    src: "https://images.unsplash.com/photo-1758518730136-1bf4fa26ccbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631",
    content: (
      <DummyContent
        content="En un entorno legal y administrativo cada vez más complejo y volátil, la capacidad de una empresa para prevenir, gestionar y mitigar riesgos regulatorios es un factor crítico para su éxito y continuidad. BDP se especializa en ofrecer un enfoque proactivo en Derecho Regulatorio y de Cumplimiento, diseñado específicamente para sectores donde la incertidumbre y la exposición a riesgos (incluyendo la corrupción) son altas.
  Nuestra práctica va más allá del simple acatamiento de la norma. Hemos desarrollado una visión única para la integridad y el buen gobierno corporativo que combina las mejores técnicas del derecho público y el derecho corporativo. Esto significa que ayudamos a nuestros clientes a estructurar sus operaciones internas de tal manera que no solo cumplan con cada disposición legal, sino que también blinden su reputación y su patrimonio.
  La asesoría de BDP permite a nuestros clientes reducir significativamente los riesgos económicos, jurídicos y de reputación asociados al incumplimiento normativo. Nos enfocamos en:
  • Prevención: Identificando proactivamente las áreas de vulnerabilidad regulatoria antes de que se conviertan en un problema.
  • Gestión: Creando manuales de cumplimiento (compliance), códigos de conducta y protocolos internos que se alinean con las regulaciones mexicanas e internacionales.
  • Mitigación: Diseñando planes de acción rápidos y efectivos en caso de una auditoría, investigación o controversia.
  En esencia, BDP transforma el cumplimiento regulatorio de una obligación pasiva a una ventaja competitiva y estratégica para el crecimiento sostenible de su empresa."
        title=""
      />
    ),
  },
  {
    category: "Derecho Regulatorio",
    title: "Derecho Regulatorio y de Cumplimiento",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    content: (
      <DummyContent
        content="En BDP, ofrecemos una asesoría legal integral y especializada en la compleja esfera de la contratación pública y el desarrollo de proyectos de infraestructura. Entendemos que la interacción entre el sector público y el privado es fundamental para el crecimiento, y por ello nuestra práctica está diseñada para asegurar la viabilidad legal y regulatoria de sus iniciativas, desde la concepción hasta su materialización.
  
  Nuestra trayectoria abarca todas las fases de los procesos de Contratación Pública. Asesoramos a nuestros clientes en la estructuración regulatoria de proyectos, garantizando el cumplimiento de las normativas aplicables y la optimización de los procedimientos. Proveemos acompañamiento experto en licitaciones, concursos y adjudicaciones, así como en la prevención y gestión de litigios y revisiones que puedan surgir durante el proceso.
  
  Un pilar diferenciador de BDP es nuestra posición como pioneros en el desarrollo de figuras de Asociaciones Público-Privadas (APP) en México. Nuestra experiencia no se limita a la teoría; hemos participado activamente en la ejecución de proyectos estratégicos, brindando soporte legal en:
  
      Diseño: Conceptualización legal y selección del esquema de participación más adecuado.
  
      Financiación: Asesoría en la consecución de los recursos y la estructuración financiera bajo el marco legal.
  
      Reestructuración: Adaptación de proyectos existentes a nuevos marcos regulatorios o condiciones de mercado.
  
  Además, contamos con experiencia consolidada en la contratación de deuda por parte de entidades federativas y municipios. Confíe en BDP para transformar sus proyectos en realidades legales y operativas con la máxima seguridad jurídica."
        title=""
      />
    ),
  },

  {
    category: "Proyectos Estratégicos",
    title: "Contratación Pública y Proyectos Estratégicos",
    src: "https://images.unsplash.com/photo-1659353222273-95d67009f712?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
    content: (
      <DummyContent
        content={`En un mercado energético mexicano en constante evolución, BDP se ha consolidado como un actor clave, ofreciendo servicios de consultoría y litigio que abarcan la totalidad del sector: desde las etapas iniciales de exploración y producción hasta la comercialización y venta de productos energéticos. Nuestra experiencia está diseñada para asegurar la viabilidad jurídica y operativa de sus proyectos más ambiciosos.
  
    Nuestra ventaja competitiva reside en nuestra capacidad única para diseñar e implementar proyectos energéticos complejos, con un foco particular en el segmento de energías renovables. Entendemos que el futuro energético debe ser sostenible, y por ello brindamos soluciones que aseguran el cumplimiento ambiental y la eficiencia regulatoria.
    
    El equipo de BDP se especializa en varios aspectos críticos para el desarrollo de la infraestructura energética:
    
        Gestión Regulatoria: Asesoría en la obtención y manejo de permisos, licencias y contratos ante los organismos clave como la Comisión Reguladora de Energía (CRE) y la Comisión Nacional de Hidrocarburos (CNH).
    
        Derechos de Vía y Uso de Suelo: Gestión legal especializada para asegurar los derechos de vía necesarios para la construcción y operación de ductos, líneas de transmisión y proyectos de infraestructura.
    
        Agenda Medioambiental: Integración de la legislación ambiental en la planeación y ejecución de proyectos para garantizar un desarrollo sustentable.
    
    Adicionalmente, hemos desarrollado el concepto de "federalismo de la energía", una visión estratégica que busca maximizar el potencial energético del país mediante la alineación de las políticas y normativas federales y locales. Confíe en BDP para navegar el panorama regulatorio y llevar sus proyectos energéticos a una conclusión exitosa.`}
        title=""
      />
    ),
  },
  {
    category: "Sustentabilidad",
    title: "Derecho de la Energía y Sustentabilidad",
    src: "https://images.unsplash.com/photo-1758518727984-17b37f2f0562?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631",
    content: (
      <DummyContent
        content={`En un mercado energético mexicano en constante evolución, BDP se ha consolidado como un actor clave, ofreciendo servicios de consultoría y litigio que abarcan la totalidad del sector: desde las etapas iniciales de exploración y producción hasta la comercialización y venta de productos energéticos. Nuestra experiencia está diseñada para asegurar la viabilidad jurídica y operativa de sus proyectos más ambiciosos.
  
  Nuestra ventaja competitiva reside en nuestra capacidad única para diseñar e implementar proyectos energéticos complejos, con un foco particular en el segmento de energías renovables. Entendemos que el futuro energético debe ser sostenible, y por ello brindamos soluciones que aseguran el cumplimiento ambiental y la eficiencia regulatoria.
  
  El equipo de BDP se especializa en varios aspectos críticos para el desarrollo de la infraestructura energética:
  
      Gestión Regulatoria: Asesoría en la obtención y manejo de permisos, licencias y contratos ante los organismos clave como la Comisión Reguladora de Energía (CRE) y la Comisión Nacional de Hidrocarburos (CNH).
  
      Derechos de Vía y Uso de Suelo: Gestión legal especializada para asegurar los derechos de vía necesarios para la construcción y operación de ductos, líneas de transmisión y proyectos de infraestructura.
  
      Agenda Medioambiental: Integración de la legislación ambiental en la planeación y ejecución de proyectos para garantizar un desarrollo sustentable.
  
  Adicionalmente, hemos desarrollado el concepto de "federalismo de la energía", una visión estratégica que busca maximizar el potencial energético del país mediante la alineación de las políticas y normativas federales y locales. Confíe en BDP para navegar el panorama regulatorio y llevar sus proyectos energéticos a una conclusión exitosa.`}
        title=""
      />
    ),
  },
  {
    category: "Política Pública",
    title: "Consultoría en Política Pública",
    src: "https://images.unsplash.com/photo-1662104935541-aa5b6e02886d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    content: (
      <DummyContent
        content="BDP se distingue por ser la primera firma en México que logra integrar de forma sinérgica tres pilares esenciales: Litigio, Derecho Regulatorio y Consultoría en Política Pública. Esta combinación nos permite ofrecer una solución completa que va más allá de la defensa legal, actuando directamente en la fuente de la norma para generar un cambio positivo y estratégico.
  
  Nuestra consultoría está diseñada para apoyar a empresas, organizaciones y gobiernos en la articulación de sus objetivos con el interés público. Ofrecemos un servicio que abarca todo el ciclo de la política pública:
  
      Diagnóstico y Análisis: Evaluación profunda del marco legal y el entorno político para identificar oportunidades y riesgos.
  
      Diseño e Implementación: Creación de soluciones concretas, que pueden materializarse como leyes, reglamentos o reformas específicas para un sector o problema.
  
      Evaluación y Ajuste: Monitoreo de la implementación y sugerencias de mejora para asegurar que la acción logre el impacto social o económico deseado.
  
  Creemos firmemente que las empresas y los particulares deben participar activamente en la toma de decisiones públicas para mejorar la competitividad de los mercados y la calidad de las regulaciones. Con BDP, su voz se convierte en una estrategia legal robusta que garantiza que sus intereses no solo sean escuchados, sino que se traduzcan en políticas públicas justas y eficientes."
        title=""
      />
    ),
  },
  {
    category: "Inmobiliario",
    title: "Derecho Inmobiliario",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173",
    content: (
      <DummyContent
        content="BDP tiene una sólida experiencia en el sector inmobiliario, tanto en litigio como en consultoría. Nos enfocamos en la regularización de inmuebles y en la defensa de la propiedad privada contra regulaciones perjudiciales. Nuestra estrategia integral incluye la impugnación de regulaciones regresivas a través de vías judiciales, administrativas y legislativas.

  Nuestro equipo especializado en derecho inmobiliario brinda asesoría en:
  
      Regularización de inmuebles y títulos de propiedad.
      
      Defensa contra regulaciones que afecten negativamente la propiedad privada.
      
      Litigio inmobiliario estratégico.
      
      Asesoría en desarrollos urbanos y proyectos inmobiliarios.
      
      Gestión de conflictos de uso de suelo y zonificación.

  Con BDP, su patrimonio inmobiliario estará protegido por expertos que comprenden las complejidades del marco legal mexicano y las mejores estrategias para defender sus intereses."
        title=""
      />
    ),
  },
];
