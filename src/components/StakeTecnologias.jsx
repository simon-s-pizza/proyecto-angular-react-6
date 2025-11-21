const Educacion = () => {
  const estudios = [
    { institucion: "SENA", curso: "Técnico en Programación", año: 2022 },
    { institucion: "Platzi", curso: "Curso de JavaScript", año: 2023 },
    { institucion: "Udemy", curso: "React desde cero", año: 2023 },
    { institucion: "Google Activate", curso: "Marketing Digital", año: 2021 },
    { institucion: "SENA", curso: "Curso complementario HTML/CSS", año: 2020 },
    { institucion: "Campus Virtual", curso: "Node.js Básico", año: 2024 },
    { institucion: "YouTube Learning", curso: "Git y GitHub", año: 2022 },
    { institucion: "Educación IT", curso: "Diseño UI", año: 2021 },
  ];

  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {estudios.map((edu, index) => (
          <li key={index}>
            <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Educacion;
