import React from 'react'
import ScrollToTop from '../../ScrollToTop'
import Header from '../../UI/MyButton/Header/Header'
import AboutAltSection from './AboutAltSection'
import TeamSection from './TeamSection'

function About({elementId}) {
    return (
        <div className="main" id={elementId}>
            <ScrollToTop />
            <Header pageId={elementId}/>
            <AboutAltSection />
            <TeamSection />
        </div>
    )
}

export default About