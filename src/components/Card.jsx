
import CardStyle from "../scss/card.module.scss"


const Card = ({data}) => {

  console.log(data);

  return <div className={CardStyle.container}>


    {data.map((item)=>{


      return (<div className={CardStyle.card}>


      </div>)

    })}

  </div>
}

export default Card
