"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class ScoutRank2012 extends ScoutbookRankRequirement {
    constructor() {
        super('Scout', 2012, ScoutRank2012.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};

        requirements['1'] = new ScoutbookRequirement('1', 'Meet age requirements: Be a boy who is 11 years old, or one who has completed the fifth grade or earned the Arrow of Light Award and is at least 10 years old, but is not yet 18 years old.');
        requirements['2'] = new ScoutbookRequirement('2', 'Complete a Boy Scout application and health history signed by your parent or guardian.');
        requirements['3'] = new ScoutbookRequirement('3', 'Find a Scout troop near your home. (To find a troop, contact your local Boy Scout Council. The Council name, address and phone number can be found on BSA\'s Council Locator Page.)');
        requirements['4'] = new ScoutbookRequirement('4', 'Repeat the Pledge of Allegiance.');
        requirements['5'] = new ScoutbookRequirement('5', 'Demonstrate the Scout sign, salute, and handshake.');
        requirements['6'] = new ScoutbookRequirement('6', 'Demonstrate tying the square knot (a joining knot).');
        requirements['7'] = new ScoutbookRequirement('7', 'Understand and agree to live by the Scout Oath or Promise, Scout Law, motto, and slogan, and the Outdoor Code.');
        requirements['8'] = new ScoutbookRequirement('8', 'Describe the Scout badge.');
        requirements['9'] = new ScoutbookRequirement('9', 'Complete the Pamphlet Exercises. With your parent or guardian, complete the exercises in the pamphlet "How to Protect Your Children from Child Abuse: A Parent\'s Guide".');
        requirements['10'] = new ScoutbookRequirement('10', 'Participate in a Scoutmaster conference. Turn in your Boy Scout application and health history form signed by your parent or guardian, then participate in a Scoutmaster conference.');

        return requirements;
    }
}

module.exports = ScoutRank2012;
