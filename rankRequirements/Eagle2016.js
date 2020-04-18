"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class EagleRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('Eagle Scout', 2016, EagleRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};

        requirements['1'] = new ScoutbookRequirement('1', 'Be active in your troop for at least six months as a Life Scout.');
        requirements['2'] = new ScoutbookRequirement('2', 'As a Life Scout, demonstrate Scout Spirit by living the Scout Oath and Scout Law. Tell how you have done your duty to God, how you have lived the Scout Oath and Scout Law in your everyday life, and how your understanding of the Scout Oath and Scout Law will guide your life in the future. List on your Eagle Scout Rank Application the names of individuals who know you personally and would be willing to provide a recommendation on your behalf, including parents/guardians, religious (if not affiliated with an organized religion, then the parent or guardian provides this reference), educational, employer (if employed), and two other references.');
        requirements['3'] = new ScoutbookRequirement('3', 'Earn a total of 21 merit badges (10 more than required for the Life rank), including these 13 merit badges: (a) First Aid, (b) Citizenship in the Community, (c) Citizenship in the Nation, (d) Citizenship in the World, (e) Communication, (f) Cooking, (g) Personal Fitness, (h) Emergency PreparednessOR Lifesaving, (i) Environmental Science OR Sustainability, (j) Personal Management, (k) Swimming OR Hiking OR Cycling, (l) Camping, and (m) Family Life.You must choose only one of the merit badges listed in categories h, i, and k. Any additional merit badge(s) earned in those categories may be counted as one of your eight optional merit badges used to make your total of 21.');
        requirements['4'] = new ScoutbookRequirement('4', 'While a Life Scout, serve actively in your troop for six months in one or more of the following positions of responsibility. Patrol leader, assistant senior patrol leader, senior patrol leader, troop guide, Order of the Arrow troop representative, den chief, scribe, librarian, historian, quartermaster, junior assistant Scoutmaster, chaplain aide, instructor, webmaster, or outdoor ethics guide.');
        requirements['5'] = new ScoutbookRequirement('5', 'While a Life Scout, plan, develop, and give leadership to others in a service project helpful to any religious institution, any school, or your community. (The project must benefit an organization other than the Boy Scouts of America.) A project proposal must be approved by the organization benefiting from the effort, your Scoutmaster and unit committee, and the council or district before you start. You must use the Eagle Scout Service Project Workbook, BSA publication No. 512-927, in meeting this requirement. (To learn more about the Eagle Scout service project, see the Guide to Advancement, topics 9.0.2.0 through 9.0.2.16.)');
        requirements['6'] = new ScoutbookRequirement('6', 'While a Life Scout, participate in a Scoutmaster conference.');
        requirements['7'] = new ScoutbookRequirement('7', 'Successfully complete your board of review for the Eagle Scout rank. (This requirement may be met after age 18, in accordance with Guide to Advancement topic 8.0.3.1.13). ');

        return requirements;
    };
}
module.exports = EagleRank2016;
