import { IconProps, IconSizeVarients } from "./IconIndex";

export const PlusIcon = (props: IconProps) => {
    return <svg className={IconSizeVarients[props.size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.5V19.5M19.5 12H4.5" stroke="#F35C4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
     
  //   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={IconSizeVarients[props.size]}>
  //   <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  // </svg>
  
}