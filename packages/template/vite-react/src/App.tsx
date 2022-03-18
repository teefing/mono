function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-20 text-red-300">
      <text onClick={() => setCount(count + 1)}>hello world {count}</text>
    </div>
  )
}

export default App
