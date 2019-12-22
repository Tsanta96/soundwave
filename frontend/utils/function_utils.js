//grabs in object of object nested in object nested in array
export const destructured = array => {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let temp = Object.keys(array[i]).join("")
        let val = array[i][temp];
        newArr.push(val);
    }
}

export default destructured;