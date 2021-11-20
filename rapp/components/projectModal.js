import { useSelector, useDispatch } from "react-redux";
import { urlFor, PortableText } from "@lib/sanity";
import { projectModalHide } from '@store/modal/projectModalSlice';

export default function ProjectModal() {

    const project = useSelector((state) => state.projectModal.project)
    const { title, _id } = project;
    const prodImg = project.screen.asset._ref;
    const dispatch = useDispatch()

    const handleOutSideClick = (e) => {
        e.target.classList.contains('outer-modal') && dispatch(projectModalHide())
    }

    // handle global hide    
    return (
        <>
            <div onClick={handleOutSideClick} className="modal outer-modal fixed inset-0 flex justify-center items-top">
                <div className="glass opaque w-4/6 mt-24 mb-auto p-12 bg-white rounded-lg my-auto">
                    <div onClick={() => dispatch(projectModalHide())} className=" text-24 absolute top-8 right-8 cursor-pointer"><i className="fas fa-times-circle text-accentone"></i></div>
                    <div className="flex flex-col justify-center items-top h-full">
                        <div className="summary py-4">
                            <h2 className="highlight-underline text-center font-bold mb-4">{title}</h2>
                            <PortableText blocks={project.description[0].children[0].text} />
                            <div className="flex pt-8 flex-col t:flex-row items-start justify-between">
                                <figure class="w-full t:w-half">
                                    <img src={urlFor(prodImg).url()} className="object-contain h-full max-h-96 w-full pt-4" />
                                </figure>
                                <div class="w-full t:w-half px-4">
                                    <PortableText blocks={project.description[0]} />
                                    {
                                        console.log(project.description[0])
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}