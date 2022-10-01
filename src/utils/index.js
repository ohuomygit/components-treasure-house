export const randomColor = () => {
    let r = Math.floor(Math.random() * 256)
    let b = Math.abs(r -100)
    let g = Math.abs(b -100)
    // return `ragb(${r},${b},${g},1)`
    return `rgba(${r},${b},${g}, 0.5)`
}