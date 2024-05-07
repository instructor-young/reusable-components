import Button from "./components/Button";
import Row from "./components/Row";

function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-2">
      <Row>
        <Button rounded outline size="sm" variant="danger">
          짬뽕
        </Button>
      </Row>

      <Row>
        <Button rounded>Rounded</Button>
        <Button>Not Rounded</Button>
      </Row>

      <Row>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Row>

      <Row>
        <Button>Primary</Button>
        <Button outline>Primary</Button>
      </Row>

      <Row>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" outline>
          Secondary
        </Button>
      </Row>

      <Row>
        <Button variant="warning">Warning</Button>
        <Button variant="warning" outline>
          Warning
        </Button>
      </Row>

      <Row>
        <Button variant="danger">Danger</Button>
        <Button variant="danger" outline>
          Danger
        </Button>
      </Row>

      <Row>
        <Button variant="info">Info</Button>
        <Button variant="info" outline>
          Info
        </Button>
      </Row>
    </main>
  );
}

export default App;
