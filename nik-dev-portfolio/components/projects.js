import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'PlotTwist',
      description: 'A collaborative storytelling platform where users compete in writing challenges within timed matches. Each match includes a theme and participants craft short stories, which are then rated by peers. The platform aims to make writing interactive, competitive, and fun.',
      image: '/projects/wingie.jpg',
      tags: ['Python', 'FastAPI', 'Mongo DB', 'Next.js', 'React', 'Tailwind', 'Postman'],
      link: 'https://github.com/Nikk434/PlotTwist',
      reverse: false
    },
    {
      title: 'HouseBuddy',
      description: 'an intelligent RAG (Retrieval-Augmented Generation) chatbot designed to help end-users navigate the complexities of buying and owning property in India. From legal formalities to financial planning and document verification, HouseBuddy delivers accurate, source-cited answers using official data such as RERA documents',
      image: '/projects/fiskil.jpg',
      tags: ['Python','Flask','RAG','Next.js','Qdrant', 'Azure Cosmos DB'],
      link: 'https://github.com/Nikk434/housingBot',
      reverse: true
    },
    {
      title: 'AquaAnalyzer',
      description: 'AquaAnalyzer is an open-source AI-powered fish detection and monitoring system built for smart fisheries, aquaculture farms, and research applications using computer vision (YOLOv8), real-time video feeds, and digital geofencing',
      image: '/projects/fiskil.jpg',
      tags: ['Python','Yolo','Opencv','Selenium','Twilio API'],
      link: 'https://github.com/Nikk434/AquaAnalyzer01',
      reverse: false
    }
  ]

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20" id='projects'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Badge */}
        <div className="flex justify-center mb-6 ">
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
            Work
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Some of the noteworthy projects I have built:
        </h2>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
            >
              {/* Image Side */}
              <div className={`${project.reverse ? 'lg:order-2' : ''} bg-gray-700/30  p-10 lg:p-12 flex items-center justify-center`}>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className={`${project.reverse ? 'lg:order-1' : ''} p-10 lg:p-12 flex flex-col justify-center`}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed text-justfy">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Icon */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  aria-label={`Visit ${project.title}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}