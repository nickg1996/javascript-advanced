/* Hello world - using a pure component */

const NestedComponent = () => (
  <h1>Hello Jon!</h1>
);

const renderHelloJon = () => {
  ReactDOM.render(
   <div>
    This is a simple example of some JSX with a nested component
    <NestedComponent/>

    Refresh the page to return to the main menu.
  </div>,
  document.getElementById('root')
  );
};

addLink("Hello Jon", renderHelloJon);

