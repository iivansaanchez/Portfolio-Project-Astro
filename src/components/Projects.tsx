import { useState, useEffect } from 'react';

// Define the type for technology and project
interface Technology {
  id: number;
  name: string;
}

interface Project {
  id: number,
  nameProject: string;
  status: string;
  listTechnologies: Technology[];
}

const Projects = () => {
  const [page, setPage] = useState(0); // Initial page
  const [posts, setPosts] = useState<Project[]>([]); // Projects on the current page
  const [totalPages, setTotalPages] = useState(0); // Total available pages
  const [searchTerm, setSearchTerm] = useState(''); // Search term

  const url: string = "http://localhost:8080/api/v1/projects"; // API URL

  useEffect(() => {
    fetchData(page, searchTerm);
  }, [page, searchTerm]);

  const fetchData = async (p = 0, search = '') => {
    if (search && search.length < 3) return;
    const requestUrl = search
      ? `${url}/${search}`
      : `${url}?size=3&page=${p}`;

    const response = await fetch(requestUrl);
    const data = await response.json();

    setPosts(data.content || []);
    setTotalPages(data.totalPages || 1);
  };

  const handleDelete = async (id: number) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setPosts(posts.filter(project => project.id !== id));
    } else {
      console.error('Error deleting the project');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-yellow-400';
      case 'Testing':
        return 'bg-blue-400';
      case 'Completed':
        return 'bg-green-400';
      default:
        return 'bg-gray-400';
    }
  };

  const ProjectCard = ({ project, test = false }: { project: Project; test?: boolean }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-center items-center">
      <div className="w-full h-40 bg-gray-300 rounded-t-lg flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400x200.png?text=Project+Image"
          alt="Project Image"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="mt-4 w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{project.nameProject}</h2>
        <p className={`mt-2 text-white px-4 py-2 rounded-full inline-block ${getStatusColor(project.status)}`}>
          {project.status}
        </p>
        <div className="mt-4 w-full">
          <p className="font-semibold text-gray-600">Technologies:</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {project.listTechnologies.map((technology) => (
              <span key={technology.id} className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                {technology.name}
              </span>
            ))}
          </div>
        </div>
        {test && (
          <button
            onClick={() => handleDelete(project.id)}
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Encabezado estilizado */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4-4m0 8l4-4m0 0H4" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800">Projects</h1>
      </div>

      {/* Barra de búsqueda */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchData(page, searchTerm)}
          className="w-full max-w-xs p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
      </div>

      {/* Lista de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mb-12">
        {posts.map((project) => (
          <ProjectCard key={project.nameProject} project={project} test={true} />
        ))}
      </div>

      {/* Paginación */}
      <div className="mt-8 flex justify-center items-center space-x-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
        >
          <span className="text-2xl font-bold">&larr;</span>
        </button>
        <div className="flex items-center space-x-2">
          {[page - 1, page, page + 1].map((pageNumber) => {
            if (pageNumber < 0 || pageNumber >= totalPages) return null;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold ${
                  page === pageNumber ? 'bg-blue-600' : 'bg-blue-500'
                } hover:bg-blue-700 transition-all duration-300 transform hover:scale-110`}
              >
                {pageNumber + 1}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages - 1}
          className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
        >
          <span className="text-2xl font-bold">&rarr;</span>
        </button>
      </div>
    </>
  );
};

export default Projects;
