import { Star } from "../actors/Star.js";
export class StarFactory {
    createActors(count) {
        const actors = [];
        const usedNames = new Set();
        for (let i = 0; i < count; i++) {
            const name = this.getRandomUniqueName(usedNames);
            const star = new Star(`${name}`, this.getRandomPosition(), this.getRandomPosition());
            // We can make the star inform the rect when it reaches a certain position
            actors.push(star);
        }
        return actors;
    }
    getRandomUniqueName(usedNames) {
        const availableNames = StarFactory.STAR_NAMES.filter((name) => !usedNames.has(name));
        if (availableNames.length === 0) {
            // If all names are used, generate a generic name
            return `Star-${Math.floor(Math.random() * 10000)}`;
        }
        const randomName = availableNames[Math.floor(Math.random() * availableNames.length)];
        usedNames.add(randomName);
        return randomName;
    }
    getRandomPosition() {
        // Generate random position between 400 and 600
        return Math.floor(Math.random() * (600 - 400 + 1)) + 400;
    }
}
StarFactory.STAR_NAMES = [
    "Sirius",
    "Polaris",
    "Betelgeuse",
    "Rigel",
    "Vega",
    "Altair",
    "Deneb",
    "Arcturus",
    "Antares",
    "Aldebaran",
    "Spica",
    "Pollux",
    "Regulus",
    "Castor",
    "Canopus",
];
