import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
    to: string
    path: string
    name: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    //todo lo que arranque con lazyload, va a cargar CON ESTE PATH
    //de acá, del *, va a haber otro router que va a saber a donde navegar
    {
        to: '/lazyload',
        path: 'lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]