import { IconProps, IconSizeVarients } from "./IconIndex";

export const SortIcon = (props: IconProps) => {
    return <svg className={IconSizeVarients[props.size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H17.25M3 9.5H12.75M3 14H12.75M17 14V17V20M17 20L15 17.5M17 20L19 17.5" stroke="#F35C4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.68 13.018C18.158 13.018 17.876 12.934 17.834 12.766L17.537 11.605H16.106L15.845 12.721C15.809 12.907 15.521 13 14.981 13C14.693 13 14.48 12.985 14.342 12.955C14.204 12.919 14.135 12.892 14.135 12.874L15.728 6.781C15.728 6.733 16.139 6.709 16.961 6.709C17.783 6.709 18.194 6.733 18.194 6.781L19.751 12.883C19.751 12.925 19.613 12.958 19.337 12.982C19.061 13.006 18.842 13.018 18.68 13.018ZM16.331 10.462H17.276L16.871 8.599H16.817L16.331 10.462Z" fill="#F35C4E"/>
    </svg>

    
  
}