import Button from 'react-bootstrap/Button';

function ProjectsCard(props) {
    return (
        <div>
            <div className="card">
                <div className="img-container">
                    <img className='project-img' alt={props.name} src={props.image} />
                </div>
                <div className="card-content">
                    <h2 className="card-title">{props.name}</h2>
                    <a href={props.link}>
                        <Button className="btn-card">Go to repo </Button>
                    </a>
                    <a href={props.deplo}>
                        <Button className="btn-card">Go to project </Button>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default ProjectsCard;