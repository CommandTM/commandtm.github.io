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

function getTypes() {
    let types = []

    global_games.forEach(game => {
        if (!types.includes(game.type)){
            types.push(game.type)
        }
    })

    return types
}

function getFormats() {
    let types = []

    global_games.forEach(game => {
        if (!types.includes(game.format)){
            types.push(game.format)
        }
    })

    return types
}

function getConditions() {
    let types = []

    global_games.forEach(game => {
        if (!types.includes(game.condition)){
            types.push(game.condition)
        }
    })

    return types
}

function unIdify(id) {
    let words = id.split("-")

    words.forEach(word => {
        word.charAt(0).toUpperCase()
    })

    id = words.join(" ")

    return id
}