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
        content="BDP cuenta con una experiencia vasta en juicio de amparo, acciones de inconstitucionalidad y controversias constitucionales ante el Poder Judicial de la Federación, con especial destaque en la Suprema Corte de Justicia de la Nación. Ofrecemos representación a particulares (nacionales y extranjeros) y a los poderes públicos legitimados.
  Nuestras estrategias de litigio constitucional han logrado criterios innovadores de interpretación jurídica y expansión de derechos. Tenemos trayectoria acreditada en jurisdicción contencioso-administrativa, procedimientos de fiscalización, medios de impugnación en materia electoral, y responsabilidades administrativas de servidores públicos y empresas (combate a la corrupción). Somos considerados entre los mejores despachos de litigio estratégico."
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
        content="El paradigma del Estado regulador exige estrategias integrales de prevención, gestión, mitigación y remediación de riesgos regulatorios, especialmente en sectores con alta incertidumbre, debilidad institucional o proclividad a la corrupción. BDP diseña un nuevo enfoque para la práctica de integridad y buen gobierno corporativo.
  Ofrecemos soluciones preventivas y resilientes de diligencia debida (due diligence) en materia anticorrupción, lavado de dinero, fiscal, ambiental, agraria, licenciamiento social, y tenencia de la tierra. Nuestro objetivo es reducir riesgos de consecuencias jurídicas o reputacionales derivados de transacciones sensibles o susceptibles de inspección por autoridades reguladoras o investigadoras.
  Identificamos vías legales, eficientes y eficaces para reducir costos y riesgos (económicos, jurídicos y reputacionales), y fortalecemos el entorno de toma de decisiones de los clientes."
        title=""
      />
    ),
  },
  {
    category: "Proyectos Estratégicos",
    title: "Contratación Pública y Proyectos Estratégicos",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    content: (
      <DummyContent
        content="BDP ofrece asesoría en estructuración regulatoria de proyectos, estrategias de prevención, consultas, conciliaciones e inconformidades, litigio contencioso administrativo y constitucional. También brindamos apoyo en revisiones, auditorías, fiscalización, y responsabilidades contractuales y administrativas.
  
  Somos pioneros en el desarrollo e implementación de proyectos mediante Asociaciones Público-Privadas (APP) en México. Asesoramos a empresas y gobiernos locales en todas las fases del proceso: diseño y evaluación de riesgos, licitación, concesión, adjudicación, contratación, financiamiento, procesos de bursatilización, reequilibrio y reestructuración de proyectos públicos y privados (en México y América Latina).
  
  Ofrecemos asesoría para la contratación de deuda a corto y largo plazo de entidades federativas, municipios y organismos públicos descentralizados. Esto incluye estructuración financiera y legal, acompañamiento en aprobación legislativa, registro administrativo, afectación de garantías, constitución de vehículos financieros y atención de alertas de sostenibilidad."
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
        content={`El derecho de la energía es un área clave de BDP debido a la demanda de servicios de asesoría, consultoría y litigio con alta especialización en regulación y aspectos técnicos del mercado energético. Abarcamos todos los eslabones productivos del sector energético, desde la exploración hasta el expendio.
  
  Nuestra ventaja competitiva es el diseño, estructuración y ejecución de proyectos energéticos en Oil & Gas (infraestructura logística, refinación y derivados) y proyectos eléctricos (especialmente energías renovables). Ofrecemos asistencia legal a empresas en interacciones con órganos reguladores y autoridades locales, con habilidades destacadas en la gestión de la licencia social y atención a aspectos ejidales, comunitarios e indígenas.
  
  BDP ha desarrollado el concepto "Federalismo de la Energía" para maximizar el aprovechamiento del potencial energético del país, considerando lo local no solo parte del entramado regulatorio, sino también agente económico clave. Impulsamos modelos y proyectos de coinversión estratégica mediante formas de participación y asociación público-privada para incrementar la oferta energética, diversificar la matriz, maximizar la infraestructura y fortalecer el acceso a fuentes de energía.`}
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
        content="BDP es la primera firma boutique en México que integra la práctica del litigio, el derecho regulatorio y la consultoría en política pública. Proporcionamos soluciones que abarcan desde el diagnóstico hasta el diseño, implementación y evaluación de acciones.
  
  Nuestros servicios incluyen intervenciones regulatorias, medidas fiscales y de gasto, reglamentos y ordenanzas administrativas, así como leyes o reformas constitucionales, enfocadas en objetivos socialmente relevantes. Asesoramos a empresas y particulares para que aporten soluciones a los tomadores de decisiones, haciendo más eficientes los mercados y aliviando cargas regulatorias.
  
  Nuestra experiencia abarca proyectos clave como la regulación de la mariguana en México, la transición al nuevo sistema de justicia penal y la autonomía del Ministerio Público, la mejora de la estrategia regulatoria, el modelo de federalismo energético sustentable, y el desarrollo de la inversión público-privada en infraestructura productiva estatal y municipal."
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
        content="BDP cuenta con sólida experiencia en asuntos inmobiliarios, tanto en litigio como en consultoría. Nos especializamos en la regularización de inmuebles y en la defensa frente a leyes perjudiciales para la propiedad privada.

  Hemos logrado impugnar regulaciones regresivas que afectan la libertad de comercio e imponen restricciones excesivas a la ciudadanía, combatiendo dichos actos en el ámbito judicial y ante autoridades administrativas, ejecutivas y legislativas.

  Ofrecemos soluciones integrales, adaptadas y personalizadas, facilitadas por un diálogo constante con autoridades competentes. Nuestro enfoque innovador nos permite proteger efectivamente los derechos de propiedad y garantizar el cumplimiento de la normativa aplicable."
        title=""
      />
    ),
  },
];
