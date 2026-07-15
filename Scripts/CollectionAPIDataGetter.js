const baseUrl = "https://collection.commandtm.catsmp.gay"

var global_games = []

async function getGames() {
    try {
        const response = await fetch(baseUrl + "/games.json")
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        global_games = await response.json()
        global_games.forEach(game => {
            game.date_added = new Date(game.date_added)
        })
    } catch (error) {
        console.error(error)
    }
}

async function getFeatured() {
    try {
        const response = await fetch(baseUrl + "/featured.json")
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error(error)
    }
}