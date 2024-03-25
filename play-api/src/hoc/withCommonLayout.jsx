function withCommonLayout(Component) {
  const WrapperComponent = () => {
    return (
      <div>
        <Component />
      </div>
    );
  };

  return WrapperComponent;
}
export default withCommonLayout;
