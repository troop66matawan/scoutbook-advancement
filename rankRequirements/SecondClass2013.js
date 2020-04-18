"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class SecondClassRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('Second Class', 2016, SecondClassRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};
        requirements['1a'] = new ScoutbookRequirement('1a', 'Demonstrate how a compass works and how to orient a map. Explain what map symbols mean.');
        requirements['1b'] = new ScoutbookRequirement('1b', 'Using a compass and a map together, take a 5-mile hike (or 10 miles by bike) approved by your adult leader and your parent or guardian.');
        requirements['2'] = new ScoutbookRequirement('2', 'Discuss the principles of "Leave No Trace".');
        requirements['3a'] = new ScoutbookRequirement('3a', 'Since joining, have participated in five separate troop/patrol activities (other than troop/patrol meetings), two of which included camping overnight.');
        requirements['3b'] = new ScoutbookRequirement('3b', 'On one of these campouts, select your patrol site and sleep in a tent that you pitched. Explain what factors you should consider when choosing a patrol site and where to pitch a tent. ');
        requirements['3c'] = new ScoutbookRequirement('3c', 'Demonstrate proper care, sharpening, and use of the knife, saw, and ax, and describe when they should be used. ');
        requirements['3d'] = new ScoutbookRequirement('3d', 'Use the tools listed in requirement 3c to prepare tinder, kindling, and fuel for a cooking fire.');
        requirements['3e'] = new ScoutbookRequirement('3e', 'Explain when it is appropriate to use a cooking fire. At an approved outdoor location and at an approved time, and using the tinder, kindling, and fuel wood from requirement 3d, demonstrate how to build a fire; light the fire, unless prohibited by local fire restrictions. After allowing the flames to burn safely for at least two minutes, safely extinguish the flames with minimal impact to the fire site. ');
        requirements['3f'] = new ScoutbookRequirement('3f', 'Explain when it is appropriate to use a lightweight stove or propane stove. Set up a lightweight stove or propane stove; light the stove, unless prohibited by local fire restrictions. Describe the safety procedures for using these types of stoves. ');
        requirements['3g'] = new ScoutbookRequirement('3g', 'On one campout, plan and cook one hot breakfast or lunch, selecting foods from the MyPlate food guide or the current USDA nutrition model. Explain the importance of good nutrition. Tell how to transport, store, and prepare the foods you selected. ');
        requirements['4'] = new ScoutbookRequirement('4', 'Participate in a flag ceremony for your school, religious institution, chartered organization, community, or troop activity. Explain to your leader what respect is due the flag of the United States.');
        requirements['5'] = new ScoutbookRequirement('5', 'Participate in approved (minimum of one hour) service project(s).');
        requirements['6'] = new ScoutbookRequirement('6', 'Identify or show evidence of at least ten kinds of wild animals (birds, mammals, reptiles, fish, mollusks) found in your community.');
        requirements['7a'] = new ScoutbookRequirement('7a', 'Show what to do for "hurry" cases of stopped breathing, serious bleeding, and ingested poisoning. ');
        requirements['7b'] = new ScoutbookRequirement('7b', 'Prepare a personal first aid kit to take with you on a hike.');
        requirements['7c'] = new ScoutbookRequirement('7c', 'Demonstrate first aid for the following: Object in the eye Bite of a suspected rabid animal Puncture wounds from a splinter, nail, and fishhook Serious burns (partial thickness, or second degree) Heat exhaustion Shock Heatstroke, dehydration, hypothermia, and hyperventilation');
        requirements['8a'] = new ScoutbookRequirement('8a', 'Tell what precautions must be taken for a safe swim. ');
        requirements['8b'] = new ScoutbookRequirement('8b', 'Demonstrate your ability to jump feetfirst into water over your head in depth, level off and swim 25 feet on the surface, stop, turn sharply, resume swimming, then return to your starting place.');
        requirements['8c'] = new ScoutbookRequirement('8c', 'Demonstrate water rescue methods by reaching with your arm or leg, by reaching with a suitable object, and by throwing lines and objects. Explain why swimming rescues should not be attempted when a reaching or throwing rescue is possible, and explain why and how a rescue swimmer should avoid contact with the victim.');
        requirements['9a'] = new ScoutbookRequirement('9a', 'Participate in a school, community, or troop program on the dangers of using drugs, alcohol, and tobacco, and other practices that could be harmful to your health. Discuss your participation in the program with your family, and explain the dangers of substance addictions.');
        requirements['9b'] = new ScoutbookRequirement('9b', 'Explain the three R\'s of personal safety and protection.');
        requirements['10'] = new ScoutbookRequirement('10', 'Earn an amount of money agreed upon by you and your parent, then save at least 50 percent of that money.');
        requirements['11'] = new ScoutbookRequirement('11', 'Demonstrate scout spirit by living the Scout Oath (Promise) and Scout Law in your everyday life. Discuss four specific examples (different from those used for Tenderfoot requirement 13) of how you have lived the points of the Scout Law in your daily life.');
        requirements['12'] = new ScoutbookRequirement('12', 'Participate in a Scoutmaster conference.');
        requirements['13'] = new ScoutbookRequirement('13', 'Successfully complete your board of review for the Second Class rank.');
        return requirements;
    };
}
module.exports = SecondClassRank2016;


    