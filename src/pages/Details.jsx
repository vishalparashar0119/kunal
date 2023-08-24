import React from 'react'
import img from '../imag/img.jpeg'
import img1 from '../imag/img2.jpeg'
import img2 from '../imag/img3.jpeg'
import img3 from '../imag/img4.jpeg'
import { useParams } from 'react-router-dom'

const data = [
    {
        id : 1,
        imgSrc : img,
        name : 'Amer Fort',
        destination : 'Jaipur(Rajasthan)',
        description : "Amer Palace is situated on a forested hill promontory that juts into Maota Lake near the town of Amer, about 11 kilometres (6.8 mi) from Jaipur city, the capital of Rajasthan. The palace is near National Highway 11C to Delhi."
    },
    {
        
            id : 2,
            imgSrc : img1,
            name : 'NaharGarh Fort',
            destination : 'Jaipur(Rajasthan)',
            description : 'Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, Nahargarh once formed a strong defence ring for the city. The fort was originally named Sudershangarh, but it became known as Nahargarh, which means '
        
    },
    {
        
        id : 3,
        imgSrc : img2,
        name : 'Hawa Mahal',
        destination : 'Jaipur(Rajasthan)',
        description : 'The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or womens chambers. '
    
},
{
        
    id : 4,
    imgSrc : img3,
    name : 'Jantar Mantar',
    destination : 'Jaipur(Rajasthan)',
    description : 'The Jantar Mantar, Jaipur is a collection of 19 astronomical instruments built by the Rajput king Sawai Jai Singh, the founder of Jaipur, Rajasthan. The monument was completed in 1734. '

},
{
        
    id : 5,
    imgSrc : img2,
    name : 'Hawa Mahal',
    destination : 'Jaipur(Rajasthan)',
    description : 'The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or womens chambers. '

},
{
    id : 6,
    imgSrc : img,
    name : 'Amer Fort',
    destination : 'Jaipur(Rajasthan)',
    description : "Amer Palace is situated on a forested hill promontory that juts into Maota Lake near the town of Amer, about 11 kilometres (6.8 mi) from Jaipur city, the capital of Rajasthan. The palace is near National Highway 11C to Delhi."
},
{
    
        id : 7,
        imgSrc : img1,
        name : 'NaharGarh Fort',
        destination : 'Jaipur(Rajasthan)',
        description : 'Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, Nahargarh once formed a strong defence ring for the city. The fort was originally named Sudershangarh, but it became known as Nahargarh, which means '
    
}

]

const Details = () => {
    const {id} = useParams();
     const det = data.find(item=>item.id ===id);
  return (
    <div>
        <img src={det.imgSrc} alt="" />
        
    </div>
    
  )
}

export default Details