const initState = {
    games = [],
    popular = [],
    upcoming = []
}


const gamesReducer = (state=initState , action) => {
    switch (action.type){
        case "FETCH_GAMES":
            return {...state}
        default:
            return {...state}
    }

}