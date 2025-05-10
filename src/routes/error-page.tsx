// import { useRouterState } from "@tanstack/react-router";

// type RouteError = {
//   statusText: string;
//   message: string;
// };

export default function ErrorPage() {
  // const routerState = useRouterState();
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
