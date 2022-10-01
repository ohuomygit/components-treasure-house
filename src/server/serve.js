
let data = [
    {
        date: '2001-01-21',
        name: '宋楚杰',
        address: '坪山村霸杰'
    },
    {
        date: '2001-11-23',
        name: '儿童天',
        address: '南山马糊涂'
    }
]

export const getData = () => {
    return {
        success: true,
        data: data
    }
}

export const updateData = (n) => {
    let k = Math.random()
    let success = k < 0.5 ? true : false
    if( success) {
        data.splice(n, 1)
    }
    return success
}