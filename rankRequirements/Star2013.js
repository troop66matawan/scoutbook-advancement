"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class StarRank2013 extends ScoutbookRankRequirement {
    constructor() {
        super('Star Scout', 2013, StarRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};

        requirements['1'] = new ScoutbookRequirement('1', 'Be active in your unit(and patrol if you are in one) for at least four months as a First Class Scout.');
        requirements['2'] = new ScoutbookRequirement('2', 'Demonstrate scout spirit by living the Scout Oath (Promise) and Scout Law in your everyday life.');
        requirements['3'] = new ScoutbookRequirement('3', 'Earn six merit badges, including any four from the required list for Eagle.');
        requirements['4'] = new ScoutbookRequirement('4', 'While a First Class Scout, take part in service project(s) totaling at least 6 hours of work. These projects must be approved by your Scoutmaster.');
        requirements['5'] = new ScoutbookRequirement('5', 'While a First Class Scout, serve actively in your unit for four months in one or more of the following positions of responsibility*** (or carry out a unit leader-assigned leadership project to help your unit): Patrol leader, assistant senior patrol leader, senior patrol leader, troop guide, Order of the Arrow troop representative, den chief, scribe, librarian, historian, quartermaster, bugler,     junior assistant Scoutmaster, chaplain aide, instructor, webmaster, or Leave No Trace trainer.');
        requirements['6'] = new ScoutbookRequirement('6', 'Take part in a Scoutmaster conference');
        requirements['8'] = new ScoutbookRequirement('7', 'Successfully complete your board of review.   ');

        return requirements;
    };
}
module.exports = StarRank2013;
