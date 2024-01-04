//* Utilizamos como directorio de rutas y usarlo dinamicamente , todo lo que agreguemos aca , se agrega a las routes de navigation 
import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-Lazyload/pages/NoLazy";
// import { LazyLoad1,LazyLoad2,LazyLoad3 } from "../01-Lazyload/pages";

type JSXComponent = () => JSX.Element


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    
}

const LazyLayout = lazy(()=> import('../01-Lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }

];