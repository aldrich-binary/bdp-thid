import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PeopleSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <img
          className="rounded-(--radius) "
          src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631"
          alt="team image"
          height=""
          width=""
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            Experiencia consolidada en derecho público y litigio estratégico
          </h2>
          <div className="space-y-6">
            <p>
              BDP combina la experiencia en litigio, derecho regulatorio y
              consultoría en política pública para ofrecer soluciones
              integrales. Nuestro equipo tiene una amplia trayectoria en
              sectores como energía, medio ambiente, agua y derecho agrario.
            </p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Conoce Más</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
