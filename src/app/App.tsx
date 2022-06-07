import React from 'react'

import { Preloader } from '~/components'

export const App: React.FC = () => {
	return <React.Suspense fallback={<Preloader />}>Hello World!</React.Suspense>
}
