//@flow
import * as React from 'react';
import { connect } from 'react-redux';

type Props = {
  authenticated: boolean
}

export default function (ComposedComponent: React.Component) {
  class Authentication extends React.Component<Props> {
    static contextTypes = {
      router: React.PropTypes.object
    }

    render() {
      console.log(this.context)
      return <ComposedComponent {...this.props}/>
    }
  }

  const mapStateToProps = (state) => (
    {
      authenticated: state.authenticated
    }
  )

  return connect(mapStateToProps)(Authentication);
}

