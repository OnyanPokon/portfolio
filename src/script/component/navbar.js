class navbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="container max-w-screen-lg flex justify-between mx-auto px-8 py-6 items-center">
            <div class="text-xl">
                <h1 class="font-bold">Logo</h1>
            </div>
            <div class="hidden lg:block">
                <ul class="flex flex-row gap-10 text-xs">
                    <li><a href="" class="hover:text-purple">Home</a></li>
                    <li><a href="" class="hover:text-purple">About</a></li>
                    <li><a href="" class="hover:text-purple">Portfolio</a></li>
                </ul>
            </div>
            <div class="hidden lg:block">
                <a href="https://drive.google.com/file/d/1XpAHK6W40TbkJFemQaHK73nk8Gha8WAK/view?usp=sharing" class="bg-transparent outline outline-offset-2 outline-slateblue hover:bg-gradient-to-tr from-mediumvioletred to-slateblue hover:outline-none px-6 py-3 rounded-lg font-bold text-xs transition-all">Download CV</a>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-menu', navbar);