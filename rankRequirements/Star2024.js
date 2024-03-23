"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const StarRank2022 = require('./Star2022');

class StarRank2024 extends ScoutbookRankRequirement {
    constructor() {
        super('Star Scout', 2024, StarRank2024.buildRequirements());
    }

    static buildRequirements() {
        const requirements = StarRank2022.buildRequirements();

        requirements['6'] = new ScoutbookRequirement('6', 'With your parent or guardian, complete the exercises in the pamphlet How to Protect Your Children From Child Abuse: A' +
            ' Parent\'s Guide and view the Personal Safety Awareness videos ( with your parent or ' +
            'Guardian\'s permission)');

        return requirements;
    };
}
module.exports = StarRank2024;
