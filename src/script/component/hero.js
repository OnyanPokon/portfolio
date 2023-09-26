class hero extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <section class="container max-w-screen-lg mx-auto flex flex-col px-12 pt-10 pb-32 lg:py-36 gap-y-40 lg:flex-row">
        <div class="flex flex-col flex-1 items-start gap-5">
                <h1 class="text-4xl lg:text-5xl font-bold">Rafiq Daud</h1>
                <p class="text-xs lg:text-sm">Ui & UX Deisgner | Front End Web Developper</p>
                <p class="text-sm lg:text-lg">"Creativity and innovation in UI/UX development define me as a Front End Developer. Join me in crafting captivating digital experiences!"</p>
                <div class="flex flex-row gap-4">
                    <a href="https://drive.google.com/file/d/1XpAHK6W40TbkJFemQaHK73nk8Gha8WAK/view?usp=sharing" class="bg-gradient-to-tr from-mediumvioletred to-slateblue transition-all px-6 py-3 rounded-lg font-bold text-xs lg:text-lg">Download CV</a>
                </div>
                <div class="flex gap-10 items-center justify-center">
                    <div class="flex flex-col items-center">
                        <h1 class="font-bold text-3xl">10+</h1>
                        <p class="text-xs">Project</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <h1 class="font-bold text-3xl">5th+</h1>
                        <p class="text-xs">Experience</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <h1 class="font-bold text-3xl">75+</h1>
                        <p class="text-xs">Project</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center flex-1 relative mb-10">
                <img src="./img/blob 1.svg" alt="" class="absolute">
                <img src="./img/profile.png" alt="" class="absolute w-[240px] lg:w-[300px]">  
                <div class="absolute backdrop-blur-lg bg-gradient-to-br from-gray/80 to-mediumvioletred/40 shadow-sm ring-2 ring-[#ebedf944] lg:mt-72 mt-52 p-4 lg:p-8 flex flex-col items-start rounded-lg lg:text-xl font-semibold ">
                    <div class="flex flex-row items-center gap-2">
                        <img src="./img/linkedin_logo.png" alt="" style="width: 32px;">
                        <p class="">Mohamad Rafiq Daud</p>
                    </div>
                    <div class="flex flex-row items-center gap-2">
                        <img src="./img/instagram_logo.png" alt="" style="width: 32px;">
                        <p class="">@rafiqdaud_</p>
                    </div>
                </div> 
            </div>
        </section>
        `;
    }
}

customElements.define('hero-section', hero);