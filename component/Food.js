const get = (req,res)=>{
    res.send([
          {
            "id": 43,
            "title": "A vegetarian fast food dish.",
            "Image": "https://wallpaperforu.com/wp-content/uploads/2020/08/food-wallpaper-20080219233416-scaled.jpg",
            "category": "Food",
            "description": "Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper."
          },
          {
            "id": 44,
            "title": "Biryani is a popular one from the town in Tamil Nadu and boasts of aromatic flavours of the local spices.",
            "Image": "https://s3images.zee5.com/wp-content/uploads/sites/7/2020/07/mutton-biryani-punjab-grill-scaled.jpg",
            "category": "Food",
            "description": "A hearty mutton biryani that will amaze your guests! Layers of mutton and saffron-milk infused rice cooked 'dum' style"
          },
          {
            "id": 45,
            "title": " Dosa,Naan is a leavened, oven-baked flatbread. You normally serve Naan with all meals.",
            "Image": "https://th.bing.com/th/id/R.527cd582e1ca2b8e870299b2b245e4de?rik=0Qzle9DmCPg%2boA&riu=http%3a%2f%2fwww.palmbeachuk.com%2fblog%2fwp-content%2fuploads%2f2016%2f04%2fmasala-dosa-re.jpg&ehk=KCuCr8cfy%2f%2fEseIAYgvYrEdpmqx4fgiQlqfPC3RGxCE%3d&risl=&pid=ImgRaw&r=0",
            "category": "Food",
            "description": "Dosas are a typical South Indian staple consisting of crepes made from fermented rice and lentils. Highlights Dosa is a staple dish in south India Paired with sambar and chutneys."
          },
          {
            "id": 46,
            "title": "The chicken is marinated in yogurt and seasoned with the spice mixture tandoori masala.",
            "Image": "https://th.bing.com/th/id/R.dbe0b9a01d76ff207a5faaeb222c9ea4?rik=A%2fftKwiLPvhhGA&riu=http%3a%2f%2fwww.newideafood.com.au%2fmedia%2f20271%2ftandoori-chicken.jpg&ehk=uH2OIBrhucNwCcgbDi80sfCy5wqrRTMueqKOF7opc4k%3d&risl=&pid=ImgRaw&r=0",
            "category": "food",
            "description": "Ancient Sanskrit treatise Sushruta Samhita mentions meat marinated with mustard powder and fragrant spices being cooked in clay ovens."
          },
          {
            "id": 46,
            "title": "Samsa or samosas with meat and vegetables Samsa or samosas with meat and vegetables on wooden table.",
            "Image": "https://blog-cdn.healthifyme.com/blog/wp-content/uploads/2018/07/17195616/Samosa-1140x760.jpeg",
            "category": "Food",
            "description": "​​ A samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, peas. It may take different forms, including triangular, cone, or half-moon shapes,"
          },
          
    ])
}

module.exports.apiController = get;