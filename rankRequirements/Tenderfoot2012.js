"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class TenderfootRank2012 extends ScoutbookRankRequirement {
    constructor() {
        super('Tenderfoot', 2012, TenderfootRank2012.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};

        requirements['1'] = new ScoutbookRequirement('1', 'Present yourself to your leader, properly dressed, before going on an overnight camping trip. Show the camping gear you will use. Show the right way to pack and carry it.');
        requirements['2'] = new ScoutbookRequirement('2', 'Spend at least one night on a patrol or troop campout. Sleep in a tent you have helped pitch.');
        requirements['3'] = new ScoutbookRequirement('3', 'On the campout, assist in preparing and cooking one of your patrol\'s meals. Tell why it is important for each patrol member to share in meal preparation and cleanup, and explain the importance of eating together.');
        requirements['4a'] = new ScoutbookRequirement('4a', 'Demonstrate how to whip and fuse the ends of a rope.');
        requirements['4b'] = new ScoutbookRequirement('4b', 'Demonstrate that you know how to tie the following knots and tell what their uses are: twohalf hitches and the taut-line hitch.');
        requirements['4c'] = new ScoutbookRequirement('4c', 'Using the EDGE method teach another person how to tie the square knot.');
        requirements['5'] = new ScoutbookRequirement('5', 'Explain the rules of safe hiking, both on the highway and cross-country, during the day and at night. Explain what to do if you are lost.');
        requirements['6'] = new ScoutbookRequirement('6', 'Demonstrate how to display, raise, lower, and fold the American flag.');
        requirements['7'] = new ScoutbookRequirement('7', 'Repeat from memory and explain in your own words the Scout Oath, Law, motto, and slogan.');
        requirements['8'] = new ScoutbookRequirement('8', 'Know your patrol name, give the patrol yell, and describe your patrol flag.');
        requirements['9'] = new ScoutbookRequirement('9', 'Explain the importance of the buddy system as it relates to your personal safety on outings and in your neighborhood. Describe what a bully is and how you should respond to one.');
        requirements['10a'] = new ScoutbookRequirement('10a', 'Record your best in the following tests:' +
            'Push-ups\n' +
            'Pull-ups\n' +
            'Sit-ups\n' +
            'Standing long jump\n' +
            '1/4 mile walk/run');
        requirements['10b'] = new ScoutbookRequirement('10b', 'Show improvement in the activities listed in requirement 10a after practicing for 30 days.');
        requirements['11'] = new ScoutbookRequirement('11', 'Identify local poisonous plants; tell how to treat for exposure to them.');
        requirements['12a'] = new ScoutbookRequirement('12a', 'Demonstrate how to care for someone who is choking.');
        requirements['12b'] = new ScoutbookRequirement('12b', 'Show first aid for the following:' +
            'Simple cuts and scrapes\n' +
            'Blisters on the hand and foot\n' +
            'Minor (thermal/heat) burns or scalds (superficial, or first degree)\n' +
            'Bites and stings of insects and ticks\n' +
            'Venomous snakebite\n' +
            'Nosebleed\n' +
            'Frostbite and sunburn');
        requirements['13'] = new ScoutbookRequirement('13', 'Demonstrate scout spirit by living the Scout Oath (Promise) and Scout Law in your everyday life. Discuss four specific examples of how you have lived the points of the Scout Law in your daily life.');
        requirements['14'] = new ScoutbookRequirement('14', 'Participate in a Scoutmaster conference.');
        requirements['15'] = new ScoutbookRequirement('15', 'Successfully complete your board of review for the Tenderfoot rank.');
        return requirements;
    }
}

module.exports = TenderfootRank2012;
