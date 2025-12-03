import LinkedInLogo from "/images/White_Linkedin_Logo-png-6.png"
import InstaLogo from "/images/Instagram_Logo.png"
import PetWalkerLogo from "/images/Logo_In-line.png"
import GitHubLogo from "/images/GitHub_Logo_White.png"

export function Footer(){
    return(
        <footer className="flex flex-col w-full h-60 bg-defaultGray select-none items-center justify-center">
            <section className="flex mb-13">
                <img src={PetWalkerLogo} className="h-4 md:h-7" alt="logo-petWalker"/>
                <span className="flex justify-center items-center w-2 h-2 mt-3 bg-white rounded-full mx-3"></span>
                <p className="text-white text-[13px] md:text-2xl font-medium">Project By: Lucas Tadeu</p>
            </section>

            <section className="flex items-center justify-center">
                <a href="https://linkedin.com/in/lucas-tadeu-4828a3330/"><img src={LinkedInLogo} className="h-5 md:h-10 mx-5 cursor-pointer hover:scale-115 duration-300" alt="linkedin-logo" /></a>
                <a href="https://www.instagram.com/lucasst14"><img src={InstaLogo} className="h-10 md:h-20 cursor-pointer mx-2 md:mx-5 hover:scale-115 duration-300" alt="instagram-logo"/></a>
                <a href="https://github.com/LucasTadeu14?tab=repositories"><img src={GitHubLogo} className="h-7 md:h-15 mx-5 cursor-pointer hover:scale-115 duration-300" alt="gitHub-logo" /></a>
            </section>
        </footer>
    )
}