import fs from 'fs';
import path from 'path';
import Link from "next/link";
import Project, { ProjectInterface } from './Project';

const FeaturedProjects = async () => {
    const getFeaturedProjectData = async () => {
        const projectDirectory = path.join(process.cwd(), 'projects');
        const fileNames = fs.readdirSync(projectDirectory);
        const featuredProjectJSONData: any[] = [];
        fileNames.forEach((fileName) => {
            const fullPath = path.join(projectDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const json = JSON.parse(fileContents);
            if (!json.disabled && json.featured) {
                featuredProjectJSONData.push(json);
            }
        })
        featuredProjectJSONData.sort((a, b) => { return a.index - b.index });
        return featuredProjectJSONData;
    };

    const featuredProjects = await getFeaturedProjectData();

    return <div className='w-full text-center bg-zinc-950 grow pt-16 rounded-2xl max-w-screen-xl mx-auto h-max mb-16'>
        <h2 className='text-2xl sm:text-3xl font-bold'>
            <em>Featured Projects</em>
        </h2>
        <h3 className='w-full mt-4 sm:mt-8 text-slate-100 px-4'>
            Some of the projects over my career that are highlights!
        </h3>
        <div className='mx-8 mt-12 flex flex-wrap justify-center'>
            {featuredProjects.map((project: ProjectInterface) => {
                return <Project key={`project_${project.index}_${project.name}`} project={project} />
            })}
        </div>
        <div className='h-24 flex flex-col justify-center'>
            <Link href="/" className="w-max mx-auto rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">View all projects</Link>
        </div>
    </div>
}

export default FeaturedProjects;