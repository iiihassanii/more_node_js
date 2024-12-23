let addnumbers = (...num)=>{
    let counter = 0;
        for (let i = 0; i < num.length; i++)
                counter+= num[i];
        return counter
}

module.exports = { addnumbers };
