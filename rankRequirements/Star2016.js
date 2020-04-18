"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class StarRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('Star Scout', 2016, StarRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};

        requirements['1'] = new ScoutbookRequirement('1', 'Be active in your troop for at least four months as a First Class Scout.');
        requirements['2'] = new ScoutbookRequirement('2', 'As a First Class Scout, demonstrate Scout spirit by living the Scout Oath and Scout Law. Tell how you have done your duty to God and how you have lived the Scout Oath and Scout Law in your everyday life.');
        requirements['3'] = new ScoutbookRequirement('3', 'Earn six merit badges, including any four from the required list for Eagle. You may choose any of the 17 merit badges on the required list for Eagle to fulfill this requirement. See Eagle rankrequirement 3 for this list.');
        requirements['4'] = new ScoutbookRequirement('4', 'While a First Class Scout, participate in six hours of service through one or more service projects approved by your Scoutmaster.');
        requirements['5'] = new ScoutbookRequirement('5', 'While a First Class Scout, serve actively in your troop for four months in one or more of the following positions of responsibility (or carry out a Scoutmaster-approved leadership project to help the troop): Patrol leader, assistant senior patrol leader, senior patrol leader, troop guide, Order of the Arrow troop representative, den chief, scribe, librarian, historian, quartermaster, bugler,     junior assistant Scoutmaster, chaplain aide, instructor, webmaster, or outdoor ethics guide.');
        requirements['6'] = new ScoutbookRequirement('6', 'With your parent or guardian, complete the exercises in the pamphlet How to Protect Your Children From Child Abuse: A Parent’s Guide and earn the Cyber Chip award for your grade.');
        requirements['7'] = new ScoutbookRequirement('7', 'While a First Class Scout, participate in a Scoutmaster conference.');
        requirements['8'] = new ScoutbookRequirement('8', 'Successfully complete your board of review for the Star rank.   ');

        return requirements;
    };
}
module.exports = StarRank2016;
