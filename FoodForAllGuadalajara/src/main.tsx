import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { Route, Switch } from "wouter";
import Navbar from "./components/Navbar";
import Landing from "./pages/landing";
import Eventos from "./pages/about";
import Apadrinar from "./pages/apadrinar";
import Localization from "./pages/localizacion";
import Recetas from "./pages/recetas";
import Conocenos from "./pages/conocenos";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/login";
import Receta from "./pages/recetasind";

/**
 * En esta pagina se maneja el routing de la aplicacion
 * Para crear una nueva ruta, agerega un componente de <Route path="/ruta" component={Componente} />
 *
 * Donde el Componente es tu pagina
 */

/**
 * Usamos react query para hacer nuestras requests de HTTP
 * Este es el cliente que se le da al Query Provider para que podemos hacer requests desde toda la aplicacion
 */
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-screen">
        <Navbar />
        <Switch>
          {/* Rutas publicas */}
          <Route path="/" component={Landing} />
          <Route path="/login" component={LoginPage} />
          <Route path="/localizacion" component={Localization} />
          <Route path="/conocenos" component={Conocenos} />

          {/* Protected routes */}
          <Route
            path="/recetas"
            component={(props) => (
              <ProtectedRoute component={Recetas} {...props} />
            )}
          />
          <Route
            path="/eventos"
            component={(props) => (
              <ProtectedRoute component={Eventos} {...props} />
            )}
          />
          <Route
            path="/apadrinar"
            component={(props) => (
              <ProtectedRoute component={Apadrinar} {...props} />
            )}
          />
          <Route 
            path={"/recetas/:id"}
          >
            {(params) => <Receta id={params.id} />}
          </Route>
        </Switch>
      </div>
    </QueryClientProvider>
  </StrictMode>
);
