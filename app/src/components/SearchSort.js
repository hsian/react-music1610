import React,{Component} from "react";

class SearchSortItem extends Component{
	constructor(props){
		super(props);
		this.handleSearchSortItem = this.handleSearchSortItem.bind(this);
	}

	handleSearchSortItem(e){
		console.log(e.target.innerHTML)
		this.props.filterText(e.target.innerHTML)
	}

	render(){
		var data = this.props.data;
		var _this = this;

		function handleSearchSortItem(e){
			_this.props.filterText(e.target.innerText)
		}

		return (
			<li><a href="javascript:;" onClick={handleSearchSortItem}>{data.name} - {data.singer}</a></li>
		);
	}
}

class SearchSort extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var arrayLis = [];
		var itemList = this.props.data.itemlist;
		var self = this;

		itemList.forEach(function(e,i){
			arrayLis.push(<SearchSortItem data={e} filterText={self.props.filterText} key={i}/>);
		})

		return (
			<div className="search-sort-list">
				<h4>{this.props.header}</h4>
				<ul>
					{arrayLis}
				</ul>
			</div>
		);
	}
}

export default SearchSort