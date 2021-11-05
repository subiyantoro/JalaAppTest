const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]

export const formatDate = (date) => {
    const dateObj = new Date(date + "T00:00:00")
    const tgl = dateObj.getDate()
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()
    return tgl + ' ' + month + ' ' + year
}

export const formatDateNews = (date: String) => {
    const arr = date.split(" ")
    const arrJoin = arr.join("T")
    const dateObj = new Date(arrJoin)
    const tgl = dateObj.getDate()
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()
    return tgl + ' ' + month + ' ' + year
}