import React from 'react'
import ScrollToTop from '../../ScrollToTop'
import Header from '../../UI/MyButton/Header/Header'
import FormSection from './FormSection'

function Contacts({elementId}) {
    return (
        <div className="main" id={elementId}>
            <ScrollToTop />
            <Header pageId={elementId}/>
            <FormSection />
        </div>
    )
}

export default Contacts
