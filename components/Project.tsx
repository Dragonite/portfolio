import Link from "next/link";
import Image from "next/image";

export interface ProjectInterface {
    index: number;
    name: string;
    disabled?: boolean;
    featured?: boolean;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    live?: string;
}

interface ProjectProps {
    project: ProjectInterface
}

const Project = ({ project }: ProjectProps) => {
    return <div className='m-4 hover:-translate-y-4 transition-all ease-in-out duration-300 w-72 sm:w-80 bg-zinc-800 rounded-xl'>
        <div className="mb-2 py-4 text-xl font-bold text-slate-100 relative">
            {project.name}
            {project.live ? (
                <Link target="_blank" href={project.live} className="absolute top-5 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                </Link>
            ) : <></>}

        </div>
        <div className="relative h-64 w-60 sm:w-72 rounded-lg overflow-hidden mx-auto">
            <Image src={project.image} alt={project.name} fill className='object-cover'></Image>
        </div>
        <div className="mt-4 pb-4 text-slate-100 px-4">{project.description}</div>
        <div className="flex flex-wrap px-4 justify-center pb-4">
            {project.technologies.map(technology => {
                return <div key={`${project.name}_${project.index}_${technology}`} className="w-max bg-gray-700 text-gray-300 text-xs font-medium m-1 px-2.5 py-0.5 rounded">{technology}</div>
            })}
        </div>
        {project.github ? (
            <div className="mb-4">
                <Link target="_blank" className="flex flex-col justify-center w-max mx-auto" href={project.github}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-slate-200 hover:fill-slate-400"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </Link>
            </div>
        ) : <></>}
    </div>;
}

export default Project;