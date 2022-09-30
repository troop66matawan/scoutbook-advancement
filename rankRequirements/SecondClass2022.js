"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const SecondClassRank2016 = require('./SecondClass2016');

class SecondClassRank2022 extends ScoutbookRankRequirement {
    constructor() {
        super('Second Class', 2022, SecondClassRank2022.buildRequirements());
    }

    static buildRequirements() {
        const requirements = SecondClassRank2016.buildRequirements();
        requirements['1b'] = new ScoutbookRequirement('1b', 'Recite the principles of Leave No Trace from memory. Explain how you follow them on all outings. ');
        requirements['2b'] = new ScoutbookRequirement('2b', 'Use a pocketknife, and a saw or axe if needed, to prepare tinder, kindling, and fuel wood for a cooking fire');
        requirements['2c'] = new ScoutbookRequirement('2c', 'Using a minimum-impact method, and at an approved outdoor location and time, use the tinder, kindling, and fuel wood from Second Class requirement 2b to demonstrate how to build a fire. Unless prohibited by local fire restrictions, light the fire. ' +
            'After allowing the flames to burn safely for at least two minutes, safely extinguish the flames with minimal impact to the fire site. ' +
            'Properly dispose of the ashes and any charred remains.');
        return requirements;
    };
}
module.exports = SecondClassRank2022;
