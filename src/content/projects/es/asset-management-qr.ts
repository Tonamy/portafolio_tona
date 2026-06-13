import type { ProjectContent } from "../../types";

export default {
  title: "Asset Management QR<br/>& Fleet Data Pipeline",
  theme: "dark",
  tags: ["python", "postgresql", "javascript", "html"],
  videoBorder: false,
  description:
    "Conceptualización y desarrollo End-to-End de un sistema automatizado de auditoría y visualización de activos en tiempo real para el sector de logística y maquinaria pesada.<br/><br/>Desarrollo de un pipeline ETL asíncrono en Python para la extracción, limpieza y transformación de datos desde entornos ERP hacia servidores aislados independientes, garantizando la seguridad del sistema core y generando códigos QR dinámicos para el acceso transparente de clientes finales al historial crítico de mantenimientos.<br/><br/>Esta solución habilitó una ventaja competitiva en el sector B2B y fue galardonada con el **Primer Lugar en el Concurso de Innovación y Mejora Continua** debido a su viabilidad financiera e impacto técnico.",
  components: [
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "Python (Scripts de Automatización & Async), ERP APIs, Generación de QRs Dinámicos, Pipelines de Datos (ETL), Servidores Aislados, Procesamiento de Archivos Planos Optimizados",
      },
    },
    {
      type: "text",
      props: {
        title: "Características Clave",
        text: "Extracción asíncrona de datos de mantenimiento, arquitectura de red híbrida y aislada, generación automatizada de motores QR vinculados físicamente a los activos, auditoría transparente desde cualquier dispositivo móvil",
      },
    },
    {
      type: "text",
      props: {
        title: "Impacto Empresarial y Reconocimientos",
        text: "Proyecto ganador del concurso de mejora continua de la organización. Creó una ventaja competitiva que elevó la confianza de los clientes B2B antes de la renta de activos y eliminó el riesgo de sobrecarga o vulnerabilidades en el ERP central.",
      },
    },
  ],
} as const satisfies ProjectContent;