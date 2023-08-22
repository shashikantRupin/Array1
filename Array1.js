//js array is dynamicand also we can put different types 
//of data in same array
//create a array
var arr=[1,2,3,"Raaz",true];

for(var i=0; i<arr.length; i++)
{
      console.log(arr[i]);
}

var arr1=[];
arr1.push("ranbir");
arr1.push(123);
arr1.push("kapoor");
console.log(arr1);

//to assign all the val present in the array to other var

var  newvar="";
for(var i=0; i<arr1.length; i++)
{
      newvar+=arr1[i]+" ";
}
console.log(newvar+" ");

//array is mutable means its val can be changed
arr1[0]="raaz";
console.log(arr1);
console.log(typeof arr1); //array is typeof object i.e obj type
