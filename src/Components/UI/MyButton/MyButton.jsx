import React from 'react';


function MyButton({children, type}) {
    return (
        <button className={type}>
           {children} 
        </button>
    )
}

export default MyButton
