import React from 'react'
import ResultListItem from './ResultListItem';

const ResultList = ({ reposArray }) => (
    <div>
        { reposArray.map((repo, i) => {
        return <ResultListItem
            key={repo.id}
            resultNumber={i+1}
            name={repo.name}
            owner={repo.owner.login}
            htmlUrl={repo.html_url}
            stars={repo.stargazers_count}
        />
        }) }
    </div>
)

export default ResultList
