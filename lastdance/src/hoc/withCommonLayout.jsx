import { Header } from "../components";

function withCommonLayout(Component) {
  const WrappedComponent = () => {
    return (
      <div>
        <Header />
        <div style={{ height: "calc(100vh - 200px)" }}>
          <Component />
        </div>
        <div style={{ height: "100px" }}>Footer</div>
      </div>
    );
  };

  return WrappedComponent;
}
export default withCommonLayout;
