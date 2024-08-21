import React, { Component } from 'react'

export class ErrorBroundry extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
     return <h3>Something went wrong</h3>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBroundry