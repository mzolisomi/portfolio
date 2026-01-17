export default function Projects() {
    const projects = [
        {
            name: "Unicentral-SA",
            src:"/images/unicentral-sa.png",
            alt: "Unicentral-SA logo",
            link: "https://github.com/mzolisomi/UniCentral-SA",
            description:"UniCentral-SA is a South African digital central applications office designed to help students from marginalised communities to apply to a variety of universities using one standardised fee."
        },
        {
            name: "CraftSphere",
            src: "/images/craftsphere.png",
            alt: "CraftSphere logo",
            link: "https://github.com/LettersBlue/CraftSphere2.0",
            description: "CraftSphere is a digital marketplace for South African artisans."
        }
    ];
    return (
        <section id="projects" className="relative md:py-28 px-4 md:px-8 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
            <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">Projects</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full shadow-lg shadow-green-500/50 mb-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 lg:gap-10 mb-12">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl shadow p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-10 border border-gray-800/50 hover:border-green-500/50 hover:shadow-green-500/30 cursor-pointer">
                                <h2 className="text-white text-xl">{project.name}</h2>
                                <div className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
                                <img
                                    src={project.src}
                                    alt={project.alt}
                                    className="w-full h-full object-contain"
                                />
                                </div>
                                <p className="text-white">{project.description}</p>
                                <h3><a src={project.link}>Click here to open project</a></h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>    
    )
}