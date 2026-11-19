import { useState } from "react";
import { supabase } from "./services/supabase";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AppLayout from "./Components/AppLayout/AppLayout";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import BookPage from "./Pages/BookPage/BookPage";
import Player from "./Pages/Player/Player";
import Settings from "./Pages/Settings/Settings";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./assets/GlobalStyle/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/Theme/Theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <HashRouter>
            <Routes>
              <Route path="/login" element="Login" />
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/book/:id" element={<BookPage />} />
                <Route path="/player/:trackid" element={<Player />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Routes>
          </HashRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
