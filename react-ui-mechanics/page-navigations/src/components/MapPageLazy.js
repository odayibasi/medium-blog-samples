import React,{Suspense} from 'react';

const MapPageOther = React.lazy(() => import('./MapPage'))
const MapPageLazy = () => {
    return (
        <div>
            <Suspense fallback={<div>Looding ... </div>}>
                <MapPageOther/>
            </Suspense>
        </div>)
};
export default MapPageLazy;
