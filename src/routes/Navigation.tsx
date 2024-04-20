import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="react logo"></img>
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}
                                            to={to}
                                        >{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component }) => {
                                return (
                                    <Route key={path} path={path} element={<Component />}></Route>
                                )
                            })
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace></Navigate>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
