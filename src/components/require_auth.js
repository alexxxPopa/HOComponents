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

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push('/')
      }
    }

    componentWillUpdate(nextProps: Props) {
      if(!nextProps.authenticated) {
        this.context.router.history.push('/')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => (
    {
      authenticated: state.authenticated
    }
  )

  return connect(mapStateToProps)(Authentication);
}

