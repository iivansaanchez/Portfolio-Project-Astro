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

  // Make the request when the page or search term changes
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

  // Function to delete a project
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

  // Function to determine the color of the status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-yellow-400'; // Yellow color
      case 'Testing':
        return 'bg-blue-400'; // Blue color
      case 'Completed':
        return 'bg-green-400'; // Green color
      default:
        return 'bg-gray-400'; // Gray color if the status is not defined
    }
  };

  const ProjectCard = ({ project, test = false }: { project: Project; test?: boolean }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-center items-center">
        {/* Representative project image */}
        <div className="w-full h-40 bg-gray-300 rounded-t-lg flex items-center justify-center">
          <img
            src="https://via.placeholder.com/400x200.png?text=Project+Image"
            alt="Project Image"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        {/* Project information */}
        <div className="mt-4 w-full text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{project.nameProject}</h2>
          
          {/* Status with background color */}
          <p className={`mt-2 text-white px-4 py-2 rounded-full inline-block ${getStatusColor(project.status)}`}>
            {project.status}
          </p>

          <div className="mt-4 w-full">
            <p className="font-semibold text-gray-600">Technologies:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {project.listTechnologies.map((technology) => (
                <span
                  key={technology.id}
                  className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm"
                >
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
  };

  return (
    <>
      {/* Centered search bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchData(page, searchTerm)} // Search when pressing "Enter"
          className="w-full max-w-xs p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
      </div>

      {/* Centered project list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mb-12">
        {posts.map((project) => (
          <ProjectCard key={project.nameProject} project={project} test={true} />
        ))}
      </div>

      {/* More styled pagination */}
      <div className="mt-8 flex justify-center items-center space-x-6">
        {/* Previous page button */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
        >
          <span className="text-2xl font-bold">&larr;</span>
        </button>

        {/* Pagination with page numbers */}
        <div className="flex items-center space-x-2">
          {[page - 1, page, page + 1].map((pageNumber) => {
            if (pageNumber < 0 || pageNumber >= totalPages) return null;

            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold
                            ${page === pageNumber ? 'bg-blue-600' : 'bg-blue-500'}
                            hover:bg-blue-700 transition-all duration-300 transform hover:scale-110`}
              >
                {pageNumber + 1}
              </button>
            );
          })}
        </div>

        {/* Next page button */}
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
