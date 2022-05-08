export const generateColor = () => {
    const color = ["#f79f79", "#87b6a7", "#b298dc", "#963659", "#4974ca", "#bf4e30", "#169c98", "#a8577e", "#dcb671", "#a4bfce" , "#5e00f5" , "#3e6690"]

    const random = Math.floor(Math.random() * color.length)

    return color[random]

}