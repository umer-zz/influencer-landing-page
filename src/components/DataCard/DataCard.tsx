import './Datacard.scss'


interface DataCardprops {
    img: string,
    title: string,
    description: string,
    roadmap?: boolean
}

const DataCard = (props: DataCardprops) => {
    return (
        <div className="DataCard">
            <img src={props.img} alt="" />
            <p className="title">{props.title} {props?.roadmap && <span className='roadmap'>(Raodmap)</span>}</p>
            <p className="description">{props.description}</p>
            <a href="#">Learn more</a>
        </div>
    );
}

export default DataCard;