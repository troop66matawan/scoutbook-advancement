"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const ScoutRank2016 = require('./Scout2016');

class ScoutRank2022 extends ScoutbookRankRequirement {
    constructor() {
        super('Scout', 2022, ScoutRank2022.buildRequirements());
    }

    static buildRequirements() {
        const requirements = ScoutRank2016.buildRequirements();
        requirements['1a'] = new ScoutbookRequirement('1a', 'Repeat from memory the Scout Oath, Scout Law, Scout motto, and Scout slogan. In your own words, explain their meaning. ');
        requirements['5'] = new ScoutbookRequirement('5', 'Tell what you need to know about using a pocketknife safely and responsibly.');
        requirements['6'] = new ScoutbookRequirement('6', 'With your parent or guardian, complete the exercises in the pamphlet How to Protect Your Children From Child Abuse: A Parent’s Guide and earn the Cyber Chip Award for your grade  or view the Personal Safety Awareness videos ( with your parent or Guardian\'s permission)');
        return requirements;
    }
}

module.exports = ScoutRank2022;