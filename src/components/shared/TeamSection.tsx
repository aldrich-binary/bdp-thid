import Link from "next/link";

const members = [
  {
    name: "Roberto Gil Zuarth",
    role: "Socio Fundador",
    avatar:
      "https://images.unsplash.com/photo-1662104935762-707db0439ecd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    link: "#",
  },
  {
    name: "Carlos A. Lezama Fernández del Campo",
    role: "Socio Fundador",
    avatar:
      "https://images.unsplash.com/photo-1740906010746-72aa48cea181?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    link: "#",
  },
  {
    name: "Manuel MacFarland",
    role: "Socio",
    avatar:
      "https://images.unsplash.com/photo-1643930755935-77a44d031a41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685",
    link: "#",
  },
  {
    name: "Abogado Senior",
    role: "Especialista en Derecho Constitucional",
    avatar:
      "https://images.unsplash.com/photo-1733348137479-2e726d326d9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    link: "#",
  },
  {
    name: "Abogado Senior",
    role: "Especialista en Derecho Energético",
    avatar:
      "https://images.unsplash.com/photo-1758518729459-235dcaadc611?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631",
    link: "#",
  },
  {
    name: "Abogado Senior",
    role: "Especialista en Derecho Regulatorio",
    avatar:
      "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section className=" py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Equipo
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Nuestro equipo experto
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Nuestro equipo está compuesto por profesionales con amplia
              trayectoria en el sector público y privado, incluyendo socios y
              asociados con experiencia en derecho constitucional,
              administrativo, corporativo y energético.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
