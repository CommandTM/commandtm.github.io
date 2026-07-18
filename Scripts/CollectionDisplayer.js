const amountOfRecent = 12;

function htmlifyGame(game) {
    return `
        <div class="article">
            <div class="article-image">
                <img src="${game.images[game.thumbnail_image_id].link}" alt="${game.images[game.thumbnail_image_id].alt? game.images[game.thumbnail_image_id].alt : `Cover art of ${game.name}`}">
            </div>
            <h3 class="article-title">
                ${game.name}
            </h3>
        </div>
    `
}

function htmlifyOption(option) {
    return `
        <option value="${option}">${option}</option>
    `
}

function addRecentHtml(elementId) {
    let games_html = []

    let games = global_games

    games.sort(function(a,b){return a.date_added < b.date_added})

    for (let i = 0; i < amountOfRecent; i++){
        if (i >= games.length) break

        games_html.push(htmlifyGame(games[i]))
    }

    let container = document.getElementById(elementId)

    games_html.forEach(game_html => {
        container.innerHTML += game_html
    })
}

function addFeaturedHtml(elementId, featuredIds) {
    let games_html = []

    featuredIds.forEach(id => {
        games_html.push(htmlifyGame(global_games.find(game => game.id === id)))
    })

    let container = document.getElementById(elementId)

    games_html.forEach(game_html => {
        container.innerHTML += game_html
    })
}

function addResultsHtml(elementId, filters, sort) {
    let games_html = []

    let games = []

    let shouldFilter = false

    filters.forEach(filter => {
        if (!shouldFilter && filter){
            shouldFilter = true;
        }
    })

    if (shouldFilter) {
        global_games.forEach(game => {
            if (
                (!filters[0] || game.type === filters[0]) &&
                (!filters[1] || game.format === filters[1]) &&
                (!filters[2] || game.condition === filters[2]) &&
                (!filters[3] || game.name.includes(filters[3]))
            ){
                games.push(game)
            }
        })
    } else {
        games = global_games
    }

    if (sort) {
        switch (sort) {
            case "date":
                games.sort(function(a,b){return a.date_added < b.date_added})
                break
        }
    } else {
        games.sort(function(a,b){
            let nameA = a.name.toUpperCase()
            let nameB = b.name.toUpperCase()

            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
        })
    }

    games.forEach(game => {
        games_html.push(htmlifyGame(game))
    })

    let container = document.getElementById(elementId)

    games_html.forEach(game_html => {
        container.innerHTML += game_html
    })
}

function addFormOptions(elementId, types) {
    options_html = []

    types.forEach(type => {
        options_html.push(htmlifyOption(type))
    })

    let dropdown = document.getElementById(elementId)

    options_html.forEach(option_html => {
        dropdown.innerHTML += option_html
    })
}