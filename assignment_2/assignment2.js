/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
var (i = 0; i < 101; i++) {
    console.log(i)
}
console.log ('loop is done')



/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:




#
##
###
####
#####
######
#######
*/

var hash = "#";
console.log(hash);
for (num = 0; num < 6; num++) {
  hash += "#";
  console.log(hash);
}