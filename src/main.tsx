import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import { Toaster } from '@/components/ui/sonner';
import '@/index.css'
import { LeadCaptureSheet } from '@/components/LeadCaptureSheet'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { MarketAnalysisPage } from '@/pages/MarketAnalysisPage'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/digital-agency",
    element: <MarketAnalysisPage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <LeadCaptureSheet />
        <Toaster richColors closeButton position="bottom-right" />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)