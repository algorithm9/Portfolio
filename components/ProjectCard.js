import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-cyan-500/30">
      <div className="relative w-full h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-start gap-4 mt-6">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
            >
              在线演示
            </a>
          )}
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-300"
            >
              源代码 →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
