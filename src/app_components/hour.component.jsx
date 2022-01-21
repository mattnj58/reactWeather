import React from "react";
import Card from './card.component'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ClipLoader } from "react-spinners";

const Hour = (props) =>{
    let hours=props.hourly

    return(
        (hours ? 
			<ScrollMenu LeftArrow={ArrowLeft} RightArrow={ArrowRight}>
			{hours.map((value) => {
				return(
					<Card 
                        time={value.dt}
                        temp={value.temp} 
                        icon={value.weather[0].icon}
                        main={value.weather[0].main}
                    />
				)
			})}
			</ScrollMenu>
		:<div>
			<ClipLoader/>
		</div>)
    )
}

const Arrow = ({text}) => {
    return (
        <div>{text}</div>
    )
}

const ArrowLeft = Arrow({text:'<'});
const ArrowRight = Arrow({text: '>'})

export default Hour;