import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects.slice(0, 3)))
      .catch((err) => console.error('Erro ao carregar projetos:', err))
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-muted font-mono text-sm mb-4">Olá, meu nome é</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Walter Silva
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted mb-6">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-xl">
              Especializado em criar soluções robustas e escaláveis.
              Experiência com Node.js, Python, React e arquiteturas de microsserviços.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                Ver Projetos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline">
                Entrar em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title mb-0">Projetos em Destaque</h2>
            <Link to="/projects" className="text-muted hover:text-white transition-colors text-sm">
              Ver todos →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="aspect-video bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="skill-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades.
          </p>
          <Link to="/contact" className="btn-primary">
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
