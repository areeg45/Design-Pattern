import { Button } from './components/Button';
import { ToastContainer } from './components/ToastContainer';
import { observable, toast } from './task2';

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => {toast("Default")}}>Default</Button>
        <Button onClick={() => {toast.success("success")}}>Success ✅</Button>
        <Button onClick={() => {toast.error("error")}}>Error ❌</Button>
        <Button onClick={() => {toast.dismissAll()}}>Remove</Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
