import Button from "./Button"


const Header =()=>{
    return(
        <div className="bg-header-img h-80 mt-16 bg-contain bg-no-repeat relative" >
            <div className="absolute flex flex-col items-start gap-8 max-w-1/2 2xl:bottom-1/4 xl:max-2xl:mt-20 left-28 animate-fadein3 font-playfair">
                <h2 className="font-medium text-white text-7xl lg:max-xl:text-6xl">Order Your Food Here</h2>
                <p className="text-white text-sm font-outfit">Welcome to Tomato, your one-stop destination for delicious meals delivered to your doorstep. Browse our extensive menu featuring a variety of cuisines, from mouth-watering pizzas to fresh sushi. With Tomato, satisfying your cravings has never been easier.</p>
                <Button value="Viwe Menu"/>
            </div>
        </div>
    )
}

export default Header

//bg-[url('./header1_img.png')]
//bg-[url('./di.avif')]