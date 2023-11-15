import { sprintf } from "sprintf-js";

class size{
    constructor (page){
        this.page = page;
    }
    async select(){
        const n=1;
        
        const loc = sprintf("div.selectSize div:nth-child(%d)", n);
        const elementSelector = await this.page.locator(loc);
        const isDisabled = await elementSelector.evaluate(() => {
            const element = document.querySelector(loc);
            return element.disabled;
        });

        if(isDisabled){
            n++;

        }
    }
}