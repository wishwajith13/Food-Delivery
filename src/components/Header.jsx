import Button from "./Button"


const Header =()=>{
    return(
        <div className="w-full">
        <div className="bg-header-img bg-cover h-100 xl:max-2xl:h-96 lg:max-xl:h-80 md:max-lg:h-72 sm:max-md:h-64 vsm:max-sm:h-60 mt-10 vsm:max-lg:mt-8 mb-10 rounded-3xl bg-no-repeat relative">
            <div className="absolute flex flex-col items-start gap-8 vsm:max-lg:bottom-5 max-w-1/2 left-28 vsm:max-sm:left-12 animate-fadein3 font-playfair">
                <h2 className="font-medium text-white text-9xl xl:max-2xl:text-7xl lg:max-xl:text-6xl md:max-lg:text-6xl sm:max-md:text-5xl vsm:max-sm:text-4xl">Order Your Food Here</h2>
                <p className="text-white text-lg xl:max-2xl:text-base lg:max-xl:text-sm vsm:max-lg:hidden font-outfit">Welcome to Tomato, your one-stop destination for delicious meals delivered to your doorstep. Browse our extensive menu featuring a variety of cuisines, from mouth-watering pizzas to fresh sushi. With Tomato, satisfying your cravings has never been easier.</p>
                <Button value="Viwe Menu" buttonOutline="vsm:max-sm:px-5 vsm:max-sm:py-0 vsm:max-sm:text-xs"/>
            </div>
        </div>
        </div>
    )
}

export default Header

//bg-[url('./header1_img.png')]
//bg-[url('./di.avif')]