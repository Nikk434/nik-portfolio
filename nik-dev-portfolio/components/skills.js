export default function Skills() {
  const skills = [
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 128 128" className="w-16 h-16">
          <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#5A9FD4"/>
            <stop offset="1" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#FFD43B"/>
            <stop offset="1" stopColor="#FFE873"/>
          </linearGradient>
          <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
          <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
          <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"/>
            <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"/>
          </radialGradient>
          <path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
        </svg>
      )
    },
    {
      name: 'Flask',
      icon: (
            <img src="/Flask.svg" className="w-16 h-16 bg-white" />
        )
    },
    {
      name: 'FastAPI',
      icon: (
            <img src="/FastAPI.svg" className="w-16 h-16" />
        )
    },
    {
      name: 'MongoDB',
      icon: (
            <img src="/MongoDB.svg" className="w-16 h-16" />
        )
    },
    {
      name: 'MySQL',
      icon: (
            <img src="/MySQL.svg" className="w-16 h-16" />
        )
    },
    {
      name: 'YOLO',
      icon: (
            <img src="/Ultralytics Symbol SVG.svg" className="w-16 h-16" />
        )
    },
    {
      name: 'React',
      icon: (
            <img src="/React.svg" className="w-16 h-16" />
        )
    },
    {
      name: 'Next.js',
      icon: (
            <img src="/Next.js.svg" className="w-16 h-16 bg-white" />
        )
    },
    {
      name: 'Docker',
      icon: (
            <img src="/Docker.svg" className="w-16 h-16" />
        )
    },
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 128 128" className="w-16 h-16">
          <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/>
        </svg>
      )
    },
    {
      name: 'Azure CLI',
      icon: (
            <img src="/Azure.svg" className="w-16 h-16" />
        )
    },
    {
      name: 'Azure Cosmos DB',
      icon: (
            <img src="/Cosmos BD.svg" className="w-16 h-16" />
        )
    }
  ]

  return (
    <section className="bg-gray-900 text-white py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
            Skills
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          The skills, tools and technologies I am good at:
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-16">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm sm:text-base text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}