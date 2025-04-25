import { IconProps, IconSizeVarients } from "./IconIndex";


export const EditIcon = (props: IconProps) => {
    return <svg className={IconSizeVarients[props.size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.568 5.02841L17.0976 3.49798C17.4164 3.17913 17.8489 3 18.2998 3C18.7507 3 19.1832 3.17913 19.502 3.49798C19.8209 3.81683 20 4.24928 20 4.7002C20 5.15112 19.8209 5.58358 19.502 5.90243L9.87426 15.5302C9.39493 16.0092 8.80383 16.3613 8.15433 16.5547L5.71996 17.28L6.44529 14.8457C6.63866 14.1962 6.99076 13.6051 7.46981 13.1257L15.568 5.02841ZM15.568 5.02841L17.9598 7.42017M16.5998 13.6534V17.96C16.5998 18.5011 16.3849 19.0199 16.0023 19.4025C15.6198 19.7851 15.1009 20 14.5598 20H5.03997C4.49894 20 3.98006 19.7851 3.59749 19.4025C3.21493 19.0199 3 18.5011 3 17.96V8.44015C3 7.89912 3.21493 7.38024 3.59749 6.99767C3.98006 6.6151 4.49894 6.40018 5.03997 6.40018H9.34658" stroke="#4EF359" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="5" y="8" width="15" height="14" rx="2" fill="#4EF359" fill-opacity="0.29"/>
    </svg>
    
//      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={IconSizeVarients[props.size]}>
//   <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
// </svg>


}