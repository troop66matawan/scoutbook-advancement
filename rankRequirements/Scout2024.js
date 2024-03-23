"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const ScoutRank2022 = require('./Scout2022');

class ScoutRank2024 extends ScoutbookRankRequirement {
    constructor() {
        super('Scout', 2024, ScoutRank2024.buildRequirements());
    }

    static buildRequirements() {
        const requirements = ScoutRank2022.buildRequirements();
        requirements['6'] = new ScoutbookRequirement('6', 'With your parent or guardian, complete the exercises in the pamphlet How to Protect Your Children From Child Abuse: A Parent’s Guide and view the Personal Safety Awareness videos ( with your parent or Guardian\'s permission)');
        return requirements;
    }
}

module.exports = ScoutRank2024;