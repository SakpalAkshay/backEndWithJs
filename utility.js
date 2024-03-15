//functions to get used as Utility in our app



function findIndexAt(arr, id){
    // if objects id in arr is matched with passed id we return the index of the object thats been matched
    for(let i = 0;i<arr.length;i++){
        if (arr[i].id == id ) return i;  
    }

    return -1;

}

// retruns a new array at with updated items from previous array
function removeAtIndex(arr, index){
    newArray = [];
    for(let i =0;i<arr.length;i++){
        if (i!==index) newArray.push[arr[i]];

    }
    return newArray;
}

// Export each function individually
module.exports.findIndexAt = findIndexAt;
module.exports.removeAtIndex = removeAtIndex;

