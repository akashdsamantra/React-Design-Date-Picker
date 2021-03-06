import React from 'react'

export default function Arrow({size, direction}) {
    return (
        <svg className={direction === "left" ? "rotateLeft" : null} height={size} width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px"><title>Arow1-50</title><path d="M20.81,86.25a11.25,11.25,0,0,0,19.2,8L75.9,58.32a11.23,11.23,0,0,0,3.29-8c0-.13,0-.25,0-.37a11.2,11.2,0,0,0-3.28-8.32L40,5.79A11.25,11.25,0,0,0,24.1,21.7L52.4,50,24.1,78.3A11.23,11.23,0,0,0,20.81,86.25Z"></path></svg>
    )
}
