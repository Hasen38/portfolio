import screenshot from "../Assets/screenshot.png";
import screen1 from "../Assets/Screen1.png";
// import screen2 from "../Assets/Screen2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1.",
      image: screenshot,
      link: "https://project1-link.com",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2.",
      image: screen1,
      link: "https://project2-link.com",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3.",
      image: screen2,
      link: "https://project3-link.com",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 md:py-24">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <div className="flex flex-col max-w-4xl gap-8 mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-transform transform bg-white shadow-lg rounded-xl group hover:scale-105"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
