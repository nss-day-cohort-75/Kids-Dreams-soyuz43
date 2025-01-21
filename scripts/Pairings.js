import { getChildren, getCelebrities } from "./database.js";


const findCelebrityMatch = (kid, celebrities) => {
    for (const star of celebrities) {
        if (kid.celebrityId === star.id) {
            return star;
        }
    }
    return null;
};

export const Pairings = () => {
    const kids = getChildren();
    const celebrities = getCelebrities();
    let html = "<ul>";

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities);
        if (kidsStar) {
            html += `<li>
                        ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
                    </li>`;
        } else {
            html += `<li>
                        ${kid.name} doesn't have a matching star.
                    </li>`;
        }
    }

    html += "</ul>";

    return html;
};
