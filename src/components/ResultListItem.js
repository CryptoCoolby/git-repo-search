import React from 'react'

const ResultListItem = ({ resultNumber, name, owner, htmlUrl, stars }) => (
    <div className='list-item'>
        <a href={htmlUrl} target='_blank'>
            <div className='list-item-name'>
                    {resultNumber + '. ' + name}
            </div>
            <div className='list-item-details'>
                <div>
                    <i className="fas fa-user"></i> {owner}
                </div>
                <div>
                    <i className="fas fa-star"></i> {stars}
                </div>
            </div>
        </a>
    </div>
)

export default ResultListItem
