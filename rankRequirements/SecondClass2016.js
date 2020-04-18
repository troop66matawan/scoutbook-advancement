"use strict";
const ScoutbookRankRequirement = require('../rankRequirement');
const ScoutbookRequirement = require('../requirement');

class SecondClassRank2016 extends ScoutbookRankRequirement {
    constructor() {
        super('Second Class', 2016, SecondClassRank2016.buildRequirements());
    }

    static buildRequirements() {
        const requirements = {};
        requirements['1a'] = new ScoutbookRequirement('1a', 'Since joining Scouts BSA, participate in five separate troop/patrol activities, at least three of which must be held outdoors. Of the outdoor activities, at least two must include overnight camping.     These activities do not include troop or patrol meetings. On campouts, spend the night in a tent that you pitch or other structure that you help erect, such as a lean-to, snow cave, or tepee.');
        requirements['1b'] = new ScoutbookRequirement('1b', 'Explain the principles of Leave No Trace and tell how you practiced them on a campout or outing. This outing must be different from the one used for Tenderfoot requirement 1c.');
        requirements['1c'] = new ScoutbookRequirement('1c', 'On one of these campouts, select a location for your patrol site and recommend it to your patrol leader, senior patrol leader, or troop guide. Explain what factors you should consider when choosing a patrol site and where to pitch a tent.');
        requirements['2a'] = new ScoutbookRequirement('2a', 'Explain when it is appropriate to use a fire for cooking or other purposes and when it would not be appropriate to do so.');
        requirements['2b'] = new ScoutbookRequirement('2b', 'Use the tools listed in Tenderfoot requirement 3d to prepare tinder, kindling, and fuel wood for a cooking fire.');
        requirements['2c'] = new ScoutbookRequirement('2c', 'At an approved outdoor location and time, use the tinder, kindling, and fuel wood from Second Class requirement 2b to demonstrate how to build a fire. Unless prohibited by local fire restrictions, light the fire. After allowing the flames to burn safely for at least two minutes, safely extinguish the flames with minimal impact to the fire site.');
        requirements['2d'] = new ScoutbookRequirement('2d', 'Explain when it is appropriate to use a lightweight stove and when it is appropriate to use a propane stove. Set up a lightweight stove or propane stove. Light the stove, unless prohibited by local fire restrictions. Describe the safety procedures for using these types of stoves.');
        requirements['2e'] = new ScoutbookRequirement('2e', 'On one campout, plan and cook one hot breakfast or lunch, selecting foods from MyPlate or the current USDA nutritional model. Explain the importance of good nutrition. Demonstrate how to transport, store, and prepare the foods you selected.');
        requirements['2f'] = new ScoutbookRequirement('2f', 'Demonstrate tying the sheet bend knot. Describe a situation in which you would use this knot.');
        requirements['2g'] = new ScoutbookRequirement('2g', 'Demonstrate tying the bowline knot. Describe a situation in which you would use this knot.');
        requirements['3a'] = new ScoutbookRequirement('3a', 'Demonstrate how a compass works and how to orient a map. Use a map to point out and tell the meaning of five map symbols.');
        requirements['3b'] = new ScoutbookRequirement('3b', 'Using a compass and map together, take a 5-mile hike (or 10 miles bybike) approved by your adult leader and your parent or guardian.2');
        requirements['3c'] = new ScoutbookRequirement('3c', 'Describe some hazards or injuries that you might encounter on your hike and what you can do to help prevent them.');
        requirements['3d'] = new ScoutbookRequirement('3d', 'Demonstrate how to find directions during the day and at night without using a compass or an electronic device.');
        requirements['4'] = new ScoutbookRequirement('4', 'Identify or show evidence of at least 10 kinds of wild animals (such as birds, mammals, reptiles, fish, or mollusks) found in your local area or camping location. You may show evidence by tracks, signs, or photographs you have taken.');
        requirements['5a'] = new ScoutbookRequirement('5a', 'Tell what precautions must be taken for a safe swim.');
        requirements['5b'] = new ScoutbookRequirement('5b', 'Demonstrate your ability to pass the BSA beginner test: Jump feetfirst into water over your head in depth, level off and swim 25 feet on the surface, stop, turn sharply, resume swimming,     then return to your starting place.3');
        requirements['5c'] = new ScoutbookRequirement('5c', 'Demonstrate water rescue methods by reaching with your arm or leg, by reaching with a suitable object, and by throwing lines and objects.');
        requirements['5d'] = new ScoutbookRequirement('5d', 'Explain why swimming rescues should not be attempted when a reaching or throwing rescue is possible. Explain why and how a rescue swimmer should avoid contact with the victim.');
        requirements['6a'] = new ScoutbookRequirement('6a', 'Demonstrate first aid for the following:' +
            '• Object in the eye\n' +
            '• Bite of a warm-blooded animal\n' +
            '• Puncture wounds from a splinter, nail, and fishhook\n' +
            '• Serious burns (partial thickness, or second-degree)\n' +
            '• Heat exhaustion\n' +
            '• Shock\n' +
            '• Heatstroke, dehydration, hypothermia, and hyperventilation\n');
        requirements['6b'] = new ScoutbookRequirement('6b', 'Show what to do for “hurry” cases of stopped breathing, stroke, severe bleeding, and ingested poisoning.');
        requirements['6c'] = new ScoutbookRequirement('6c', 'Tell what you can do while on a campout or hike to prevent orreduce the occurrence of the injuries listed in Second Class requirements 6a and 6b.');
        requirements['6d'] = new ScoutbookRequirement('6d', 'Explain what to do in case of accidents that require emergency response in the home and backcountry. Explain what constitutes an emergency and what information you will need to provide to a responder. ');
        requirements['6e'] = new ScoutbookRequirement('6e', 'Tell how you should respond if you come upon the scene of a vehicular accident.');
        requirements['7a'] = new ScoutbookRequirement('7a', 'After completing Tenderfoot requirement 6c, be physically active at least 30 minutes each day for five days a week for four weeks.  Keep track of your activities.');
        requirements['7b'] = new ScoutbookRequirement('7b', 'Share your challenges and successes in completing Second Class requirement 7a. Set a goal for continuing to include physical activity as part of your daily life and develop a plan for doing so. 7c. Participate in a school, community, or troop program on the dangers of using drugs, alcohol, and tobacco and other practices that could be harmful to your health. Discuss your participation in the program with your family, and explain the dangers of substance addictions. Report to your Scoutmaster or other adult leader in your troop about which parts of the Scout Oath and Scout Law relate to what you learned.');
        requirements['8a'] = new ScoutbookRequirement('8a', 'Participate in a flag ceremony for your school, religious institution, chartered organization, community, or Scouting activity.');
        requirements['8b'] = new ScoutbookRequirement('8b', 'Explain what respect is due the flag of the United States.');
        requirements['8c'] = new ScoutbookRequirement('8c', 'With your parents or guardian, decide on an amount of money that you would like to earn, based on the cost of a specific item you would like to purchase. Develop a written plan to earn the amount agreed upon and follow that plan; it is acceptable to make changes to your plan along the way. Discuss any changes made to your original plan and whether you met your goal.');
        requirements['8d'] = new ScoutbookRequirement('8d', 'At a minimum of three locations, compare the cost of the item for which you are saving to determine the best place to purchase it. After completing Second Class requirement 8c, decide if you will use the amount that you earned as originally intended, save all or part of it, or use it for another purpose.');
        requirements['8e'] = new ScoutbookRequirement('8e', 'Participate in two hours of service through one or more service projects approved by your Scoutmaster. Tell how your service to others relates to the Scout Oath.');
        requirements['9a'] = new ScoutbookRequirement('9a', 'Explain the three R’s of personal safety and protection.');
        requirements['9b'] = new ScoutbookRequirement('9b', 'Describe bullying; tell what the appropriate response is to someone who is bullying you or another person.');
        requirements['10'] = new ScoutbookRequirement('10', 'Demonstrate Scout spirit by living the Scout Oath and Scout Law. Tell how you have done your duty to God and how you have lived four different points of the Scout Law (not to include those used for Tenderfoot requirement 9) in your everyday life.');
        requirements['11'] = new ScoutbookRequirement('11', 'While working toward the Second Class rank, and after completing Tenderfoot requirement 10, participate in a Scoutmaster conference.');
        requirements['12'] = new ScoutbookRequirement('12', 'Successfully complete your board of review for the Second Class rank.');
        return requirements;
    };
}
module.exports = SecondClassRank2016;
