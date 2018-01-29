import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import  api from '../api/api'
import fetchUsers from '../actions/users';

function SelectLanguage(props) {

    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    
    return (
        <div>
            <ul className='nav'>
                {languages.map(function(language) { return(
                    <li
                        className={language === props.selectedLanguage ? `li-active` : null}
                        onClick={props.onSelect.bind(null, language)}
                        key={language}> 
                        {language}
                    </li>)        
                })}
            </ul>
        </div>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

function RepoGrid(props) {
    return (
        <ul className='popular-list'>
            {console.log("REPOS ==> ", props.repos)}
            {props.repos.map(function (repo, index) { return(
                <li key={repo.name} className='popular-item'>
                    <div className='popular-rank'>#{index + 1}</div>
                    <ul className='space-list-items'>
                        <li>
                            <img
                                className='avatar'
                                src={repo.owner.avatar_url}
                                alt={'Avatar for ' + repo.owner.login}
                            />
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>)
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired 
}

class Popular extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);

        fetchUsers();
    }

    updateLanguage(language) {
        this.setState(function() {
            return  {
                selectedLanguage: language,
                repos: null
            }
        });

        api.fetchPopularRepos(language)
            .then(function(repos) {
                this.setState(function() {
                    console.log(repos);
                    return {
                        repos: repos
                    }
                })
            }.bind(this));
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    render() {
        return(
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos
                    ? <p>LOADING</p>
                    : <RepoGrid repos={this.state.repos} />
                }
            </div>
        )
    }
}

export default Popular;