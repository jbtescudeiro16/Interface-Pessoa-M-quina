class Game {
    // private fields
    #name;
    #year;
    #platform;

    // constructor
    constructor(aName, aYear, aPlatform) {
        this.#name = aName;
        this.#year = aYear;
        this.#platform = aPlatform;
    }



    get name() {
        return this.#name;
    }
    set name(v) {
        this.name = v;
    }


    hasYear(aYear) {
        return this._year === aYear;
    }
    get year() {
        return this.#year;
    }


    get platform() {
        return this.#platform;

    }

    set platform(v) {
        this.platform = v;
    }

    moreRecent(game2) {

        if (game2.year < this.year()) return true;
        return false;
    }


}

let counter = 0;
let button = document.getElementById("button").onclick = count;
function count() {
    document.getElementById("show").innerHTML = counter;
    counter++;
}
count();



var vm = new Vue({
    el: "#gamesApp",
    data: {
        appName: "Games App",
        userName: "Escudas",
        games: [new Game("CS:GO", "2010", "PC"),
        new Game("Fall Guys", "2018", "Playstation4"),
        new Game("FIFA", "1950", "PC"),
        new Game("Rocket League", "2010", "PC/Console"),
        new Game("Clash Royale", "2014", "Celular"),

        ]
    },
    computed: {
        years: function () {
            let list = [];
            this.games.forEach(function (g) {
                if (!list.includes(g.year)) list.push(g.year);
            });
            return list.sort((a, b) => a - b);
        },
        games_displayed: function () {
            if (this.setYear === "Year...") return this.games;
            let list = [];
            this.games.forEach(g => {
                if (g.year == this.selYear || (g.platform)) list.push(g);
            })
            return list;
        }
    }
})

