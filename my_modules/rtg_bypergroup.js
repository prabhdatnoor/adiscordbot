/*Randomizer by Group Size*/
const shuffle = require('../my_functions/shuffle.js')
const group_size = parseInt('2');


module.exports = (array, group_size_input, sort_leftover) => {
    parseInt(group_size_input);
    shuffle(array);

    if (group_size_input !== group_size && group_size_input !== undefined) {
        return output_group(array, group_size_input, sort_leftover);
    } else {
        return output_group(array, group_size, sort_leftover);
    }

};

/*const names = ['ai', 'bruh', 'nice', 'alright', 'assume', 'wow man', 'lol'];*/


/*var shuffled_array = shuffle(names);
console.log(shuffled_array);
console.log(output_group(shuffled_array, 3));*/

function output_group(array, group_size, sort_leftover) {
    var totalppl = array.length;

    var string_out;

    //i want x ppl per group
    var no_of_groups = Math.floor(totalppl / group_size);
    var leftover = totalppl % group_size;

    var string_out = [];

    var group_nos = [];

    for (var i = 0; i < no_of_groups; i++) {
        group_nos.push(i + 1);
    }

    shuffle(group_nos);


    for (var ind = 0; ind < no_of_groups; ind++) { //create group nos
        string_out["Group " + (ind + 1)] = array.slice(group_size * ind, (group_size * (ind + 1)));
        //slice array from gs * 0 to gs*0+1 and so on. 
    }

    if (leftover !== 0 && sort_leftover === true) {
        var lef_loop_check = 0;
        for (var i = 0; i < leftover; i++) {
            lef_loop_check++;

            if (lef_loop_check > leftover) { break };
            if (i >= group_nos.length) { i = 0; }
            //i>group nos index, needs to be reset when =0
            string_out["Group " + group_nos[i]].push(array[(totalppl - leftover + lef_loop_check - 1)]);
        }
    }
    return string_out;


}