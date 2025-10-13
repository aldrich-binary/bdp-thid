import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-16" id="contact">
      {/* Blur background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[350px] w-4/5 mx-auto blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200 via-purple-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl rounded-3xl border bg-white/80 dark:bg-zinc-950/70 backdrop-blur-md px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            ¿Necesitas asesoría legal especializada?
          </h2>
          <p className="mt-4">
            Contacta con nuestros expertos en derecho público para una consulta
            personalizada y soluciones estratégicas a tu medida.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Contactar Ahora</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Agendar Consulta</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
