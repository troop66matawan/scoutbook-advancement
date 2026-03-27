"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const EagleRank2022 = require('./Eagle2022');

class EagleRank2026 extends ScoutbookRankRequirement {
    constructor() {
        super('Eagle Scout', 2026, EagleRank2026.buildRequirements());
    }

    static buildRequirements() {
        const requirements = EagleRank2022.buildRequirements();

        requirements['3'] = new ScoutbookRequirement('3', 'Earn a total of 21 merit badges (10 more than required for the Life rank), including these 13 merit badges: (a) First Aid, (b) Citizenship in the Community, (c) Citizenship in the Nation, (d) Citizenship in the World, (e) Communication, (f) Cooking, (g) Personal Fitness, (h) Emergency Preparedness OR Lifesaving, (i) Environmental Science OR Sustainability, (j) Personal Management, (k) Swimming OR Hiking OR Cycling, (l) Camping, and (m) Family Life.  You must choose only one of the merit badges listed in categories h, i, and k. Any additional merit badge(s) earned in those categories may be counted as one of your eight optional merit badges used to make your total of 21.');

        return requirements;
    };
}
module.exports = EagleRank2016;
