import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true, error: err };
  }

  componentDidCatch(err, errInfo) {
    console.log(`err :: ${err}`);
    console.log(`errInfo :: ${errInfo}`);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <div>{this.props.fallback}</div>;
    }

    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
