import './Solutioncard.scss'

interface SolutionCardprops {
    title: string,
    description: string,
    image: string
}

const SolutionCard = (props: SolutionCardprops) => {
    return (
        <div className="solutionCard">
            <img src={props.image} alt="" className='image' />
            <p className='title'>{props.title}</p>
            <p className='description'>{props.description}</p>
        </div>
    );
}

export default SolutionCard;