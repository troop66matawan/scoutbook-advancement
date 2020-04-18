"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class FirstClassRank2013 extends ScoutbookRankRequirement {
    constructor() {
        super('First Class', 2013, FirstClassRank2013.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};

        requirements['1'] = new ScoutbookRequirement('1', 'Demonstrate how to find directions during the day and at night without using a compass.');
        requirements['2'] = new ScoutbookRequirement('2', 'Using a map and compass, complete an orienteering course that covers at least one mile and requires measuring the height and/or width of designated items (tree, tower, canyon, ditch, etc.)');
        requirements['3'] = new ScoutbookRequirement('3', 'Since joining, have participated in ten separate troop/patrol activities (other than troop/patrol meetings), three of which included camping overnight. Demonstrate the principles of Leave No Trace on these outings.');
        requirements['4a'] = new ScoutbookRequirement('4a', 'Help plan a patrol menu for one campout that includes at least one breakfast, one lunch, and one dinner and that requires cooking at least two of the meals. Tell how the menu includes the foods from the MyPlate food guide or the current USDA nutrition model and meets nutritional needs.');
        requirements['4b'] = new ScoutbookRequirement('4b', 'Using the menu planned in requirement 4a, make a list showing the cost and food amounts needed to feed three or more boys and secure the ingredients.');
        requirements['4c'] = new ScoutbookRequirement('4c', 'Tell which pans, utensils, and other gear will be needed to cook and serve these meals');
        requirements['4d'] = new ScoutbookRequirement('4d', 'Explain the procedures to follow in the safe handling and storage of fresh meats, dairy products, eggs, vegetables, and other perishable food products. Tell how to properly dispose of camp garbage, cans, plastic containers, and other rubbish.');
        requirements['4e'] = new ScoutbookRequirement('4e', 'On one campout, serve as your patrol\'s cook. Supervise your assistant(s) in using a stove or building a cooking fire. Prepare the breakfast, lunch, and dinner planned in requirement 4a. Lead your patrol in saying grace at the meals and supervise cleanup.');
        requirements['5'] = new ScoutbookRequirement('5', 'Visit and discuss with a selected individual approved by your leader (elected official, judge, attorney, civil servant, principal, teacher) your constitutional rights and obligations as a U.S. citizen.');
        requirements['6'] = new ScoutbookRequirement('6', 'Identify or show evidence of at least ten kinds of native plants found in your community.');
        requirements['7a'] = new ScoutbookRequirement('7a', 'Discuss when you should and should not use lashings. Then demonstrate tying the timberhitch and clove hitch and their use in square, shear, and diagonal lashings by joining two or more poles or staves together.');
        requirements['7b'] = new ScoutbookRequirement('7b', 'Use lashing to make a useful camp gadget.');
        requirements['8a'] = new ScoutbookRequirement('8a', 'Demonstrate tying the bowline knot and describe several ways it can be used.');
        requirements['8b'] = new ScoutbookRequirement('8b', 'Demonstrate bandages for a sprained ankle. and for injuries on the head, the upper arm, and the collarbone.');
        requirements['8c'] = new ScoutbookRequirement('8c', 'Show how to transport by yourself, and with one other person, a person:from a smoke-filled room with a sprained ankle, for at least 25 yards.');
        requirements['8d'] = new ScoutbookRequirement('8d', 'Tell the five most common signals of a heart attack. Explain the steps (procedures) in cardiopulmonary resuscitation (CPR).');
        requirements['9a'] = new ScoutbookRequirement('9a', 'Tell what precautions must be taken for a safe trip afloat.');
        requirements['9b'] = new ScoutbookRequirement('9b', 'Successfully complete the BSA swimmer test.');
        requirements['9c'] = new ScoutbookRequirement('9c', 'With a helper and a practice victim, show a line rescue both as tender and rescuer. (The practice victim should be approximately 30 feet from shore in deep water.)');
        requirements['10'] = new ScoutbookRequirement('10', 'Tell someone who is eligible to join Boy Scouts, or an inactive Boy Scout, about your troop\'s activities. Invite him to a troop outing, activity, service project or meeting. Tell him how to join, or encourage the inactive Boy Scout to become active.');
        requirements['11'] = new ScoutbookRequirement('11', 'Describe the three things you should avoid doing related to use of the Internet. Describe a cyberbully and how you should respond to one.');
        requirements['12'] = new ScoutbookRequirement('12', 'Demonstrate scout spirit by living the Scout Oath (Promise) and Scout Law in your everyday life. Discuss four specific examples (different from those used for Tenderfoot requirement 13 and Second Class requirement 11) of how you have lived the points of the Scout Law in your daily life.');
        requirements['13'] = new ScoutbookRequirement('13', 'Participate in a Scoutmaster conference.');
        requirements['14'] = new ScoutbookRequirement('14', 'Successfully complete your board of review for the First Class rank.');

        return requirements;
    };
}
module.exports = FirstClassRank2013;
