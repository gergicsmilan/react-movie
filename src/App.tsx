import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BrowserSwitch from "./routes/BrowserSwitch";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, staleTime: 3600000 } },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserSwitch />
  </QueryClientProvider>
);

export default App;
