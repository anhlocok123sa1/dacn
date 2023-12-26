export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US',{
        style : 'currency',
        currency : 'USD'
    }).format(number/100);
    return newNumber;
}

export const getUniqueValues = (data,type) => {
    let unique = data.map((item)=>item[type])
    let unique1 = [];
    if(type==='colors'){
        unique = unique.map((item)=> {
            item = item.split('"').join("");
            item = item.split('[').join("");
            item = item.split(']').join("");
            item = item.split(', ')
            unique1.push(item)
            // console.log(item);
            // if (item.includes('\"')) { 
                //     let str = JSON.parse(unique); 
                //     console.log(str)
                // }
            });
        // console.log(unique1);
        unique1 = unique1.flat()
        return ['all',...new Set(unique1)]
    }
    return ['all',...new Set(unique)]
}
