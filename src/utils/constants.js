const MOVIES = "https://api.nomoreparties.co";
export default MOVIES;

function duration(minutes) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    const result = hours > 0 ? `${hours}ч ${min}м` : `${min}м`;

    return result;
}

export { MOVIES, duration };