import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Home from '../modules/components/Homes/Home'
import Explore from '../modules/components/Explore/Explore'
import Messages from '../modules/components/Messages/Messages'
import PageNotFound from '../modules/components/PageNotFound404/PageNotFound404'

// import Feeds from '../modules/components/Explore/widgets/Feeds'
// import Reels from '../modules/components/Explore/widgets/Reels'
// import FYP from '../modules/components/Explore/widgets/FYP'
// import Profiles from '../modules/components/Profiles/Profiles'

export default function AppRoute() {
    return (
        <Routes>
            <Route path='*' element={<PageNotFound />} />
            
            <Route index element={<Layouts><Home /></Layouts>} />
            
            <Route path='home' element={<Layouts><Home /></Layouts>} />
            <Route path='explore' element={<Layouts><Explore /></Layouts>} />
                {/* <Route path="feeds" element={<Feeds />} />
                <Route path="reels" element={<Reels />} />
                <Route path="fyp" element={<FYP />} /> */}
            {/* <Route path='profile' element={<Layouts><Profiles /></Layouts>} /> */}
            <Route path='messages' element={<Layouts><Messages /></Layouts>} />
        </Routes>
    )
}