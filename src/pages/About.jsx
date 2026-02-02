import {
  backendSkills,
  frontendSkills,
  databaseSkills,
  devopsSkills,
  otherSkills,
} from '../data/skills'

const skillCategories = [
  { title: 'Backend', skills: backendSkills },
  { title: 'Frontend', skills: frontendSkills },
  { title: 'Banco de Dados', skills: databaseSkills },
  { title: 'DevOps & Cloud', skills: devopsSkills },
  { title: 'Outros', skills: otherSkills },
]

function About() {
  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="section-title">Sobre Mim</h1>
          <p className="text-lg text-neutral-400 mb-6">
            Sou desenvolvedor de sistemas com experiência em desenvolvimento full stack.
            Trabalho criando soluções robustas e escaláveis, sempre buscando as melhores
            práticas e tecnologias do mercado.
          </p>
          <p className="text-lg text-neutral-400 mb-6">
            Minha experiência inclui desenvolvimento de APIs REST e GraphQL,
            arquiteturas de microsserviços, sistemas de alta disponibilidade,
            e interfaces modernas e responsivas.
          </p>
          <p className="text-lg text-neutral-400">
            Tenho conhecimento em Clean Architecture, Design Patterns, SOLID e
            práticas de Clean Code, sempre focando em código de qualidade e manutenível.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-secondary border border-neutral-800 p-6">
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Experiência</h2>
          <div className="space-y-6">
            <div className="bg-secondary border border-neutral-800 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold">Desenvolvedor Full Stack</h3>
                <span className="text-muted text-sm">Experiência consolidada</span>
              </div>
              <ul className="text-neutral-400 space-y-2">
                <li>• Desenvolvimento de APIs REST e GraphQL com Node.js e Python</li>
                <li>• Criação de interfaces com React, Vue.js e Angular</li>
                <li>• Implementação de arquiteturas de microsserviços</li>
                <li>• Configuração de ambientes com Docker e Kubernetes</li>
                <li>• Integração com serviços cloud (AWS, Oracle OCI)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
