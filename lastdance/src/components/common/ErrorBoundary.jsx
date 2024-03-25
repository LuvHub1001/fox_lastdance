/* eslint-disable react/prop-types */
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(err, errInfo) {
    console.log(`error :: ${err}`);
    console.log(`errorInfo :: ${errInfo}`);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <div>{this.props.fallback}</div>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
