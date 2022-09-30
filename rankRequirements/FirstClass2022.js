"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const FirstClassRank2016 = require('./FirstClass2016');

class FirstClassRank2022 extends ScoutbookRankRequirement {
    constructor() {
        super('First Class', 2022, FirstClassRank2022.buildRequirements());
    }

    static buildRequirements() {
        const requirements = FirstClassRank2016.buildRequirements();

        requirements['1b'] = new ScoutbookRequirement('1b', 'Explain each of the principles of Tread Lightly! and tell how you practiced them on a campout or outing. This outing must be different from the ones used for Tenderfoot requirement 1c and Second Class requirement 1b.');
        requirements['2d'] = new ScoutbookRequirement('2d', 'Demonstrate the procedures to follow in the safe handling and storage of fresh meats, dairy products, eggs,' +
            'vegetables, and other perishable food products. Show how to properly dispose of camp garbage, cans, plastic containers, waste water and other rubbish.');

        return requirements;
    };
}
module.exports = FirstClassRank2022;
