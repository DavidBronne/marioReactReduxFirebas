import React from 'react'

function ProjectDetails(props) {
    console.log('props :>> ', props);
    const {id} = props.match.params
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores voluptates sit, cupiditate quidem corrupti molestiae perspiciatis eos mollitia, a, accusamus reiciendis ducimus quae saepe facere? Veritatis doloremque praesentium blanditiis?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by ELiot</div>
                    <div>July 1st</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
