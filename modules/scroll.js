class Scroll{
    constructor (page){
        this.page = page;
    }

    async scroll(n){
        for (let i = 0; i < n; i++){
            await this.page.keyboard.press('PageDown');
        }
    }
}

export default Scroll;