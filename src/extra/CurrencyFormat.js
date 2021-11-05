export default (price) => {
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}