import WalletContextProvider from "./pages/wallet/WalletContext"

function App() {
  return (
    <WalletContextProvider>
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bet' element={<Bet />} />
      </Routes>
    </div>
    </WalletContextProvider>
  )
}

export default App
