import React from 'react'

export const Logo = ({ className = '' }) =>
    <svg className= {className} width='230' height='60' viewBox='0 0 230 60' xmlns='http://www.w3.org/2000/svg'>
        <g>
            <circle cx='30' cy='30' r='30' />
            <rect x='70' width='30' height='60' />
            <circle cx='140' cy='30' r='30' />
            <path d='M200 0H230L200 60H170L200 0Z' />
        </g>
    </svg>

export const Clip = ({ className = '' }) =>
    <svg className={className} width='34' height='30' viewBox='0 0 34 30' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd' d='M6.79999 29.486C5.21599 29.486 3.72699 28.87 2.607 27.749C1.487 26.629 0.869995 25.14 0.869995 23.556C0.869995 21.973 1.487 20.483 2.607 19.363L19.577 2.393C22.669 -0.698 27.701 -0.699 30.792 2.393C32.29 3.89 33.115 5.882 33.115 8C33.115 10.118 32.29 12.11 30.792 13.607L18.064 26.335L16.749 25.02L29.477 12.292C31.844 9.925 31.844 6.075 29.477 3.708C27.112 1.342 23.26 1.341 20.893 3.708L3.922 20.679C3.153 21.447 2.73 22.469 2.73 23.556C2.73 24.644 3.153 25.665 3.922 26.434C5.509 28.021 8.09099 28.02 9.67799 26.434L22.406 13.706C23.213 12.899 23.213 11.586 22.406 10.778C21.599 9.971 20.285 9.972 19.479 10.779L10.993 19.264L9.67799 17.949L18.163 9.463C19.695 7.932 22.189 7.931 23.721 9.463C25.253 10.996 25.253 13.489 23.721 15.021L10.993 27.749C9.873 28.87 8.384 29.486 6.79999 29.486Z' />
    </svg>

export const TrashBin = ({ className = '' }) =>
    <svg className={className} width="13" height="16" viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg">
        <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 5H5V13H4V5Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 5H7V13H6V5Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 5H9V13H8V5Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2H13V3H0V2Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.96497 2.5H8.03497V1.5C8.03497 1.205 7.79497 0.965004 7.49997 0.965004H5.49997C5.20497 0.965004 4.96497 1.205 4.96497 1.5V2.5H4.03497V1.5C4.03497 0.692004 4.69247 0.0350037 5.49997 0.0350037H7.49997C8.30747 0.0350037 8.96497 0.692004 8.96497 1.5V2.5Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.50003 16H3.50003C2.69303 16 1.98653 15.3455 1.92503 14.541L1.00153 2.5385L1.99853 2.4615L2.92203 14.4645C2.94403 14.75 3.21403 15 3.50003 15H9.50003C9.78603 15 10.056 14.75 10.078 14.465L11.0015 2.4615L11.9985 2.5385L11.075 14.541C11.0135 15.3455 10.307 16 9.50003 16Z"/>
        </g>
    </svg>




