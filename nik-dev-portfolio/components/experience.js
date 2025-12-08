export default function Experience() {
  const experiences = [
    {
      title: 'Computer Vision Intern',
      company: 'Inditronics Pvt Ltd',
      date: 'JUL 2026 - Present',
      points: [
        'Created image collection pipeline for OTT and Linear TV streams, creating training datasets for YOLO-based object detection deployment on Advanced People Meter hardware',
        'Automated data preprocessing workflows, reducing manual processing time by 40% while maintaining 90% data quality standards',
        'Trained and evaluated YOLO, Segmentation, InsightFace, and OCR models for cross-platform content analysis across multiple regional markets'
      ]
    },
    {
      title: 'Python Developer Intern',
      company: 'Botplus LLP',
      date: 'JAN 2025 - JUL 2025',
      points: [
        'Built production RAG system handling 30,000+ documents with consistent 2-5   second response times for legal advising chatbot.',
        'Configured Qdrant with optimized HNSW parameters and metadata based filtering that reduced average retrieval time from 15+ seconds to 2-5 seconds',
      ]
    }
  ]

  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
            Experience
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Here is a quick summary of my most recent experiences:
        </h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Glassmorphism background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 rounded-2xl blur-x1 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative backdrop-blur-md bg-white/5 border border-white rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
                  {/* Left: Title */}
                  <div className="lg:flex-1 text-justify">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                      {exp.title}
                    </h3>
                    <h5 className="text-xl sm:text-1xl font-semibold text-white mb-4">
                      {exp.company}
                    </h5>
                    <ul className="space-y-2">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="text-gray-300 text-sm sm:text-base flex items-start gap-2">
                          <span className="text-gray-500 mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Date */}
                  <div className="lg:text-right">
                    <span className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}