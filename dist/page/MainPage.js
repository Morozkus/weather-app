var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import weatherPanel from "../components/WeatherPanel.js";
import CardBoard from "../components/CardBoard.js";
import Search from "../components/Search.js";
class MainPage {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            // стандартный контейнер для централизации и ограничения пространства
            const container = document.createElement('div');
            container.classList.add('container', 'card__container');
            // run() добавляет панель в начало document.body
            weatherPanel.run();
            const cardBoard = new CardBoard();
            const search = new Search(cardBoard);
            container.append(search.searchPanel, cardBoard.cardBoard);
            MainPage.body.append(container);
        });
    }
}
MainPage.body = document.body;
export default MainPage;
//# sourceMappingURL=MainPage.js.map