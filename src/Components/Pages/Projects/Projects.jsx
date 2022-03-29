import React from 'react'
import ScrollToTop from '../../ScrollToTop'
import Header from '../../UI/MyButton/Header/Header'
import ProjectList from './ProjectList'

function Projects({elementId}) {
    return (
        <div className="main" id={elementId}>
            <ScrollToTop />
            <Header pageId={elementId}/>
            <ProjectList/>
        </div>
    )
}

export default Projects
