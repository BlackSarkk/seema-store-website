import { IconProps, IconSizeVarients } from "./IconIndex";

export const BarIcon = (props: IconProps) => {
    return <svg className={IconSizeVarients[props.size]} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 7H17.9375M3.5 12.25H17.9375M3.5 17.5H17.9375" stroke="#F35C4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
//      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={IconSizeVarients[props.size]}>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// </svg>


  
}