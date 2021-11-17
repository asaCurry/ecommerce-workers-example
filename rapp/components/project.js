import { urlFor } from "@lib/sanity";
import { useDispatch } from 'react-redux'
import { projectModalShow, setProjectModalProject } from '../store/features/modal/projectModalSlice'

export default function Project({ project, projectInd }) {

    const { title, color } = project;
    const prodImg = project.screen.asset._ref;

    const dispatch = useDispatch()

    const handleProjectClick = () => {
        dispatch(setProjectModalProject(project))
        dispatch(projectModalShow())
    }

    return (
        <>
            <div className="project justify-self-center self-center relative col-span-1 p-8 bg-center bg-cover bg-top " style={{ backgroundImage: `url("${urlFor(prodImg).url()}")` }}>
                <div className="project-overlay" style={{ background: `${color}` }}></div>
                <article className="py-4  h-full flex items-center justify-center" key={projectInd} onClick={handleProjectClick}>
                    <h3 className="text-center relative z-10 text-white font-bold text-3xl flex items-center"> {title} </h3>
                </article>
            </div>
        </>


    )
}