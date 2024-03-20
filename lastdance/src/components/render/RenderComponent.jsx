function RenderComponent(className, items, render) {
  return <div className={className}>{items.map((item) => render(item))}</div>;
}
export default RenderComponent;
