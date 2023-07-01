import './SearchCard.scss'

interface searchCardProps {
    title: string,
    description: string,
    bg: string,
    img: string
}

const SearchCard = (props: searchCardProps) => {
    return (
        <div className="Card">
            <img src={props.bg} alt="" className='bg-image' />
            <div className='d-flex flex-column h-100'>
                <img src={props.img} alt="" className='image flex-grow-1' />
                <div style={{ padding: 30 }}>
                    <p className='title'>{props.title}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SearchCard;