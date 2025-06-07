import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Globe,
  Mail,
  Download,
  ExternalLink,
  Star,
  Building,
  Microscope,
  Code,
  Video,
  Trophy,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg">Dr. Héctor G. Pérez González</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-blue-600">
              Acerca de
            </Link>
            <Link href="#education" className="transition-colors hover:text-blue-600">
              Educación
            </Link>
            <Link href="#research" className="transition-colors hover:text-blue-600">
              Investigación
            </Link>
            <Link href="#projects" className="transition-colors hover:text-blue-600">
              Proyectos
            </Link>
            <Link href="#contact" className="transition-colors hover:text-blue-600">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  <Award className="w-3 h-3 mr-1" />
                  Doctor en Ciencias Computacionales
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  Dr. Héctor G. <span className="text-blue-600">Pérez González</span>
                </h1>
                <p className="text-xl text-muted-foreground">Profesor-Investigador de Tiempo Completo</p>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Building className="w-4 h-4" />
                  <span>Facultad de Ingeniería, Universidad Autónoma de San Luis Potosí</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Luis Potosí, México</span>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Investigador con trayectoria internacional, experiencia como líder académico y educador apasionado.
                Especializado en ingeniería de software, computación ubicua y realidades mixtas, con un enfoque
                innovador en la educación en ciencias computacionales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contactar
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 scale-110"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. Héctor G. Pérez González"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trayectoria Académica</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Formación internacional y experiencia en instituciones de prestigio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-lg">Ph.D. Computer Science</CardTitle>
                </div>
                <CardDescription>University of Colorado, Colorado Springs</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-lg">Maestría en Ciencias de la Computación</CardTitle>
                </div>
                <CardDescription>Universidad Nacional Autónoma de México (UNAM)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <CardTitle className="text-lg">Ingeniero Civil</CardTitle>
                </div>
                <CardDescription>Universidad Autónoma de San Luis Potosí</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Colaboración Internacional</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Gannon University",
                "Penn State University",
                "Rochester Institute of Technology",
                "Universidad de Castilla-La Mancha",
              ].map((institution, index) => (
                <Card key={index} className="text-center p-6">
                  <Globe className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <p className="font-medium">{institution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Positions */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Liderazgo Académico</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">Director del Departamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Ciencias de la Computación (2015-2023)</p>
                <p>Liderazgo estratégico en el desarrollo académico y la investigación del departamento.</p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl">Jefe del Programa Académico</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Ingeniería en Computación</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  #1 Nacional
                </Badge>
                <p className="mt-2">Programa académico líder a nivel nacional en su categoría.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Áreas de Especialidad</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Investigación y desarrollo en tecnologías emergentes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code,
                title: "Ingeniería de Software",
                desc: "Métricas de software y metodologías de desarrollo",
              },
              { icon: Microscope, title: "Computación Ubicua", desc: "Sistemas distribuidos y computación pervasiva" },
              {
                icon: Globe,
                title: "Realidades Mixtas",
                desc: "Realidad virtual, aumentada y experiencias inmersivas",
              },
              {
                icon: GraduationCap,
                title: "Educación en Ciencias Computacionales",
                desc: "Innovación pedagógica y metodologías de enseñanza",
              },
              { icon: BookOpen, title: "Software Cuántico", desc: "Algoritmos y aplicaciones de computación cuántica" },
              { icon: Users, title: "Liderazgo Académico", desc: "Gestión de equipos y proyectos de investigación" },
            ].map((specialty, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <specialty.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{specialty.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section id="research" className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Investigación y Publicaciones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contribuciones científicas en revistas de alto impacto
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>Publicaciones Destacadas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline">Revistas JCR</Badge>
                  <p className="text-sm text-muted-foreground">Artículos en revistas indexadas de alto impacto</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">IEEE Publications</Badge>
                  <p className="text-sm text-muted-foreground">Contribuciones en conferencias y revistas IEEE</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">Capítulos de Libros</Badge>
                  <p className="text-sm text-muted-foreground">Colaboraciones en publicaciones académicas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Microscope className="w-5 h-5 text-green-600" />
                  <span>Líneas de Investigación</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Educación en Computación</h4>
                  <p className="text-sm text-muted-foreground">Metodologías innovadoras de enseñanza</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Ingeniería de Software</h4>
                  <p className="text-sm text-muted-foreground">Métricas y calidad de software</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Realidades Mixtas</h4>
                  <p className="text-sm text-muted-foreground">Aplicaciones inmersivas y educativas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Proyectos Relevantes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Liderazgo en proyectos universidad-industria con fondos nacionales e internacionales
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Realidad Virtual Educativa</CardTitle>
                <CardDescription>Desarrollo de entornos inmersivos para el aprendizaje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Realidad Virtual</Badge>
                  <Badge variant="secondary">Educación</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Sistemas Móviles</CardTitle>
                <CardDescription>Aplicaciones móviles para computación ubicua</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Mobile</Badge>
                  <Badge variant="secondary">IoT</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Museos Interactivos</CardTitle>
                <CardDescription>Tecnología para experiencias culturales inmersivas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Interactividad</Badge>
                  <Badge variant="secondary">Cultura</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">Director de tesis de doctorado y maestría</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-muted-foreground">Tesis Dirigidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">8+</div>
                <div className="text-sm text-muted-foreground">Proyectos Activos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Reconocimientos y Membresías</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 text-center">
              <CardHeader>
                <Star className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>Sistema Nacional de Investigadores</CardTitle>
                <CardDescription>SNI Nivel 1</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Fundador de Red</CardTitle>
                <CardDescription>Red Mexicana de Investigación en Ingeniería del Software</CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 text-center">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Premios Académicos</CardTitle>
                <CardDescription>Reconocimientos a la excelencia educativa</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Outreach */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Divulgación Científica</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comunicación de la ciencia a través de medios innovadores
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Video className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">Contenido Educativo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Productor de videos y canciones didácticas para divulgación científica
                </p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en YouTube
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">Conferencias</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Talleres y conferencias de divulgación nacional e internacional</p>
                <div className="space-y-2">
                  <Badge variant="outline">Conferencias Magistrales</Badge>
                  <Badge variant="outline">Talleres Especializados</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contacto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interesado en colaboración académica o proyectos de investigación
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Correo Institucional</p>
                    <p className="text-muted-foreground">hector.perez@uaslp.mx</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center space-x-4">
                  <Building className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Institución</p>
                    <p className="text-muted-foreground">
                      Facultad de Ingeniería
                      <br />
                      Universidad Autónoma de San Luis Potosí
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-center space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Dr. Héctor G. Pérez González. Universidad Autónoma de San Luis Potosí.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Contacto
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
