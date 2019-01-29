import React from 'react'
import SearchBox from './SearchBox'
import ResultList from './ResultList'

class App extends React.Component {
	state = {
		reposArray: [],
		delayTimer: {}
	}
	getSearchResults = (e) => {
		const inputValue = e.target.value.trim()
		if (inputValue) {
			const searchQuery = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(inputValue) + '&sort=stars'
			this.delaySearch(searchQuery)
		}
	}
	delaySearch = (searchQuery) => {
		clearTimeout(this.state.delayTimer)
		const delayTimer = setTimeout(() => {
			this.doSearch(searchQuery)
		}, 500)
		this.setState(() => ({
			delayTimer
		}))

	}
	doSearch = (searchQuery) => {
		fetch(searchQuery)
			.then(response => response.json())
			.then((response) => {
				if (response.message) return

				const reposArray = response.items
				this.setState(() => ({
					reposArray
				}))
			})
			.catch(e => console.log(e))
	}
	render() {
		return (
			<div className='app'>
				<SearchBox getSearchResults={ this.getSearchResults } />
				<ResultList reposArray= { this.state.reposArray } />
			</div>
		)
	}
}

export default App