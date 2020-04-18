"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class LifeRank2013 extends ScoutbookRankRequirement {
    constructor() {
        super('Life Scout', 2013, LifeRank2013.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};
        requirements['1'] = new ScoutbookRequirement('1', 'Be active in your unit (and patrol if you are in one) for at least 6 months as a Star Scout.');
        requirements['2'] = new ScoutbookRequirement('2', 'Demonstrate Scout spirit by living the Scout Oath (Promise) and Scout Law in your everyday life.');
        requirements['3'] = new ScoutbookRequirement('3', 'Earn 5 more merit badges (so that you have 11 in all), including any 3 more from the required list for Eagle.');
        requirements['4'] = new ScoutbookRequirement('4', 'While a Star Scout, take part in service project(s) totaling at least 6 hours of work. These project(s) must be approved by your Scoutmaster.');
        requirements['5'] = new ScoutbookRequirement('5', 'While a Star Scout, serve actively in your unit for 6 months in one or more of the positions of responsibility*** listed in requirement 5 for Star Scout (or carry out a unit leader-assigned leadership project to help your unit):');
        requirements['6'] = new ScoutbookRequirement('6', 'While a Star Scout, use the EDGE method to teach another Scout (preferably younger than you) the skills from ONE of the following seven choices, so that he is prepared to pass those requirements to his unit leader\'s satisfaction.' +
            'a. Second Class - 7a and 7c (first aid)\n' +
            'b. Second Class - 1a (outdoor skills)\n' +
            'c. Second Class - 3c, 3d, 3e, and 3f (cooking/camping)\n' +
            'd. First Class - 8a, 8b, 8c, and 8d (first aid)\n' +
            'e. First Class - 1, 7a, and 7b (outdoor skills)\n' +
            'f. First Class - 4a, 4b, and 4d (cooking/camping)\n' +
            'g. Three requirements from one of the required Eagle merit badges, as approved by your Scoutmaster\n');
        requirements['7'] = new ScoutbookRequirement('7', 'Take part in a Scoutmaster conference');
        requirements['8'] = new ScoutbookRequirement('8', 'Successfully complete your board of review.');

        return requirements;
    };
}
module.exports = LifeRank2013;

