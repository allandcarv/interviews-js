import type { FC } from 'react';

import { Squares } from './components/Squares/Squares';

export const App: FC = () => <Squares columns={4} rows={8} />;
