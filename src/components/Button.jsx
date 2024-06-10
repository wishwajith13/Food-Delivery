const Button=({value,buttonOutline})=>{
    return(
        
        <button className={`group relative h-12 overflow-hidden overflow-x-hidden rounded-full bg-slate-50 px-8 py-2 text-black ${buttonOutline? buttonOutline:"" }`}>
            <span class="relative z-10">{value}</span>
            <span class="absolute inset-0 overflow-hidden rounded-md">
                <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-orange-200 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150">
                </span>
            </span>
        </button>
        
    )
}

export default Button