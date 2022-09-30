"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const StarRank2016 = require('./Star2016');

class StarRank2022 extends ScoutbookRankRequirement {
    constructor() {
        super('Star Scout', 2022, StarRank2022.buildRequirements());
    }

    static buildRequirements() {
        const requirements = StarRank2016.buildRequirements();

        requirements['6'] = new ScoutbookRequirement('6', 'With your parent or guardian, complete the exercises in the pamphlet How to Protect Your Children From Child Abuse: A' +
            ' Parent\'s Guide and earn the Cyber Chip Award for your grade or view the Personal Safety Awareness videos ( with your parent or ' +
            'Guardian\'s permission)');

        return requirements;
    };
}
module.exports = StarRank2022;
