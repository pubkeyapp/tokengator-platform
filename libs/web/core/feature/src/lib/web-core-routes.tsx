import { UiNotFound } from '@pubkey-ui/core'
import { AuthLoginFeature, AuthRegisterFeature } from '@tokengator/web-auth-feature'
import { webHomeRoutes } from '@tokengator/web-home-feature'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { useGuardedRoutes } from './use-guarded-routes'
import { webCoreRoutesAnon } from './web-core-routes-anon'

export const LazyAdminFeature = lazy(() => import('./web-core-routes-admin'))
export const LazyUserFeature = lazy(() => import('./web-core-routes-user'))

export function WebCoreRoutes() {
  return useGuardedRoutes({
    index: '/home',
    admin: [
      // Here you can add routes that are only accessible by admins under the /admin/* path
      // Visit /admin/custom-admin-page to see this route
      // { path: 'custom-admin-page', element: <div>CUSTOM ADMIN PAGE HERE</div> },
      { path: '*', element: <LazyAdminFeature /> },
    ],
    layout: [
      // Here you can add routes that are part of the main layout
      { path: '*', element: <LazyUserFeature /> },
    ],
    full: [
      // Here you can add routes that are not part of the main layout, visit /custom-full-page to see this route
      // { path: 'custom-full-page', element: <div>CUSTOM FULL PAGE</div> },
    ],
    public: [
      // Routes for the auth feature
      { path: '/login', element: <AuthLoginFeature /> },
      { path: '/register', element: <AuthRegisterFeature /> },
      // Homepage
      ...webCoreRoutesAnon,
      ...webHomeRoutes,
      // Routes for the 404 page
      { path: '/404', element: <UiNotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  })
}
