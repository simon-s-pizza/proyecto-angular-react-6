const Experiencia = () => {
  const experiencias = [
    {
      cargo: "Desarrollador Frontend",
      empresa: "TechCorp",
      año: 2023,
      descripcion: "Creación de interfaces con React.",
    },
    {
      cargo: "Diseñador UI",
      empresa: "Pixel Studio",
      año: 2022,
      descripcion: "Diseño de componentes visuales.",
    },
    {
      cargo: "Practicante TI",
      empresa: "SoftPlus",
      año: 2021,
      descripcion: "Soporte técnico y mantenimiento.",
    },
    {
      cargo: "Freelancer Web",
      empresa: "Clientes varios",
      año: 2020,
      descripcion: "Sitios web básicos para negocios.",
    },
    {
      cargo: "Asistente de datos",
      empresa: "DataPro",
      año: 2019,
      descripcion: "Limpieza y organización de datos.",
    },
    {
      cargo: "Creador de contenido",
      empresa: "YouTube",
      año: 2021,
      descripcion: "Videos instructivos de tecnología.",
    },
    {
      cargo: "Tester Junior",
      empresa: "QA Solutions",
      año: 2022,
      descripcion: "Pruebas manuales de software.",
    },
    {
      cargo: "Programador Junior",
      empresa: "DevWorks",
      año: 2023,
      descripcion: "Implementación de funciones básicas.",
    },
    {
      cargo: "Soporte Web",
      empresa: "WebHelp",
      año: 2020,
      descripcion: "Resolución de errores en sitios.",
    },
    {
      cargo: "Líder de proyecto",
      empresa: "InnovateX",
      año: 2024,
      descripcion: "Coordinación de mini proyectos.",
    },
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> - {exp.empresa} ({exp.año})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiencia;
