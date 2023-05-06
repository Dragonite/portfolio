import fs from 'fs';
import path from 'path';
import Project, { ProjectInterface } from "@/components/Project";

export const metadata = {
    title: "Haolin's Projects",
};

export default async function Projects() {
    const getProjectData = async () => {
        const projectDirectory = path.join(process.cwd(), 'projects');
        const fileNames = fs.readdirSync(projectDirectory);
        const projectJSONData: any[] = [];
        fileNames.forEach((fileName) => {
            const fullPath = path.join(projectDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const json = JSON.parse(fileContents);
            if (!json.disabled) {
                projectJSONData.push(json);
            }
        })
        projectJSONData.sort((a, b) => { return a.index - b.index });
        return projectJSONData;
    };

    const projects = await getProjectData();
    return (
        <main className="bg-zinc-900 relative flex min-h-screen w-full flex-col font-sans px-4 xl:px-8">
            <div className='mt-24 w-full text-center bg-zinc-950 grow pt-16 rounded-2xl max-w-screen-xl mx-auto h-max mb-16'>
                <h2 className='text-2xl sm:text-3xl font-bold'>
                    <em>My Projects</em>
                </h2>
                <h3 className='w-full mt-4 sm:mt-8 text-slate-100 px-4'>
                    These are projects that I have worked on over my career.
                </h3>
                <div className='mx-8 mt-12 mb-8 flex flex-wrap justify-center'>
                    {projects.map((project: ProjectInterface) => {
                        return <Project key={`project_${project.index}_${project.name}`} project={project} />
                    })}
                </div>
            </div>
        </main>
    )
}