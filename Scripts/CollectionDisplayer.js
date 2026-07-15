const amountOfRecent = 12;

function htmlify(game) {
    return `
        <div class="article">
            <div class="article-image">
                <img src="${game.images[game.thumbnail_image_id].link}">
            </div>
            <h3 class="article-title">
                ${game.name}
            </h3>
        </div>
    `
}

function addRecentHtml(elementId) {
    let games_html = []

    let games = global_games

    games.sort(function(a,b){return a.date_added < b.date_added})

    for (let i = 0; i < amountOfRecent; i++){
        if (i >= games.length) break

        games_html.push(htmlify(games[i]))
    }

    let container = document.getElementById(elementId)

    games_html.forEach(game_html => {
        container.innerHTML += game_html
    })
}

function addFeaturedHtml(elementId, featuredIds) {
    let games_html = []

    featuredIds.forEach(id => {
        games_html.push(htmlify(global_games.find(game => game.id === id)))
    })

    let container = document.getElementById(elementId)

    games_html.forEach(game_html => {
        container.innerHTML += game_html
    })
}