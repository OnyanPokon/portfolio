

class about extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <section data-aos="fade-in" class="container max-w-screen-lg mx-auto flex flex-col px-12 py-20 gap-10">
                    <div class="flex flex-col items-center text-center gap-y-10">
                        <h1 class="font-bold text-3xl">About Me</h1>
                        <p class="text-xs lg:text-sm">"I am a Computer Science student with 5 years of experience in web development, specializing in front-end. I am an enthusiastic, creative, and dedicated individual who is passionate about creating engaging and functional web experiences. With a deep understanding of user interface design and the latest technologies, I am ready to continue growing and making a positive contribution to the world of information technology."</p>
                        <div class="">
                            <ul class="flex flex-row text-xs gap-6">
                                <li><a href="" class="bg-transparent outline outline-offset-2 outline-slateblue hover:bg-gradient-to-tr from-mediumvioletred to-slateblue hover:outline-none px-4 py-2 rounded-lg text-xs transition-all">Newest Projects</a></li>
                                <li><a href="" class="bg-transparent outline outline-offset-2 outline-slateblue hover:bg-gradient-to-tr from-mediumvioletred to-slateblue hover:outline-none px-4 py-2 rounded-lg text-xs transition-all">Latest Projects</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
                        <div class="flex cursor-pointer flex-col overflow-hidden rounded bg-gradient-to-br from-gray/40 to-mediumvioletred/10 shadow-sm ring-2 ring-[#ebedf944] transition focus-within:ring-2 hover:ring-4 p-2">
                            <div class="aspect-video w-full overflow-hidden rounded-sm">
                                <img src="./img/busines.png" alt="" class="h-full w-full bg-slate-400 object-cover transition duration-300 group-hover:scale-105">
                            </div>
                            <div class="flex flex-col gap-2 px-2 pb-4 pt-2">
                                <h1 class="text-sm font-semibold lg:text-base">Instagram Feed Design</h1>
                                <p class="text-xs lg:text-sm">Bussines Instagram Feed Design</p>
                            </div>
                        </div>
                        <div class="flex cursor-pointer flex-col overflow-hidden rounded bg-gradient-to-br from-gray/40 to-mediumvioletred/10 shadow-sm ring-2 ring-[#ebedf944] transition focus-within:ring-2 hover:ring-4 p-2">
                            <div class="aspect-video w-full overflow-hidden rounded-sm">
                                <img src="./img/cosmetik.png" alt="" class="h-full w-full bg-slate-400 object-cover transition duration-300 group-hover:scale-105">
                            </div>
                            <div class="flex flex-col gap-2 px-2 pb-4 pt-2">
                                <h1 class="text-sm font-semibold lg:text-base">Instagram Feed Design</h1>
                                <p class="text-xs lg:text-sm">Design Instagram Feed for Cosmetique Store</p>
                            </div>
                        </div>
                        <div class="flex cursor-pointer flex-col overflow-hidden rounded bg-gradient-to-br from-gray/40 to-mediumvioletred/10 shadow-sm ring-2 ring-[#ebedf944] transition focus-within:ring-2 hover:ring-4 p-2">
                            <div class="aspect-video w-full overflow-hidden rounded-sm">
                                <img src="./img/ksl.png" alt="" class="h-full w-full bg-slate-400 object-cover transition duration-300 group-hover:scale-105">
                            </div>
                            <div class="flex flex-col gap-2 px-2 pb-4 pt-2">
                                <h1 class="text-sm font-semibold lg:text-base">Front End Web</h1>
                                <p class="text-xs lg:text-sm">Slicing figma design into responsive website</p>
                            </div>
                        </div>
                    </div>
            </section>`;
    }
}

customElements.define('about-section', about);