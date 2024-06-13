"use client"

import Image from 'next/image'
import React from 'react'
import logo from '@/app/Assets/Logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidenav() {

    const linkActive = usePathname();

  return (
    <div className=' w-[300px] min-h-screen px-5  fixed bg-white'>
        <Image
        src={logo}
        alt='Gns logo'
        priority={true}
        className=' w-28'
        />
        <div className=" flex flex-col gap-24 pt-8">
            <ul className=' w-full flex flex-col gap-3'>
                <li>
                    <Link href={'/'} className={linkActive == '/' ? "active-link nav-link" : "nav-link"}>
                    <svg className =' inline-block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" 
                    fill={linkActive == '/' ? "white" : "#484747"}/>
                    </svg>
                    Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={'/Blogs'} 
                    className={linkActive === "/Blogs" ? "active-link nav-link" : "nav-link"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8125 21V20.996C15.2765 21.0264 15.736 20.889 16.1071 20.6088C16.4783 20.3287 16.7364 19.9245 16.8345 19.47L17.3675 17H19.875C20.4386 17 20.9791 16.7761 21.3776 16.3776C21.7761 15.9791 22 15.4386 22 14.875V9.0775C22 8.53994 21.7916 8.02331 21.4186 7.63618C21.0457 7.24905 20.5372 7.02155 20 7.0015V7H14.25V5.125C14.25 4.56141 14.0261 4.02091 13.6276 3.6224C13.2291 3.22388 12.6886 3 12.125 3H4.125C3.56141 3 3.02091 3.22388 2.6224 3.6224C2.22388 4.02091 2 4.56141 2 5.125V17.875C2 18.7038 2.32924 19.4987 2.91529 20.0847C3.50134 20.6708 4.2962 21 5.125 21H14.8125ZM14.25 8.25H18.017C17.9626 8.37541 17.9208 8.50587 17.892 8.6395L15.613 19.206C15.5776 19.3728 15.4817 19.5205 15.3437 19.6206C15.2058 19.7208 15.0356 19.7662 14.8661 19.7482C14.6966 19.7301 14.5398 19.6499 14.426 19.523C14.3122 19.3961 14.2495 19.2315 14.25 19.061V8.25ZM6.5 7.75C6.5 7.94891 6.42098 8.13968 6.28033 8.28033C6.13968 8.42098 5.94891 8.5 5.75 8.5C5.55109 8.5 5.36032 8.42098 5.21967 8.28033C5.07902 8.13968 5 7.94891 5 7.75C5 7.55109 5.07902 7.36032 5.21967 7.21967C5.36032 7.07902 5.55109 7 5.75 7C5.94891 7 6.13968 7.07902 6.28033 7.21967C6.42098 7.36032 6.5 7.55109 6.5 7.75ZM5.625 11H10.875C11.0408 11 11.1997 11.0658 11.3169 11.1831C11.4342 11.3003 11.5 11.4592 11.5 11.625C11.5 11.7908 11.4342 11.9497 11.3169 12.0669C11.1997 12.1842 11.0408 12.25 10.875 12.25H5.625C5.45924 12.25 5.30027 12.1842 5.18306 12.0669C5.06585 11.9497 5 11.7908 5 11.625C5 11.4592 5.06585 11.3003 5.18306 11.1831C5.30027 11.0658 5.45924 11 5.625 11ZM5 15.625C5 15.28 5.28 15 5.625 15H10.875C11.0408 15 11.1997 15.0658 11.3169 15.1831C11.4342 15.3003 11.5 15.4592 11.5 15.625C11.5 15.7908 11.4342 15.9497 11.3169 16.0669C11.1997 16.1842 11.0408 16.25 10.875 16.25H5.625C5.28 16.25 5 15.97 5 15.625Z" 
                    fill={linkActive == "/Blogs" ? "white" : "#484747"}/>
                    </svg>
                    Blogs
                    </Link>
                </li>
                <li>
                    <Link href={'/CampusNews'}  
                    className={linkActive == '/CampusNews' ? "active-link nav-link" : "nav-link"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H16L21 8V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM7 17H17V15H7V17ZM7 13H17V11H7V13ZM15 9H19L15 5V9ZM7 9H12V7H7V9Z" 
                    fill={linkActive == '/CampusNews' ? "white" : "#484747"}/>
                    </svg>
                    Campus News
                    </Link>
                </li>
                <li>
                    <Link href={'/Institutions'} 
                    className={linkActive == '/Institutions' ? "active-link nav-link" : "nav-link"}>
                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2245_3552)">
                    <path d="M26.9906 11.9766C26.9906 12.8203 26.2875 13.4813 25.4906 13.4813H23.9906L24.0234 20.9906C24.0328 22.6547 22.6875 24.0047 21.0234 24.0047H6.00469C4.35 24.0047 3.00469 22.6594 3.00469 21.0047V13.4813H1.5C0.65625 13.4813 0 12.825 0 11.9766C0 11.5547 0.140625 11.1797 0.46875 10.8516L12.4875 0.375C12.8156 0.046875 13.1906 0 13.5187 0C13.8469 0 14.2219 0.09375 14.5031 0.328125L26.475 10.8516C26.85 11.1797 27.0375 11.5547 26.9906 11.9766ZM16.5 10.5C16.5 9.70435 16.1839 8.94129 15.6213 8.37868C15.0587 7.81607 14.2956 7.5 13.5 7.5C12.7044 7.5 11.9413 7.81607 11.3787 8.37868C10.8161 8.94129 10.5 9.70435 10.5 10.5C10.5 11.2956 10.8161 12.0587 11.3787 12.6213C11.9413 13.1839 12.7044 13.5 13.5 13.5C14.2956 13.5 15.0587 13.1839 15.6213 12.6213C16.1839 12.0587 16.5 11.2956 16.5 10.5ZM12 15C9.92813 15 8.25 16.6781 8.25 18.75C8.25 19.1625 8.5875 19.5 9 19.5H18C18.4125 19.5 18.75 19.1625 18.75 18.75C18.75 16.6781 17.0719 15 15 15H12Z" 
                    fill={linkActive == '/Institutions' ? "white" : "#484747"}/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2245_3552">
                    <rect width="27" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Institutions
                    </Link>
                </li>
                <li>
                    <Link href={'/Scholarships'} 
                    className={linkActive == '/Scholarships' ? "active-link nav-link" : "nav-link"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2313_5532)">
                    <path d="M18.3234 13.9922C18.3234 13.9922 18.3234 13.9969 18.3281 13.9969C18.7594 14.9062 19.0031 15.9234 19.0031 16.9969C18.9984 20.8641 15.8672 24 12 24C8.13281 24 5.00156 20.8641 5.00156 17.0016C5.00156 15.9281 5.24531 14.9109 5.67656 14.0016C5.75625 13.8328 5.84531 13.6641 5.93906 13.5C6.14531 13.1438 6.37969 12.8109 6.64219 12.5016C7.92656 10.9734 9.85313 10.0031 12.0047 10.0031C13.5797 10.0031 15.0328 10.5234 16.2047 11.4047C16.6313 11.7281 17.0203 12.0937 17.3672 12.5062C17.6297 12.8156 17.8641 13.1531 18.0703 13.5047C18.1641 13.6641 18.2484 13.8328 18.3281 13.9969L18.3234 13.9922ZM19.5609 13.1109C18.15 10.3734 15.2953 8.49844 12 8.49844C8.70469 8.49844 5.85 10.3734 4.43906 13.1109L0 9.50156L12 0L24 9.50156L19.5609 13.1156V13.1109Z" 
                    fill={linkActive == '/Scholarships' ? "white" : "#484747"}/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2313_5532">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Scholarships
                    </Link>
                </li>
                <li>
                    <Link href={'/JobPosts'} 
                    className={linkActive == '/JobPosts' ? "active-link nav-link" : "nav-link"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0208 1.021H16.0208V3.021H10.0208V1.021ZM20.0398 7.41L21.4738 5.976L20.0598 4.562L18.6268 5.995C17.0567 4.73681 15.1099 4.04175 13.098 4.02109C11.086 4.00042 9.12537 4.65533 7.52977 5.881L8.94977 7.321C10.1362 6.47836 11.5546 6.02418 13.0098 6.021L13.0198 6.022V13.002L17.9728 17.96C16.995 18.9424 15.7475 19.6124 14.3886 19.8852C13.0296 20.158 11.6203 20.0212 10.3391 19.4923C9.05792 18.9634 7.96259 18.066 7.19187 16.914C6.42115 15.7619 6.00974 14.4071 6.00977 13.021H9.00977L5.00977 9.021L1.00977 13.021H4.00977C4.0084 14.4592 4.35171 15.8767 5.01093 17.1549C5.67014 18.4331 6.62607 19.5347 7.79862 20.3674C8.97118 21.2001 10.3262 21.7397 11.7502 21.9409C13.1742 22.1422 14.6257 21.9993 15.9832 21.5242C17.3406 21.049 18.5643 20.2555 19.552 19.2101C20.5396 18.1647 21.2623 16.8978 21.6596 15.5156C22.0568 14.1334 22.1171 12.6761 21.8353 11.2658C21.5534 9.85556 20.9377 8.53336 20.0398 7.41Z" 
                    fill={linkActive == '/JobPosts' ? "white" : "#484747"}/>
                    </svg>
                    Job Posts
                    </Link>
                </li>
                <li>
                    <Link href={'/Users'} 
                    className={linkActive == '/Users' ? "active-link nav-link" : "nav-link"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.5C12.9283 5.5 13.8185 5.86875 14.4749 6.52513C15.1313 7.1815 15.5 8.07174 15.5 9C15.5 9.92826 15.1313 10.8185 14.4749 11.4749C13.8185 12.1313 12.9283 12.5 12 12.5C11.0717 12.5 10.1815 12.1313 9.52513 11.4749C8.86875 10.8185 8.5 9.92826 8.5 9C8.5 8.07174 8.86875 7.1815 9.52513 6.52513C10.1815 5.86875 11.0717 5.5 12 5.5ZM5 8C5.56 8 6.08 8.15 6.53 8.42C6.38 9.85 6.8 11.27 7.66 12.38C7.16 13.34 6.16 14 5 14C4.20435 14 3.44129 13.6839 2.87868 13.1213C2.31607 12.5587 2 11.7956 2 11C2 10.2044 2.31607 9.44129 2.87868 8.87868C3.44129 8.31607 4.20435 8 5 8ZM19 8C19.7956 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2044 22 11C22 11.7956 21.6839 12.5587 21.1213 13.1213C20.5587 13.6839 19.7956 14 19 14C17.84 14 16.84 13.34 16.34 12.38C17.2119 11.2544 17.6166 9.8362 17.47 8.42C17.92 8.15 18.44 8 19 8ZM5.5 18.25C5.5 16.18 8.41 14.5 12 14.5C15.59 14.5 18.5 16.18 18.5 18.25V20H5.5V18.25ZM0 20V18.5C0 17.11 1.89 15.94 4.45 15.6C3.86 16.28 3.5 17.22 3.5 18.25V20H0ZM24 20H20.5V18.25C20.5 17.22 20.14 16.28 19.55 15.6C22.11 15.94 24 17.11 24 18.5V20Z" 
                    fill={linkActive == '/Users' ? "white" : "#484747"}/>
                    </svg>
                    Users
                    </Link>
                </li>
                <li>
                    <Link href={'/Settings'} 
                    className={linkActive == '/Settings' ? "active-link nav-link" : "nav-link"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2788 2.152C13.9088 2 13.4388 2 12.4998 2C11.5608 2 11.0908 2 10.7208 2.152C10.2283 2.35421 9.83621 2.74377 9.63083 3.235C9.53683 3.458 9.50083 3.719 9.48583 4.098C9.47916 4.3726 9.40256 4.64097 9.26327 4.87772C9.12399 5.11447 8.92662 5.31178 8.68983 5.451C8.44857 5.5851 8.17737 5.65615 7.90135 5.65754C7.62534 5.65894 7.35343 5.59065 7.11083 5.459C6.77283 5.281 6.52783 5.183 6.28583 5.151C5.75638 5.08148 5.2209 5.2238 4.79583 5.547C4.47783 5.789 4.24283 6.193 3.77383 7C3.30383 7.807 3.06983 8.21 3.01683 8.605C2.94683 9.131 3.09083 9.663 3.41683 10.084C3.56483 10.276 3.77383 10.437 4.09683 10.639C4.57383 10.936 4.87983 11.442 4.87983 12C4.87983 12.558 4.57383 13.064 4.09783 13.36C3.77383 13.563 3.56483 13.724 3.41583 13.916C3.25491 14.1239 3.1368 14.3617 3.06831 14.6156C2.99983 14.8694 2.98233 15.1343 3.01683 15.395C3.06983 15.789 3.30383 16.193 3.77383 17C4.24383 17.807 4.47783 18.21 4.79583 18.453C5.21983 18.776 5.75583 18.918 6.28583 18.849C6.52783 18.817 6.77283 18.719 7.11083 18.541C7.35355 18.4092 7.62564 18.3408 7.90185 18.3422C8.17807 18.3436 8.44945 18.4147 8.69083 18.549C9.17683 18.829 9.46483 19.344 9.48583 19.902C9.50083 20.282 9.53683 20.542 9.63083 20.765C9.83483 21.255 10.2268 21.645 10.7208 21.848C11.0908 22 11.5608 22 12.4998 22C13.4388 22 13.9088 22 14.2788 21.848C14.7714 21.6458 15.1634 21.2562 15.3688 20.765C15.4628 20.542 15.4988 20.282 15.5138 19.902C15.5338 19.344 15.8228 18.828 16.3098 18.549C16.5511 18.4149 16.8223 18.3439 17.0983 18.3425C17.3743 18.3411 17.6462 18.4093 17.8888 18.541C18.2268 18.719 18.4718 18.817 18.7138 18.849C19.2438 18.919 19.7798 18.776 20.2038 18.453C20.5218 18.211 20.7568 17.807 21.2258 17C21.6958 16.193 21.9298 15.79 21.9828 15.395C22.0172 15.1343 21.9995 14.8693 21.9309 14.6155C21.8622 14.3616 21.7439 14.1239 21.5828 13.916C21.4348 13.724 21.2258 13.563 20.9028 13.361C20.4258 13.064 20.1198 12.558 20.1198 12C20.1198 11.442 20.4258 10.936 20.9018 10.64C21.2258 10.437 21.4348 10.276 21.5838 10.084C21.7447 9.87606 21.8629 9.63829 21.9313 9.38443C21.9998 9.13057 22.0173 8.86566 21.9828 8.605C21.9298 8.211 21.6958 7.807 21.2258 7C20.7558 6.193 20.5218 5.79 20.2038 5.547C19.7788 5.2238 19.2433 5.08148 18.7138 5.151C18.4718 5.183 18.2268 5.281 17.8888 5.459C17.6461 5.59083 17.374 5.65922 17.0978 5.65782C16.8216 5.65642 16.5502 5.58528 16.3088 5.451C16.0722 5.31166 15.8751 5.11429 15.7359 4.87755C15.5968 4.64081 15.5204 4.37251 15.5138 4.098C15.4988 3.718 15.4628 3.458 15.3688 3.235C15.2672 2.99174 15.1186 2.77088 14.9316 2.58506C14.7445 2.39923 14.5227 2.25208 14.2788 2.152ZM12.4998 15C14.1698 15 15.5228 13.657 15.5228 12C15.5228 10.343 14.1688 9 12.4998 9C10.8298 9 9.47683 10.343 9.47683 12C9.47683 13.657 10.8308 15 12.4998 15Z" 
                    fill={linkActive == '/Settings' ? "white" : "#484747"}/>
                    </svg>
                    Settings
                    </Link>
                </li>
            </ul>
            <div>
            <Link href={logo} className="nav-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2245_3560)">
                    <path d="M15.3335 2.66663H4.66683C4.31321 2.66663 3.97407 2.8071 3.72402 3.05715C3.47397 3.3072 3.3335 3.64634 3.3335 3.99996V20C3.3335 20.3536 3.47397 20.6927 3.72402 20.9428C3.97407 21.1928 4.31321 21.3333 4.66683 21.3333H15.3335C15.6871 21.3333 16.0263 21.1928 16.2763 20.9428C16.5264 20.6927 16.6668 20.3536 16.6668 20V16H10.4202C10.2434 16 10.0738 15.9297 9.94876 15.8047C9.82373 15.6797 9.7535 15.5101 9.7535 15.3333C9.7535 15.1565 9.82373 14.9869 9.94876 14.8619C10.0738 14.7369 10.2434 14.6666 10.4202 14.6666H16.6668V3.99996C16.6668 3.64634 16.5264 3.3072 16.2763 3.05715C16.0263 2.8071 15.6871 2.66663 15.3335 2.66663Z" fill="#484747"/>
                    <path d="M18.7732 11.52C18.6456 11.4108 18.4816 11.3538 18.3138 11.3602C18.146 11.3667 17.9869 11.4363 17.8681 11.555C17.7494 11.6737 17.6798 11.8329 17.6734 12.0007C17.6669 12.1685 17.724 12.3325 17.8332 12.46L20.0865 14.6667H16.6665V16H20.0865L17.8332 18.3067C17.7634 18.3665 17.7067 18.44 17.6667 18.5227C17.6267 18.6054 17.6042 18.6955 17.6006 18.7873C17.5971 18.8792 17.6126 18.9707 17.6461 19.0563C17.6796 19.1418 17.7304 19.2195 17.7954 19.2845C17.8604 19.3494 17.9381 19.4003 18.0236 19.4338C18.1092 19.4673 18.2007 19.4828 18.2925 19.4792C18.3844 19.4757 18.4744 19.4532 18.5572 19.4132C18.6399 19.3732 18.7134 19.3165 18.7732 19.2467L22.6665 15.38L18.7732 11.52Z" fill="#484747"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2245_3560">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Log Out
                    </Link>
            </div>
        </div>
    </div>
  )
}
