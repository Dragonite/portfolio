import Link from "next/link";

const Skills = () => {

    const languages = ["TypeScript", "Python", "Java", "JavaScript", "C", "Swift", "Ruby", "CSS/Sass"]

    const frameworks = ["React", "NextJS", "Redux", "Angular", "Django", "Spring", "Flask", "Google API", "Express", "Jest", "Tensorflow"]

    const databases = ["Prisma", "TypeORM", "Django ORM", "PostgreSQL", "MySQL", "MongoDB"]

    const utilities = ["AWS (EC2, RDS, Lambda, etc.)", "Splunk", "PlanetScale", "Azure", "Git", "cron", "Websockets", "New Relic"]

    const devOps = ["Test Driven Development", "Secure Development Life Cycle", "Agile Development", "Continuous Integration & Deployment", "Vercel", "GitHub Actions", "Bamboo"]

    return <div className='w-full text-center bg-zinc-950 grow pt-16 pb-8 rounded-2xl max-w-screen-xl mx-auto h-max mb-16' id='skills'>
        <h2 className='text-2xl sm:text-3xl font-bold'>
            <em>Skills</em>
        </h2>
        <div className='mx-16 mt-12 flex flex-wrap justify-center'>
            <dl className="max-w-3/5 divide-y text-white divide-gray-800">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 md:text-lg text-gray-400">Languages</dt>
                    <dd className="flex flex-wrap w-4/5 justify-center mx-auto mt-2">
                        {languages.map(language => {
                            return <div key={`language_${language}`} className="w-max mx-1/2 my-1 bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{language}</div>
                        })}
                    </dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-400 md:text-lg">Frameworks & Libraries</dt>
                    <dd className="flex flex-wrap w-4/5 justify-center mx-auto mt-2">
                        {frameworks.map(language => {
                            return <div key={`frameworks_${language}`} className="w-max mx-1/2 my-1 bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{language}</div>
                        })}
                    </dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-400 md:text-lg">Databases & ORMs</dt>
                    <dd className="flex flex-wrap w-4/5 justify-center mx-auto mt-2">
                        {databases.map(language => {
                            return <div key={`databases_${language}`} className="w-max mx-1/2 my-1 bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{language}</div>
                        })}
                    </dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-400 md:text-lg">Utilities</dt>
                    <dd className="flex flex-wrap w-4/5 justify-center mx-auto mt-2">
                        {utilities.map(language => {
                            return <div key={`utilitis_${language}`} className="w-max mx-1/2 my-1 bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{language}</div>
                        })}
                    </dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-400 md:text-lg">DevOps</dt>
                    <dd className="flex flex-wrap w-4/5 justify-center mx-auto mt-2">
                        {devOps.map(language => {
                            return <div key={`devOps_${language}`} className="w-max mx-1/2 my-1 bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{language}</div>
                        })}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
}

export default Skills;