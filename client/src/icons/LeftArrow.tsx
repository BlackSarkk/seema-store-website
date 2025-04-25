import { IconProps, IconSizeVarients } from "./IconIndex";

export const LeftArrowIcon = (props: IconProps) => {
    return <svg className={IconSizeVarients[props.size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 15.5L3 11.75M3 11.75L6.75 8M3 11.75H21" stroke="#F35C4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
     
    
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={IconSizeVarients[props.size]}>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
// </svg>

  
  
}