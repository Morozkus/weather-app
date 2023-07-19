var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Search {
    constructor(board) {
        this.searchPanel = this.createSearchPanel();
        this.board = board;
    }
    createSearchPanel() {
        const searchPanel = document.createElement('label');
        searchPanel.classList.add('search__label');
        searchPanel.setAttribute('for', 'search');
        const search = document.createElement('input');
        search.classList.add('search');
        search.type = 'text';
        search.name = 'search';
        search.placeholder = 'Введите город';
        search.id = 'search';
        const searchBtn = document.createElement('button');
        searchBtn.classList.add('btn', 'search__btn');
        searchBtn.textContent = 'Найти';
        searchBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (!search.value)
                return;
            this.board.render(yield this.findCard(search.value));
        }));
        searchPanel.append(search, searchBtn);
        return searchPanel;
    }
    findCard(cityNameFromInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const cardList = yield (yield fetch(`http://localhost:3223/api/cities?cityName=${cityNameFromInput}`)).json();
            return cardList;
        });
    }
}
//# sourceMappingURL=Search.js.map