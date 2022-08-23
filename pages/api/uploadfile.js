const handler = (req, res) => {
    console.log(req.files);

    res.status(200).send({})
}



export default handler