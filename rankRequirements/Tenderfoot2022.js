"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');
const TenderfootRank2016 = require('./Tenerfoot2016');

class TenderfootRank2022 extends ScoutbookRankRequirement {
    constructor() {
        super('Tenderfoot', 2022, TenderfootRank2022.buildRequirements());
    }

    static buildRequirements() {
        const requirements = TenderfootRank2016.buildRequirements();
        requirements['1c'] = new ScoutbookRequirement('1c', 'Explain how you demonstrated the Outdoor Code and Leave No Trace on campouts or outings. ');
        requirements['5a'] = new ScoutbookRequirement('5a', 'Explain the importance of the buddy system as it relates to your personal safety on outings and where you live. Use the buddy system while on a troop or patrol outing.');
        requirements['5c'] = new ScoutbookRequirement('5c', 'Explain the rules of safe and responsible hiking, both on the highway and cross-country, during the day and at night');
        return requirements;
    }
}

module.exports = TenderfootRank2022;
            