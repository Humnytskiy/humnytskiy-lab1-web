import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'src/components/Logo';

const myHeader = () => {

    return (
        <div className='Header'>
            <RouterLink to="/">
            <div className='Header__logo'>
                <Logo/>
            </div>
            </RouterLink>
            <div className='toolbar'>
                <button className="toolbar__button toolbar__button_notifications">
                    <span>
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="21">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3854 14.002V8.99949C14.3854 5.92795 12.7546 3.35667 9.88317 2.67633V1.99599C9.88317 1.16557 9.21283 0.495239 8.38242 0.495239C7.552 0.495239 6.88167 1.16557 6.88167 1.99599V2.67633C4.02024 3.35667 2.37942 5.91795 2.37942 8.99949V14.002L0.378418 16.003V17.0035H16.3864V16.003L14.3854 14.002ZM8.38242 20.005C9.48297 20.005 10.3834 19.1045 10.3834 18.004H6.38142C6.38142 19.1045 7.28187 20.005 8.38242 20.005ZM4.38042 15.0025H12.3844V8.99949C12.3844 6.51825 10.8737 4.49724 8.38242 4.49724C5.89117 4.49724 4.38042 6.51825 4.38042 8.99949V15.0025Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <rect x="-4.00024" y="-2" width="24" height="24" fill="white"/>
                            </g>
                        </svg>
                    </span>
                </button>
                <button className="toolbar__button toolbar__button_out">
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47302 0.521576H17.2172C18.3757 0.521576 19.3235 1.46942 19.3235 2.62789V17.3721C19.3235 18.5306 18.3757 19.4784 17.2172 19.4784H2.47302C1.30401 19.4784 0.366699 18.5306 0.366699 17.3721V13.1595H2.47302V17.3721H17.2172V2.62789H2.47302V6.84052H0.366699V2.62789C0.366699 1.46942 1.30401 0.521576 2.47302 0.521576ZM9.31854 15.2658L7.83359 13.7808L10.5507 11.0532H0.366699V8.94684H10.5507L7.83359 6.21916L9.31854 4.73421L14.5843 10L9.31854 15.2658Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1)">
                    <rect x="-2" y="-2" width="24" height="24" fill="white"/>
                    </g>
                    </svg>
                    </span>
                </button>
            </div>
            <div className='Header__toolbar toolbar'>
                <button className="toolbar__button toolbar__button_notifications">
                    <span>
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="21">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3854 14.002V8.99949C14.3854 5.92795 12.7546 3.35667 9.88317 2.67633V1.99599C9.88317 1.16557 9.21283 0.495239 8.38242 0.495239C7.552 0.495239 6.88167 1.16557 6.88167 1.99599V2.67633C4.02024 3.35667 2.37942 5.91795 2.37942 8.99949V14.002L0.378418 16.003V17.0035H16.3864V16.003L14.3854 14.002ZM8.38242 20.005C9.48297 20.005 10.3834 19.1045 10.3834 18.004H6.38142C6.38142 19.1045 7.28187 20.005 8.38242 20.005ZM4.38042 15.0025H12.3844V8.99949C12.3844 6.51825 10.8737 4.49724 8.38242 4.49724C5.89117 4.49724 4.38042 6.51825 4.38042 8.99949V15.0025Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <rect x="-4.00024" y="-2" width="24" height="24" fill="white"/>
                            </g>
                        </svg>
                    </span>
                </button>
                <button className="toolbar__button toolbar__button_out">
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47302 0.521576H17.2172C18.3757 0.521576 19.3235 1.46942 19.3235 2.62789V17.3721C19.3235 18.5306 18.3757 19.4784 17.2172 19.4784H2.47302C1.30401 19.4784 0.366699 18.5306 0.366699 17.3721V13.1595H2.47302V17.3721H17.2172V2.62789H2.47302V6.84052H0.366699V2.62789C0.366699 1.46942 1.30401 0.521576 2.47302 0.521576ZM9.31854 15.2658L7.83359 13.7808L10.5507 11.0532H0.366699V8.94684H10.5507L7.83359 6.21916L9.31854 4.73421L14.5843 10L9.31854 15.2658Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1)">
                    <rect x="-2" y="-2" width="24" height="24" fill="white"/>
                    </g>
                    </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};
export default myHeader;
