import { useParams } from "react-router";
import "./App.css";
import { Badge } from "./components/ui/badge";

function App() {
  //TODO: get the id from the url and render the destination if id is not null
  const { id } = useParams<{ id: string }>();
  console.log("id", id);
  return (
    <Badge variant="default">Testing shadcn</Badge>
  );
}

export default App;
