import { sprintf } from "sprintf-js";
class Search{
    constructor (page){
        this.page = page;
    }

    async search_q(query, n){
        const nth_locator = sprintf(".resultList  div:nth-child(%d)", n);
        await this.page.locator("[class='searchInput form-controls']").fill(query);
        await this.page.waitForTimeout(2000);
        await this.page.locator(nth_locator).click();
    }
}

export default Search;
