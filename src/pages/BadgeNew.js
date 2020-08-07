import React from 'react';

import api from '../api'
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component {
  state = { 
    loading : false,
    error : null,
    form : { }
  }

  handleChange = e => {
    this.setState( {
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState ({ loading:true, error:null })

    try{
      await api.badges.create( this.state.form )
      this.setState ({ loading:false })
      this.props.history.push('/badges')
    }catch (error) {
      this.setState ({ loading:false, error:error })
    }
  }

  render() {
    if( this.state.loading){
      return <PageLoading/>
    }
    return (
      <React.Fragment>
        
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName || 'FRIST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                email={this.state.form.email || 'EMAIL'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                avatarUrl="https://www.gravatar.com/avatar/bd97d274defd330297e4fb4a8cec9495?d=identicon"
              />
            </div>

            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm 
                onChange = { this.handleChange }
                onSubmit = { this.handleSubmit }
                formValues = { this.state.form }
                error= {this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
