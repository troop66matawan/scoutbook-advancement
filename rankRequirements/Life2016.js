"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class LifeRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('Life Scout', 2016, LifeRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};
        requirements['1'] = new ScoutbookRequirement('1', 'Be active in your troop for at least six months as a Star Scout.');
        requirements['2'] = new ScoutbookRequirement('2', 'As a Star Scout, demonstrate Scout spirit by living the Scout Oath and Scout Law. Tell how you have done your duty to God and how you have lived the Scout Oath and Scout Law in your everyday life.');
        requirements['3'] = new ScoutbookRequirement('3', 'Earn five more merit badges (so that you have 11 in all), including any three additional badges from the required list for Eagle. You may choose any of the 17 merit badges on the required list for Eagle to fulfill this requirement. See Eagle rank requirement 3 for this list.');
        requirements['4'] = new ScoutbookRequirement('4', 'While a Star Scout, participate in six hours of service through one or more service projects approved by your Scoutmaster. At least three hours of this service must be conservation-related.');
        requirements['5'] = new ScoutbookRequirement('5', 'While a Star Scout, serve actively in your troop for six months in one or more of the following troop positions of responsibility (or carry out a Scoutmaster-approved leadership project to help the troop). Patrol leader, assistant senior patrol leader, senior patrol leader, troop guide, Order of the Arrow troop representative, den chief, scribe, librarian, historian, quartermaster, bugler,    junior assistant Scoutmaster, chaplain aide, instructor, webmaster, or outdoor ethics guide.9');
        requirements['6'] = new ScoutbookRequirement('6', 'While a Star Scout, use the Teaching EDGE method to teach another Scout (preferably younger than you) the skills from ONE of the following choices, so that the Scout is prepared to pass those requirements to their Scoutmaster’s satisfaction.' +
            'a. Tenderfoot 4a and 4b (first aid)\n' +
            'b. Second Class 2b, 2c, and 2d (cooking/tools)\n' +
            'c. Second Class 3a and 3d (navigation)\n' +
            'd. First Class 3a, 3b, 3c, and 3d (tools)\n' +
            'e. First Class 4a and 4b (navigation)\n' +
            'f. Second Class 6a and 6b (first aid)\n' +
            'g. First Class 7a and 7b (first aid)\n' +
            'h. Three requirements from one of the required Eagle merit badges, as approved by your Scoutmaster\n');
        requirements['7'] = new ScoutbookRequirement('7', 'While a Star Scout, participate in a Scoutmaster conference.');
        requirements['8'] = new ScoutbookRequirement('8', 'Successfully complete your board of review for the Life rank.');

        return requirements;
    };
}
module.exports = LifeRank2016;

