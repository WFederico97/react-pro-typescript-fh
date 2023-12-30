//* Utilizamos como directorio de rutas y usarlo dinamicamente , todo lo que agreguemos aca , se agrega a las routes de navigation 
import { LazyExoticComponent, lazy } from "react";
// import { LazyLoad1,LazyLoad2,LazyLoad3 } from "../01-Lazyload/pages";

type JSXComponent = () => JSX.Element


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    
}

const Lazy1 = lazy(()=> import('../01-Lazyload/pages/LazyLoad1'))
const Lazy2 = lazy(()=> import('../01-Lazyload/pages/LazyLoad2'))
const Lazy3 = lazy(()=> import('../01-Lazyload/pages/LazyLoad3'))

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'
    },

];