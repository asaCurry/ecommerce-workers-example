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
                            <h2 className="text-center font-bold mb-4">{title}</h2>
                            <PortableText blocks={project.description[0].children[0].text} />
                            <figure>
                                <img src={urlFor(prodImg).url()} className="object-contain h-56 w-full pt-4" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}